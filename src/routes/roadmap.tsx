import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircle2, Circle, Target, Trophy, Zap } from "lucide-react";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Career Roadmap — Vaibhav Sharma" },
      { name: "description", content: "A 3-year career roadmap visualizing foundations, specialization, and industry-readiness phases." },
      { property: "og:title", content: "Career Roadmap — Vaibhav Sharma" },
      { property: "og:description", content: "Foundations, specialization, and launch — a structured plan toward 2029." },
    ],
  }),
  component: Roadmap,
});

type Phase = {
  year: string;
  title: string;
  start: number;
  end: number;
  color: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  items: string[];
  done?: boolean;
  active?: boolean;
};

const phases: Phase[] = [
  {
    year: "Year 1 · 2025–2026",
    title: "Foundations",
    start: 0,
    end: 38,
    color: "from-primary to-neon",
    icon: Target,
    active: true,
    items: ["Programming fluency (Python, Java, C++)", "Data Structures & Algorithms", "Version control & first projects", "Web fundamentals"],
  },
  {
    year: "Year 2 · 2026–2027",
    title: "Specialization",
    start: 30,
    end: 70,
    color: "from-neon to-accent",
    icon: Zap,
    items: ["Machine Learning & Deep Learning", "Advanced full-stack (React, Node, DBs)", "Open-source contributions", "First internship"],
  },
  {
    year: "Year 3 · 2027–2029",
    title: "Industry Readiness",
    start: 62,
    end: 100,
    color: "from-accent to-primary",
    icon: Trophy,
    items: ["Major capstone & research projects", "Hackathons & technical leadership", "Placements / Startup track", "AI product launches"],
  },
];

const quarters = ["2025", "2026", "2027", "2028", "2029"];

function Roadmap() {
  return (
    <div className="relative">
      <div className="absolute top-20 -left-32 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" aria-hidden />
      <div className="absolute bottom-20 -right-32 w-[400px] h-[400px] rounded-full bg-accent/15 blur-[120px] pointer-events-none" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Career Roadmap"
          title="A 3-Year Plan, Visualized"
          description="Structured, realistic, and aligned with my academic progression at LPU."
        />

        {/* Gantt card */}
        <div className="glow-border rounded-2xl p-6 md:p-10 noise relative">
          {/* Timeline header with markers */}
          <div className="relative mb-8">
            <div className="grid grid-cols-5 text-xs font-display tracking-widest text-muted-foreground">
              {quarters.map((q, i) => (
                <div key={q} className="text-center relative">
                  <div className={`w-2 h-2 rounded-full mx-auto mb-2 ${i === 0 ? "bg-electric shadow-glow-sm" : "bg-border"}`} />
                  <span className={i === 0 ? "text-electric" : ""}>{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gantt rows */}
          <div className="space-y-7">
            {phases.map((p, idx) => (
              <div key={p.title} className="animate-fade-up" style={{ animationDelay: `${idx * 120}ms` }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${p.color} grid place-items-center shadow-glow-sm`}>
                      <p.icon size={16} className="text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-[10px] font-display tracking-widest text-primary uppercase">{p.year}</div>
                      <div className="font-semibold">{p.title}</div>
                    </div>
                  </div>
                  {p.active && (
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-display tracking-widest text-electric px-2.5 py-1 rounded-full bg-electric/10 border border-electric/30 uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-electric animate-pulse" />
                      In Progress
                    </span>
                  )}
                </div>
                <div className="relative h-12 rounded-lg bg-secondary/40 border border-border/60 overflow-hidden">
                  <div className="absolute inset-0 grid grid-cols-5">
                    {quarters.map((q) => <div key={q} className="border-r border-border/40 last:border-0" />)}
                  </div>
                  <div
                    className={`absolute top-1.5 bottom-1.5 rounded-md bg-gradient-to-r ${p.color} shadow-glow-sm overflow-hidden`}
                    style={{ left: `${p.start}%`, width: `${p.end - p.start}%` }}
                  >
                    <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.15)_25%,rgba(255,255,255,0.15)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.15)_75%)] bg-[length:16px_16px] opacity-60" />
                  </div>
                </div>
                <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                      {p.done
                        ? <CheckCircle2 size={14} className="text-electric shrink-0" />
                        : <Circle size={14} className="text-primary shrink-0" />}
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications & Activities */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="glow-border rounded-2xl p-8 transition-smooth">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary/20 grid place-items-center shadow-glow-sm">
                <Trophy size={18} className="text-primary" />
              </div>
              <h3 className="font-display text-lg font-bold text-gradient">Growing Achievements</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              No formal certifications yet — but I'm actively building through daily coding practice,
              academic collaborations, and exploring hackathons & developer communities.
            </p>
          </div>
          <div className="glow-border rounded-2xl p-8 transition-smooth">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-accent/20 grid place-items-center shadow-glow-sm">
                <Zap size={18} className="text-accent" />
              </div>
              <h3 className="font-display text-lg font-bold text-gradient">Currently Exploring</h3>
            </div>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li className="flex items-start gap-2"><span className="text-primary mt-1">◆</span> Deep learning research papers & reproductions</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">◆</span> Competitive programming on LeetCode</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">◆</span> Open-source AI tooling contributions</li>
              <li className="flex items-start gap-2"><span className="text-primary mt-1">◆</span> Building a personal lab of side projects</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
