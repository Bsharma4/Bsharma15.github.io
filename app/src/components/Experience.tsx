import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { experience, earlierExperience, education, certifications } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".timeline-item");
      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -24 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: item, start: "top 85%" },
          }
        );
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="experience" ref={ref} className="py-28 px-6 bg-ink relative">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono-code text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3">
          Career Timeline
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-gradient mb-14">
          Professional Experience
        </h2>

        <div className="relative border-l border-white/10 pl-8 space-y-10">
          {experience.map((role) => (
            <div key={role.role + role.period} className="timeline-item relative opacity-0">
              <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-cyan-400 glow-cyan" />
              <span className="font-mono-code text-xs text-cyan-400">{role.period}</span>
              <h3 className="font-display text-xl font-semibold text-white mt-1">{role.role}</h3>
              <p className="text-mist text-sm mb-3">
                {role.company} · {role.location}
              </p>
              <ul className="space-y-1.5">
                {role.points.map((p) => (
                  <li key={p} className="text-sm text-mist/90 flex gap-2">
                    <span className="text-cyan-400 mt-1">▸</span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="timeline-item relative opacity-0">
            <span className="absolute -left-[2.35rem] top-1.5 h-3 w-3 rounded-full bg-violet-400" />
            <h3 className="font-display text-base font-semibold text-white/80 mb-3">
              Earlier Experience
            </h3>
            <div className="space-y-4">
              {earlierExperience.map((role) => (
                <div key={role.role}>
                  <span className="font-mono-code text-xs text-violet-300">{role.period}</span>
                  <p className="text-sm font-medium text-white/90">
                    {role.role} · <span className="text-mist font-normal">{role.company}</span>
                  </p>
                  <p className="text-sm text-mist/80">{role.points[0]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 mt-16">
          <div className="timeline-item opacity-0">
            <h3 className="font-display font-semibold text-white mb-4">Education</h3>
            <div className="space-y-4">
              {education.map((e) => (
                <div key={e.degree} className="glass rounded-xl p-4">
                  <p className="text-sm font-medium text-white">{e.degree}</p>
                  <p className="text-xs text-cyan-400 font-mono-code mt-0.5">{e.period}</p>
                  <p className="text-xs text-mist mt-1">{e.school}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="timeline-item opacity-0">
            <h3 className="font-display font-semibold text-white mb-4">Certifications & Recognition</h3>
            <ul className="space-y-2.5">
              {certifications.map((c) => (
                <li key={c} className="text-sm text-mist flex gap-2">
                  <span className="text-violet-400 mt-0.5">✦</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
