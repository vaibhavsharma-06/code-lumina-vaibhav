import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { CheckCircle2, Circle, Target, Trophy, Zap, BarChart3, CalendarRange, GraduationCap, Eye } from "lucide-react";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Career Roadmap — Vaibhav Sharma" },
      { name: "description", content: "A 3-year Gantt-chart career roadmap mapping education, projects, internships, and research." },
      { property: "og:title", content: "Career Roadmap — Vaibhav Sharma" },
      { property: "og:description", content: "Foundations, specialization, and launch — a structured Gantt-based plan toward 2029." },
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
    year: "Year 1 · 2026–2027",
    title: "Foundations",
    start: 0,
    end: 38,
    color: "from-primary to-neon",
    icon: Target,
    active: true,
    items: ["Programming fluency (Python, Java, C++)", "Data Structures & Algorithms", "Version control & first projects", "Web fundamentals"],
  },
  {
    year: "Year 2 · 2027–2028",
    title: "Specialization",
    start: 30,
    end: 70,
    color: "from-neon to-accent",
    icon: Zap,
    items: ["Machine Learning & Deep Learning", "Advanced full-stack (React, Node, DBs)", "Open-source contributions", "First internship"],
  },
  {
    year: "Year 3 · 2028–2029",
    title: "Industry Readiness",
    start: 62,
    end: 100,
    color: "from-accent to-primary",
    icon: Trophy,
    items: ["Major capstone & research projects", "Hackathons & technical leadership", "Placements / Startup track", "AI product launches"],
  },
];

const yearCols = ["Year 1 · 2026–27", "Year 2 · 2027–28", "Year 3 · 2028–29"];

type Track = {
  task: string;
  category: "Education" | "Projects" | "Career" | "Research";
  start: number; // 0–100
  end: number;   // 0–100
  color: string;
};

// Distributed across 3 years (each year = 33.33%)
const tracks: Track[] = [
  { task: "Programming Fundamentals (Python, C++)", category: "Education", start: 0,  end: 35,  color: "from-primary to-neon" },
  { task: "Data Structures & Algorithms",            category: "Education", start: 8,  end: 55,  color: "from-primary to-neon" },
  { task: "Web Development (HTML, CSS, JS, React)",  category: "Education", start: 15, end: 62,  color: "from-primary to-neon" },
  { task: "Machine Learning Basics",                 category: "Education", start: 25, end: 70,  color: "from-neon to-accent" },
  { task: "Deep Learning (TensorFlow, Keras)",       category: "Education", start: 38, end: 85,  color: "from-neon to-accent" },
  { task: "Projects (Academic + Personal)",          category: "Projects",  start: 5,  end: 100, color: "from-electric to-primary" },
  { task: "Hackathons & Workshops",                  category: "Projects",  start: 18, end: 92,  color: "from-electric to-primary" },
  { task: "Internship Preparation",                  category: "Career",    start: 35, end: 65,  color: "from-accent to-neon" },
  { task: "Internships / Industry Experience",       category: "Career",    start: 50, end: 88,  color: "from-accent to-neon" },
  { task: "Advanced Projects / Specialization",      category: "Projects",  start: 55, end: 100, color: "from-electric to-primary" },
  { task: "Research & Technical Papers",             category: "Research",  start: 45, end: 95,  color: "from-primary to-accent" },
  { task: "Startup / Entrepreneurial Development",   category: "Career",    start: 60, end: 100, color: "from-accent to-neon" },
  { task: "Placement / Career Preparation",          category: "Career",    start: 70, end: 100, color: "from-accent to-neon" },
];

const pillars = [
  { icon: Target,        title: "Relevancy & Feasibility",   text: "Each milestone maps to industry-demanded AI & full-stack skills, achievable within my B.Tech timeframe." },
  { icon: CalendarRange, title: "Structured Timelines",       text: "Tasks are sequenced realistically — fundamentals first, specialization next, industry readiness last." },
  { icon: GraduationCap, title: "Aligned with LPU Academics", text: "Roadmap moves in lockstep with my CSE coursework at Lovely Professional University." },
  { icon: Eye,           title: "Visual Representation",      text: "A Gantt chart makes overlapping tracks, dependencies, and progress instantly readable at a glance." },
];

