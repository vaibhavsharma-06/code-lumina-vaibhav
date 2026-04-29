import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircle2, Circle } from "lucide-react";

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
  start: number; // 0-100
  end: number;   // 0-100
  color: string;
  items: string[];
  done?: boolean;
};

const phases: Phase[] = [
  {
    year: "Year 1 · 2025–2026",
    title: "Foundations",
    start: 0,
    end: 38,
    color: "from-primary to-neon",
    done: true,
    items: ["Programming fluency (Python, Java, C++)", "Data Structures & Algorithms", "Version control & first projects", "Web fundamentals"],
  },
  {
    year: "Year 2 · 2026–2027",
    title: "Specialization",
    start: 30,
    end: 70,
    color: "from-neon to-accent",
    items: ["Machine Learning & Deep Learning", "Advanced full-stack (React, Node, DBs)", "Open-source contributions", "First internship"],
  },
  {
    year: "Year 3 · 2027–2029",
    title: "Industry Readiness",
    start: 62,
    end: 100,
    color: "from-accent to-primary",
    items: ["Major capstone & research projects", "Hackathons & technical leadership", "Placements / Startup track", "AI product launches"],
  },
];

const quarters = ["2025", "2026", "2027", "2028", "2029"];

function Roadmap() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Career Roadmap"
        title="A 3-Year Plan, Visualized"
        description="Structured, realistic, and aligned with my academic progression at LPU."
      />

      <div className="glow-border rounded-2xl p-6 md:p-10">
        {/* Timeline header */}
        <div className="grid grid-cols-5 mb-6 text-xs font-display tracking-widest text-muted-foreground">
          {quarters.map((q) => <div key={q} className="text-center">{q}</div>)}
        </div>

        {/* Gantt rows */}
        <div className="space-y-6">
          {phases.map((p) => (
            <div key={p.title}>
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="text-xs font-display tracking-widest text-primary uppercase">{p.year}</div>
                  <div className="font-semibold">{p.title}</div>
                </div>
              </div>
              <div className="relative h-10 rounded-lg bg-secondary/40 border border-border/60 overflow-hidden">
                {/* grid lines */}
                <div className="absolute inset-0 grid grid-cols-5">
                  {quarters.map((q) => <div key={q} className="border-r border-border/40 last:border-0" />)}
                </div>
                <div
                  className={`absolute top-1 bottom-1 rounded-md bg-gradient-to-r ${p.color} shadow-glow-sm`}
                  style={{ left: `${p.start}%`, width: `${p.end - p.start}%` }}
                />
              </div>
              <ul className="mt-3 grid sm:grid-cols-2 gap-x-6 gap-y-1.5">
                {p.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-sm text-muted-foreground">
                    {p.done
                      ? <CheckCircle2 size={14} className="text-electric" />
                      : <Circle size={14} className="text-primary" />}
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications & Activities */}
      <div className="mt-14 grid md:grid-cols-2 gap-6">
        <div className="glow-border rounded-2xl p-8">
          <h3 className="font-display text-lg font-bold text-gradient mb-3">Growing Achievements</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            No formal certifications yet — but I'm actively building through daily coding practice,
            academic collaborations, and exploring hackathons & developer communities.
          </p>
        </div>
        <div className="glow-border rounded-2xl p-8">
          <h3 className="font-display text-lg font-bold text-gradient mb-3">Currently Exploring</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>· Deep learning research papers & reproductions</li>
            <li>· Competitive programming on LeetCode</li>
            <li>· Open-source AI tooling contributions</li>
            <li>· Building a personal lab of side projects</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
