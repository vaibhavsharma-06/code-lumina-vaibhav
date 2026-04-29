import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Mail, Phone, Github, Linkedin, Globe, Send } from "lucide-react";
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
  { icon: Mail, label: "Email", value: "vaibhav@example.com", href: "mailto:vaibhav@example.com" },
  { icon: Phone, label: "Phone", value: "+91 ▒▒▒▒▒ ▒▒▒▒▒", href: "tel:+910000000000" },
  { icon: Linkedin, label: "LinkedIn", value: "/in/vaibhav-sharma", href: "https://linkedin.com" },
  { icon: Github, label: "GitHub", value: "@vaibhav-sharma", href: "https://github.com" },
  { icon: Globe, label: "Portfolio", value: "vaibhav.dev", href: "#" },
];

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Build Something Intelligent"
        description="Open to collaborations, internships, research conversations, and ambitious side-projects."
      />

      <div className="grid md:grid-cols-5 gap-6">
        <div className="md:col-span-2 space-y-3">
          {channels.map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="glow-border rounded-xl p-4 flex items-center gap-4 transition-smooth"
            >
              <div className="w-11 h-11 rounded-lg bg-gradient-primary/20 grid place-items-center shadow-glow-sm">
                <c.icon className="text-primary" size={18} />
              </div>
              <div>
                <div className="text-xs font-display tracking-widest text-muted-foreground uppercase">{c.label}</div>
                <div className="text-sm font-medium">{c.value}</div>
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
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow-sm hover:shadow-glow transition-smooth"
          >
            <Send size={16} /> {sent ? "Message Queued" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}
