import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { projects } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

function MiniArchDiagram({ seed }: { seed: number }) {
  // Lightweight deterministic SVG "architecture" accent — no 3D cost per card.
  const nodes = [0, 1, 2].map((i) => ({
    cx: 20 + i * 40,
    cy: 24 + ((seed + i) % 3) * 8,
  }));
  return (
    <svg viewBox="0 0 100 48" className="w-full h-12" aria-hidden="true">
      <line x1={nodes[0].cx} y1={nodes[0].cy} x2={nodes[1].cx} y2={nodes[1].cy} stroke="#22d3ee" strokeOpacity="0.4" />
      <line x1={nodes[1].cx} y1={nodes[1].cy} x2={nodes[2].cx} y2={nodes[2].cy} stroke="#8b5cf6" strokeOpacity="0.4" />
      {nodes.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r="4" fill={i === 1 ? "#8b5cf6" : "#22d3ee"} fillOpacity="0.85" />
      ))}
    </svg>
  );
}

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".project-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={ref} className="py-28 px-6 bg-void relative">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono-code text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3">
          Real Work, Real Repos
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-14">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className="project-card glass rounded-2xl p-6 opacity-0 flex flex-col hover:border-cyan-400/40 transition-colors duration-300"
            >
              <MiniArchDiagram seed={i} />
              <h3 className="font-display text-lg font-semibold text-white mt-3">{p.name}</h3>
              {p.period && (
                <span className="font-mono-code text-xs text-cyan-400 mt-1">{p.period}</span>
              )}
              <p className="text-sm text-mist mt-3 flex-1">{p.summary}</p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono-code px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-mist"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t border-white/10">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors focus-ring rounded"
                  >
                    {l.label}
                    <ExternalLink size={13} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
