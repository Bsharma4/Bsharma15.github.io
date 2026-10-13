import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Mail, FileDown} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/content";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-reveal",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 75%" },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={ref} className="py-32 px-6 bg-void relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(34,211,238,0.12), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-3xl text-center relative">
        <p className="contact-reveal opacity-0 font-mono-code text-cyan-400 text-xs tracking-[0.3em] uppercase mb-4">
          Get In Touch
        </p>
        <h2 className="contact-reveal opacity-0 font-display text-4xl sm:text-5xl font-bold text-gradient mb-6">
          Let's Build Something Intelligent.
        </h2>
        <p className="contact-reveal opacity-0 text-mist text-base sm:text-lg mb-10 max-w-xl mx-auto">
          Open to senior data engineering and analytics engineering roles. Reach out directly —
          I read every message.
        </p>

        <div className="contact-reveal opacity-0 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black hover:opacity-90 transition-opacity focus-ring"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-6 py-3 rounded-full glass hover:glow-cyan transition-shadow focus-ring"
          >
            <FileDown size={16} />
            Download Resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-3 rounded-full glass hover:glow-cyan transition-shadow focus-ring"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 rounded-full glass hover:glow-cyan transition-shadow focus-ring"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
