import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Github, ExternalLink, Bot, Vote, Cpu, ShieldAlert, ShoppingBag } from "lucide-react";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Vaibhav Sharma" },
      { name: "description", content: "A showcase of AI, blockchain, IoT, cybersecurity, and full-stack projects built by Vaibhav Sharma." },
      { property: "og:title", content: "Projects — Vaibhav Sharma" },
      { property: "og:description", content: "AI chatbots, blockchain voting, IoT monitoring, security trackers and more." },
    ],
  }),
  component: Projects,
});

const projects = [
  {
    icon: Bot,
    title: "AI-Powered Applications",
    description: "Intelligent chatbots and disease-detection models built with deep learning to deliver real-world impact.",
    stack: ["Python", "TensorFlow", "Keras", "Flask"],
    role: "ML Engineer · Full Stack",
  },
  {
    icon: Vote,
    title: "Blockchain Voting System",
    description: "Decentralized voting platform ensuring transparent, tamper-proof elections using smart contracts.",
    stack: ["Solidity", "Ethereum", "React", "Web3.js"],
    role: "Smart Contract Dev",
  },
  {
    icon: Cpu,
    title: "Real-Time IoT Monitoring",
    description: "Live telemetry dashboard streaming sensor data with sub-second latency and alerting.",
    stack: ["MQTT", "Node.js", "React", "InfluxDB"],
    role: "Systems Engineer",
  },
  {
    icon: ShieldAlert,
    title: "Cybersecurity Threat Tracker",
    description: "ML-driven threat intelligence platform detecting anomalies across network traffic in real time.",
    stack: ["Python", "Scikit-learn", "ELK Stack"],
    role: "Security & ML",
  },
  {
    icon: ShoppingBag,
    title: "Full-Stack E-Commerce Platform",
    description: "Production-grade storefront with auth, payments, and AI-powered product recommendations.",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    role: "Full Stack Lead",
  },
];

function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected Projects"
        description="A growing collection of products at the intersection of AI, systems, and product design."
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <article key={p.title} className="glow-border rounded-2xl p-6 transition-smooth flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary/20 grid place-items-center shadow-glow-sm">
                <p.icon className="text-primary" size={22} />
              </div>
              <div className="flex gap-2 text-muted-foreground">
                <a href="#" aria-label="GitHub" className="hover:text-primary transition-smooth"><Github size={16} /></a>
                <a href="#" aria-label="Live" className="hover:text-primary transition-smooth"><ExternalLink size={16} /></a>
              </div>
            </div>
            <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-5">
              {p.stack.map((t) => (
                <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-secondary/60 border border-border/80 text-muted-foreground tracking-wide">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border/50 text-xs font-display tracking-widest text-primary uppercase">
              {p.role}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
