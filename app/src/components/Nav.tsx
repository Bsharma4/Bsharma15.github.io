import { useEffect, useState } from "react";
import {Mail, Menu, X, FileDown} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { profile } from "../data/content";

const links = [
  { href: "#hero", label: "Home" },
  { href: "#pipeline", label: "Pipeline" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#code", label: "Code" },
  { href: "#ai", label: "AI" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 flex items-center justify-between">
        <a
          href="#hero"
          className="font-display font-semibold tracking-tight text-lg text-white focus-ring rounded"
        >
          Brijesh<span className="text-cyan-400">.</span>Sharma
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-mist hover:text-white transition-colors focus-ring rounded"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-full glass hover:glow-cyan transition-shadow focus-ring"
          >
            <GithubIcon size={16} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-full glass hover:glow-cyan transition-shadow focus-ring"
          >
            <LinkedinIcon size={16} />
          </a>
          <a
            href={profile.resumeHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black hover:opacity-90 transition-opacity focus-ring"
          >
            <FileDown size={15} />
            Resume
          </a>
        </div>

        <button
          className="lg:hidden p-2 rounded-full glass focus-ring"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass mt-3 mx-4 rounded-2xl p-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-mist hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-white/10">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-full glass">
              <GithubIcon size={16} />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-full glass">
              <LinkedinIcon size={16} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email" className="p-2 rounded-full glass">
              <Mail size={16} />
            </a>
            <a
              href={profile.resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 text-black"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
