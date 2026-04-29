import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Github, ExternalLink, Bot, Vote, Cpu, ShieldAlert, ShoppingBag, Sparkles,
} from "lucide-react";
import { useState } from "react";

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

type Category = "All" | "AI/ML" | "Web3" | "IoT" | "Security" | "Full-Stack";

const projects: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  stack: string[];
  role: string;
  category: Exclude<Category, "All">;
  featured?: boolean;
}[] = [
  {
    icon: Bot,
    title: "AI-Powered Applications",
    description: "Intelligent chatbots and disease-detection models built with deep learning to deliver real-world impact.",
    stack: ["Python", "TensorFlow", "Keras", "Flask"],
    role: "ML Engineer · Full Stack",
    category: "AI/ML",
    featured: true,
  },
  {
    icon: Vote,
    title: "Blockchain Voting System",
    description: "Decentralized voting platform ensuring transparent, tamper-proof elections using smart contracts.",
    stack: ["Solidity", "Ethereum", "React", "Web3.js"],
    role: "Smart Contract Dev",
    category: "Web3",
  },
  {
    icon: Cpu,
    title: "Real-Time IoT Monitoring",
    description: "Live telemetry dashboard streaming sensor data with sub-second latency and alerting.",
    stack: ["MQTT", "Node.js", "React", "InfluxDB"],
    role: "Systems Engineer",
    category: "IoT",
  },
  {
    icon: ShieldAlert,
    title: "Cybersecurity Threat Tracker",
    description: "ML-driven threat intelligence platform detecting anomalies across network traffic in real time.",
    stack: ["Python", "Scikit-learn", "ELK Stack"],
    role: "Security & ML",
    category: "Security",
  },
  {
    icon: ShoppingBag,
    title: "Full-Stack E-Commerce Platform",
    description: "Production-grade storefront with auth, payments, and AI-powered product recommendations.",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
    role: "Full Stack Lead",
    category: "Full-Stack",
    featured: true,
  },
];

const categories: Category[] = ["All", "AI/ML", "Web3", "IoT", "Security", "Full-Stack"];

function Projects() {
  const [filter, setFilter] = useState<Category>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="relative">
      <div className="absolute top-20 -left-32 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[120px] pointer-events-none" aria-hidden />
      <div className="absolute top-1/2 -right-32 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected Projects"
          description="A growing collection of products at the intersection of AI, systems, and product design."
        />

        {/* filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-4 py-2 rounded-full text-xs font-display tracking-widest uppercase transition-smooth border ${
                filter === c
                  ? "bg-gradient-primary text-primary-foreground border-transparent shadow-glow-sm"
                  : "border-border/80 bg-card/40 backdrop-blur text-muted-foreground hover:text-primary hover:border-primary/60"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.title}
              className={`glow-border rounded-2xl p-6 transition-smooth flex flex-col group animate-fade-up ${
                p.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-cyber blur-xl opacity-50 group-hover:opacity-80 transition-opacity" aria-hidden />
                  <div className="relative w-12 h-12 rounded-xl bg-gradient-primary/20 grid place-items-center shadow-glow-sm">
                    <p.icon className="text-primary" size={22} />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {p.featured && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-display tracking-widest text-accent px-2 py-1 rounded-full bg-accent/10 border border-accent/30 uppercase">
                      <Sparkles size={10} /> Featured
                    </span>
                  )}
                  <a href="#" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-smooth"><Github size={16} /></a>
                  <a href="#" aria-label="Live" className="text-muted-foreground hover:text-primary transition-smooth"><ExternalLink size={16} /></a>
                </div>
              </div>

              <span className="text-[10px] font-display tracking-widest text-primary uppercase mb-2">
                {p.category}
              </span>
              <h3 className="font-semibold text-lg mb-2 group-hover:text-gradient transition-smooth">{p.title}</h3>
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
    </div>
  );
}
