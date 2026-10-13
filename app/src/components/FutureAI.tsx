import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Sparkles, Brain, Database, Bot } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DELIVERED = [
  {
    icon: Brain,
    title: "LLM Text-to-SQL",
    desc: "Shipped in the Insurance Agency AI Analyst — a guarded natural-language-to-SQL layer over a Kimball star schema, using the Google Gemini API with a two-layer safety guard.",
  },
  {
    icon: Database,
    title: "RAG & Embeddings",
    desc: "Prototyped an LLM-assisted, retrieval-based review workflow at Shelter Insurance to accelerate COBOL-to-normalized-data analyst review, combining validation with embedding lookup (FAISS, Pinecone).",
  },
];

const EXPLORING = [
  {
    icon: Bot,
    title: "AI Agents for Data Ops",
    desc: "Researching agentic workflows that can triage pipeline failures and propose data-quality fixes before an engineer is paged.",
  },
  {
    icon: Sparkles,
    title: "Vector-Native Analytics",
    desc: "Exploring vector databases alongside traditional warehouses so semantic search and SQL analytics can share the same governed data.",
  },
];

export default function FutureAI() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ai-card",
        { opacity: 0, y: 28 },
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
    <section id="ai" ref={ref} className="py-28 px-6 bg-void relative">
      <div className="mx-auto max-w-6xl">
        <p className="font-mono-code text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3">
          Where Data Engineering Is Headed
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-14">
          The Next Generation of Data Engineering
        </h2>

        <h3 className="text-sm font-mono-code text-violet-300 uppercase tracking-wide mb-4">
          Delivered
        </h3>
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {DELIVERED.map((c) => (
            <div key={c.title} className="ai-card glass rounded-2xl p-6 opacity-0">
              <c.icon className="text-cyan-400 mb-3" size={22} />
              <h4 className="font-display font-semibold text-white mb-2">{c.title}</h4>
              <p className="text-sm text-mist">{c.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="text-sm font-mono-code text-violet-300 uppercase tracking-wide mb-4">
          Researching / Future Interest
        </h3>
        <div className="grid sm:grid-cols-2 gap-5">
          {EXPLORING.map((c) => (
            <div key={c.title} className="ai-card glass rounded-2xl p-6 opacity-0 border-dashed">
              <c.icon className="text-violet-400 mb-3" size={22} />
              <h4 className="font-display font-semibold text-white mb-2">{c.title}</h4>
              <p className="text-sm text-mist">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
