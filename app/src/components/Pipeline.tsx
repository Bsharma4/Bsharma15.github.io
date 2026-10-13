import { lazy, Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "../hooks/useReducedMotion";

gsap.registerPlugin(ScrollTrigger);

const PipelineScene = lazy(() => import("./PipelineScene"));

const STAGES = [
  {
    title: "Data Sources",
    desc: "Databases, APIs, cloud storage, JSON files, and streaming events enter the system as raw inputs.",
  },
  {
    title: "Data Ingestion",
    desc: "Python ingestion services and ETL connectors pull data in and move it downstream.",
  },
  {
    title: "Data Storage",
    desc: "Data lands in a Snowflake-style warehouse across raw, staging, and curated layers.",
  },
  {
    title: "SQL & dbt Transformations",
    desc: "Joins, aggregations, and data quality checks reshape curated data into trusted models.",
  },
  {
    title: "Orchestration",
    desc: "DAGs schedule, sequence, and monitor every job with clear dependencies and execution state.",
  },
  {
    title: "Analytics",
    desc: "Curated datasets become dashboards, KPIs, and business-ready visualizations.",
  },
  {
    title: "AI & Machine Learning",
    desc: "An intelligence layer connects embeddings, vector search, RAG, and LLM-powered analytics.",
  },
];

export default function Pipeline() {
  const reduced = useReducedMotion();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const progress = useRef(0);
  const [activeStage, setActiveStage] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (reduced || !wrapperRef.current || !pinRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: wrapperRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4,
        pin: pinRef.current,
        onUpdate: (self) => {
          progress.current = self.progress;
          const stage = Math.min(6, Math.floor(self.progress * 7));
          setActiveStage(stage);
          setIsComplete(self.progress > 0.96);
        },
      });
    });

    return () => ctx.revert();
  }, [reduced]);

  if (reduced) {
    return (
      <section id="pipeline" className="py-24 px-6 bg-ink">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-3">
            From Raw Data to Real Intelligence
          </h2>
          <p className="text-mist mb-12 max-w-xl">
            The data engineering journey, stage by stage.
          </p>
          <ol className="space-y-6">
            {STAGES.map((s, i) => (
              <li key={s.title} className="glass rounded-2xl p-6">
                <span className="font-mono-code text-cyan-400 text-xs">
                  STAGE {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-semibold mt-1">{s.title}</h3>
                <p className="text-mist text-sm mt-2">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  }

  return (
    <section id="pipeline" ref={wrapperRef} className="relative h-[650vh] bg-ink">
      <div ref={pinRef} className="sticky top-0 h-screen w-full overflow-hidden">
        <Suspense fallback={null}>
          <PipelineScene progress={progress} />
        </Suspense>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/70 via-transparent to-void/80" />

        <div className="pointer-events-none absolute inset-x-0 top-24 flex flex-col items-center px-6 text-center">
          <span className="font-mono-code text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3">
            {isComplete ? "Complete Data Platform" : `Stage ${activeStage + 1} / 7`}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-bold text-gradient max-w-3xl">
            {isComplete ? "From Raw Data to Real Intelligence." : STAGES[activeStage].title}
          </h2>
          <p className="text-mist max-w-md mt-3 text-sm sm:text-base">
            {STAGES[activeStage].desc}
          </p>
        </div>

        <div className="pointer-events-none absolute bottom-10 inset-x-0 flex justify-center gap-2">
          {STAGES.map((s, i) => (
            <span
              key={s.title}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeStage ? "w-8 bg-cyan-400" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
