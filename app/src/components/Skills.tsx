import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillGroups } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".skill-card");
      gsap.fromTo(
        cards,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.07,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-28 px-6 bg-void relative">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono-code text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3">
          Engineering Stack
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-14">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.label}
              className="skill-card glass rounded-2xl p-6 opacity-0 hover:border-cyan-400/40 hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-display font-semibold text-white mb-4">{group.label}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono-code px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-mist"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
