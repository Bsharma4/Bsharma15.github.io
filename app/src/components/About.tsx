import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { profile } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-reveal",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={ref} className="py-28 px-6 bg-ink relative">
      <div className="mx-auto max-w-4xl">
        <p className="about-reveal opacity-0 font-mono-code text-cyan-400 text-xs tracking-[0.3em] uppercase mb-3">
          About
        </p>
        <h2 className="about-reveal opacity-0 font-display text-3xl sm:text-4xl font-bold text-gradient mb-8">
          {profile.preferredName}
        </h2>
        <p className="about-reveal opacity-0 text-mist text-base sm:text-lg leading-relaxed mb-10">
          {profile.bio}
        </p>
        <div className="about-reveal opacity-0 grid sm:grid-cols-2 gap-3">
          {profile.bioHighlights.map((h) => (
            <div key={h} className="glass rounded-xl p-4 text-sm text-mist/90 flex gap-2">
              <span className="text-cyan-400 mt-0.5">▸</span>
              <span>{h}</span>
            </div>
          ))}
        </div>
        <div className="about-reveal opacity-0 flex flex-wrap gap-6 mt-10 text-sm text-mist">
          <span>{profile.experienceYears} Experience</span>
          <span>·</span>
          <span>{profile.degree}</span>
          <span>·</span>
          <span>{profile.location}</span>
        </div>
      </div>
    </section>
  );
}
