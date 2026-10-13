import { lazy, Suspense } from "react";
import {ChevronDown, FileDown} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/content";
import { useReducedMotion } from "../hooks/useReducedMotion";

const HeroScene = lazy(() => import("./HeroScene"));

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-void"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#05070d] via-[#070b16] to-[#05070d]" />
      <Suspense fallback={null}>
        <HeroScene reduced={reduced} />
      </Suspense>
      <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-void/60 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-16 w-full">
        <p className="font-mono-code text-cyan-400 text-xs sm:text-sm tracking-[0.3em] uppercase mb-6">
          {profile.name} · {profile.title}
        </p>
        <h1 className="font-display font-bold text-gradient leading-[0.95] text-[13vw] sm:text-[9vw] lg:text-[5.5vw] max-w-5xl">
          Engineering Data.
          <br />
          Powering Intelligence.
        </h1>
        <p className="mt-6 max-w-xl text-mist text-base sm:text-lg leading-relaxed">
          Building scalable data pipelines, intelligent analytics platforms, and
          AI-powered data solutions.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold text-sm hover:opacity-90 transition-opacity focus-ring"
          >
            View Projects
          </a>
          <a
            href="#experience"
            className="px-6 py-3 rounded-full glass text-white font-medium text-sm hover:glow-cyan transition-shadow focus-ring"
          >
            Explore My Experience
          </a>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 text-white font-medium text-sm hover:border-cyan-400/60 transition-colors focus-ring"
          >
            <FileDown size={15} />
            Download Resume
          </a>
        </div>

        <div className="mt-10 flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full glass hover:glow-cyan transition-shadow focus-ring"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full glass hover:glow-cyan transition-shadow focus-ring"
          >
            <LinkedinIcon size={17} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 inset-x-0 flex justify-center z-10 animate-bounce motion-reduce:animate-none">
        <ChevronDown className="text-mist" size={22} aria-hidden="true" />
      </div>
    </section>
  );
}
