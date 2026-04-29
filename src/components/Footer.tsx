import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vaibhav Sharma. Crafted with curiosity.
        </p>
        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="https://github.com" aria-label="GitHub" className="hover:text-primary transition-smooth"><Github size={18} /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-primary transition-smooth"><Linkedin size={18} /></a>
          <a href="mailto:hello@vaibhav.dev" aria-label="Email" className="hover:text-primary transition-smooth"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
