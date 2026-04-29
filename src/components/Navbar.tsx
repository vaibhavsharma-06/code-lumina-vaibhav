import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/projects", label: "Projects" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border/60">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-lg tracking-widest text-gradient">
          VS<span className="text-foreground">.dev</span>
        </Link>
        <ul className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-muted-foreground hover:text-foreground transition-smooth relative"
                activeProps={{ className: "text-foreground" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-primary text-primary-foreground shadow-glow-sm hover:shadow-glow transition-smooth"
        >
          Hire Me
        </Link>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-background/90 backdrop-blur-xl">
          <ul className="px-6 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block text-muted-foreground hover:text-foreground"
                  activeProps={{ className: "text-foreground" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
