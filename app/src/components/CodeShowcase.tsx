import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { highlightSql, highlightPython } from "../lib/highlight";

gsap.registerPlugin(ScrollTrigger);

const SQL_CODE = `-- Agency performance: written premium & retention, trailing 12 months
WITH policy_facts AS (
    SELECT
        a.agency_id,
        a.state,
        f.policy_id,
        f.written_premium,
        f.is_renewal
    FROM curated.fact_policy f
    JOIN curated.dim_agency a
        ON f.agency_id = a.agency_id
    WHERE f.effective_date >= DATEADD(month, -12, CURRENT_DATE())
),
agency_rollup AS (
    SELECT
        agency_id,
        state,
        SUM(written_premium) AS total_premium,
        COUNT_IF(is_renewal) AS renewals,
        COUNT(*) AS total_policies,
        RANK() OVER (
            PARTITION BY state
            ORDER BY SUM(written_premium) DESC
        ) AS premium_rank_in_state
    FROM policy_facts
    GROUP BY agency_id, state
)
SELECT
    agency_id,
    state,
    total_premium,
    ROUND(renewals / NULLIF(total_policies, 0), 3) AS retention_rate,
    premium_rank_in_state
FROM agency_rollup
QUALIFY premium_rank_in_state <= 10
ORDER BY state, premium_rank_in_state;`;

const PY_CODE = `"""Ingest a daily extract, validate it, and hand off to staging."""
from dataclasses import dataclass
from pathlib import Path
import pandas as pd

REQUIRED_COLUMNS = {"claim_id", "policy_id", "loss_date", "paid_amount"}

@dataclass
class ValidationResult:
    is_valid: bool
    errors: list

def validate(df: pd.DataFrame) -> ValidationResult:
    errors = []
    missing = REQUIRED_COLUMNS - set(df.columns)
    if missing:
        errors.append(f"Missing columns: {sorted(missing)}")
    if df["claim_id"].duplicated().any():
        errors.append("Duplicate claim_id values found")
    if (df["paid_amount"] < 0).any():
        errors.append("Negative paid_amount values found")
    return ValidationResult(is_valid=not errors, errors=errors)

def ingest(path: Path) -> pd.DataFrame:
    df = pd.read_csv(path, parse_dates=["loss_date"])
    result = validate(df)
    if not result.is_valid:
        raise ValueError(f"Validation failed: {result.errors}")
    return df.drop_duplicates(subset="claim_id")`;

export default function CodeShowcase() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".code-panel",
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 72%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="code" ref={ref} className="py-28 px-6 bg-ink relative overflow-hidden">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono-code text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3">
          Demonstration Code
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-3">
          Code That Moves Data
        </h2>
        <p className="text-mist max-w-xl mb-14 text-sm">
          Two representative, technically-correct examples of how data gets
          transformed and validated. Shown for illustration — not live production
          execution.
        </p>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="code-panel glass rounded-2xl overflow-hidden opacity-0">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs font-mono-code text-mist">
                agency_performance.sql — Snowflake
              </span>
            </div>
            <pre className="p-5 text-[12.5px] leading-relaxed overflow-x-auto font-mono-code">
              <code dangerouslySetInnerHTML={{ __html: highlightSql(SQL_CODE) }} />
            </pre>
          </div>

          <div className="code-panel glass rounded-2xl overflow-hidden opacity-0">
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
              <span className="ml-3 text-xs font-mono-code text-mist">
                ingest_and_validate.py — Python
              </span>
            </div>
            <pre className="p-5 text-[12.5px] leading-relaxed overflow-x-auto font-mono-code">
              <code dangerouslySetInnerHTML={{ __html: highlightPython(PY_CODE) }} />
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
