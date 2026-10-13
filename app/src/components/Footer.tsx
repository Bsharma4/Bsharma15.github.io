import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-void border-t border-white/10">
      <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-mist">
        <span>© {new Date().getFullYear()} {profile.name}. Built with React, Three.js & GSAP.</span>
        <div className="flex gap-5">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus-ring rounded">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus-ring rounded">
            LinkedIn
          </a>
          <a href={profile.medium} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors focus-ring rounded">
            Medium
          </a>
        </div>
      </div>
    </footer>
  );
}