const categoryDot: Record<Track["category"], string> = {
  Education: "bg-primary",
  Projects:  "bg-electric",
  Career:    "bg-accent",
  Research:  "bg-neon",
};

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

        {/* Phase Gantt card */}
        <div className="glow-border rounded-2xl p-6 md:p-10 noise relative">
          <div className="grid grid-cols-3 text-xs font-display tracking-widest text-muted-foreground mb-6">
            {yearCols.map((q, i) => (
              <div key={q} className="text-center">
                <div className={`w-2 h-2 rounded-full mx-auto mb-2 ${i === 0 ? "bg-electric shadow-glow-sm" : "bg-border"}`} />
                <span className={i === 0 ? "text-electric" : ""}>{q}</span>
              </div>
            ))}
          </div>

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
                  <div className="absolute inset-0 grid grid-cols-3">
                    {yearCols.map((q) => <div key={q} className="border-r border-border/40 last:border-0" />)}
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

        {/* Detailed Gantt Chart */}
        <div className="mt-16 text-center max-w-2xl mx-auto mb-10 animate-fade-up">
          <p className="font-display text-xs tracking-[0.3em] text-primary mb-3 uppercase inline-flex items-center gap-2">
            <BarChart3 size={14} /> Gantt Chart
          </p>
          <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
            <span className="text-gradient">Career Timeline · Education & Projects</span>
          </h3>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            A visual map of every track running across the 3-year B.Tech journey — overlapping skills,
            projects, internships, and research aligned with academic semesters.
          </p>
        </div>

        <div className="glow-border rounded-2xl p-4 md:p-8 noise relative overflow-hidden">
          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 mb-6 text-xs text-muted-foreground">
            {(["Education", "Projects", "Career", "Research"] as const).map((c) => (
              <span key={c} className="inline-flex items-center gap-2">
                <span className={`w-2.5 h-2.5 rounded-full ${categoryDot[c]} shadow-glow-sm`} />
                {c}
              </span>
            ))}
          </div>

          {/* Scrollable on mobile */}
          <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
            <div className="min-w-[720px]">
              {/* Header */}
              <div className="grid grid-cols-[minmax(220px,1.4fr)_repeat(3,1fr)] items-end pb-3 mb-3 border-b border-border/60">
                <div className="text-[10px] font-display tracking-widest text-muted-foreground uppercase">Task / Timeline</div>
                {yearCols.map((y, i) => (
                  <div key={y} className="text-center">
                    <div className={`w-2 h-2 rounded-full mx-auto mb-1.5 ${i === 0 ? "bg-electric shadow-glow-sm" : "bg-border"}`} />
                    <div className={`text-[10px] font-display tracking-widest uppercase ${i === 0 ? "text-electric" : "text-muted-foreground"}`}>
                      {y}
                    </div>
                  </div>
                ))}
              </div>

              {/* Rows */}
              <div className="space-y-2.5">
                {tracks.map((t, i) => (
                  <div
                    key={t.task}
                    className="grid grid-cols-[minmax(220px,1.4fr)_repeat(3,1fr)] items-center group animate-fade-up"
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <div className="pr-4 flex items-center gap-2 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full ${categoryDot[t.category]} shrink-0`} />
                      <span className="truncate group-hover:text-foreground text-muted-foreground transition-colors">{t.task}</span>
                    </div>
                    <div className="col-span-3 relative h-7 rounded-md bg-secondary/40 border border-border/60 overflow-hidden">
                      <div className="absolute inset-0 grid grid-cols-3">
                        {yearCols.map((y) => <div key={y} className="border-r border-border/40 last:border-0" />)}
                      </div>
                      <div
                        className={`absolute top-1 bottom-1 rounded bg-gradient-to-r ${t.color} shadow-glow-sm overflow-hidden transition-all duration-500 group-hover:brightness-125`}
                        style={{ left: `${t.start}%`, width: `${t.end - t.start}%` }}
                      >
                        <span className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.18)_25%,rgba(255,255,255,0.18)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.18)_75%)] bg-[length:14px_14px] opacity-70" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why this Gantt — 4 pillars */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="glow-border rounded-2xl p-6 transition-smooth animate-fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-primary/20 grid place-items-center shadow-glow-sm mb-3">
                <p.icon size={18} className="text-primary" />
              </div>
              <h4 className="font-display font-bold text-gradient mb-2">{p.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{p.text}</p>
            </div>
          ))}
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
