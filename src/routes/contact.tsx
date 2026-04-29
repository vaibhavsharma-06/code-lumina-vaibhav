import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Mail, Phone, Github, Linkedin, Globe, Send, Check } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Vaibhav Sharma" },
      { name: "description", content: "Reach out to Vaibhav Sharma — collaborations, internships, research, or just to talk AI." },
      { property: "og:title", content: "Contact — Vaibhav Sharma" },
      { property: "og:description", content: "Let's build something intelligent together." },
    ],
  }),
  component: Contact,
});

const channels = [
  { icon: Mail, label: "Email", value: "vaibhav.sharma20060@gmail.com", href: "mailto:vaibhav.sharma20060@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 63889 35645", href: "tel:+916388935645" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/vaibhavsharma0206", href: "https://www.linkedin.com/in/vaibhavsharma0206/" },
  { icon: Github, label: "GitHub", value: "@vaibhavsharma-06", href: "https://github.com/vaibhavsharma-06" },
  { icon: Globe, label: "Portfolio", value: "vaibhav.dev", href: "#" },
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="relative">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/15 blur-[140px] pointer-events-none" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Intelligent"
          description="Open to collaborations, internships, research conversations, and ambitious side-projects."
        />

        {/* status pill */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-display tracking-[0.2em] border border-electric/40 bg-electric/10 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-electric opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric" />
            </span>
            <span className="text-electric">RESPONDING WITHIN 24 HOURS</span>
          </span>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          <div className="md:col-span-2 space-y-3">
            {channels.map((c, i) => (
              <a
                key={c.label}
                href={c.href}
                className="glow-border rounded-xl p-4 flex items-center gap-4 transition-smooth animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div className="w-11 h-11 rounded-lg bg-gradient-primary/20 grid place-items-center shadow-glow-sm shrink-0">
                  <c.icon className="text-primary" size={18} />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-display tracking-widest text-muted-foreground uppercase">{c.label}</div>
                  <div className="text-sm font-medium truncate">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form
            className="md:col-span-3 glow-border rounded-2xl p-6 md:p-8 space-y-4"
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-display tracking-widest text-muted-foreground uppercase">Name</label>
                <input
                  required
                  className="mt-1 w-full rounded-lg bg-input/60 border border-border/80 px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:shadow-glow-sm transition-smooth"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-xs font-display tracking-widest text-muted-foreground uppercase">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-lg bg-input/60 border border-border/80 px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:shadow-glow-sm transition-smooth"
                  placeholder="you@domain.com"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-display tracking-widest text-muted-foreground uppercase">Message</label>
              <textarea
                required
                rows={6}
                className="mt-1 w-full rounded-lg bg-input/60 border border-border/80 px-4 py-2.5 text-sm focus:outline-none focus:border-primary focus:shadow-glow-sm transition-smooth resize-none"
                placeholder="Tell me about your idea or opportunity..."
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow-sm hover:shadow-glow transition-smooth overflow-hidden disabled:opacity-80"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              {sent ? <Check size={16} className="relative" /> : <Send size={16} className="relative" />}
              <span className="relative">{sent ? "Message Sent" : "Send Message"}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
