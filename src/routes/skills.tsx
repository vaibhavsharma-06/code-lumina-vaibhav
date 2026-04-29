import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import {
  Brain, Users, Code, Globe, Database, GitBranch,
  Layers, Lightbulb, Clock, MessagesSquare, Shuffle,
} from "lucide-react";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills & Expertise — Vaibhav Sharma" },
      { name: "description", content: "Technical and soft skills: Python, Java, C++, React, TensorFlow, DSA, problem-solving, and team collaboration." },
      { property: "og:title", content: "Skills & Expertise — Vaibhav Sharma" },
      { property: "og:description", content: "Stack: Python, React, TensorFlow, Keras, DSA — plus the human skills that ship products." },
    ],
  }),
  component: Skills,
});

type Skill = { name: string; level: number; icon: React.ComponentType<{ size?: number; className?: string }> };

const technical: Skill[] = [
  { name: "Python",                       level: 88, icon: Code },
  { name: "TensorFlow / Keras",           level: 70, icon: Brain },
  { name: "JavaScript / React.js",        level: 82, icon: Globe },
  { name: "Java",                         level: 78, icon: Layers },
  { name: "C++",                          level: 72, icon: Code },
  { name: "HTML & CSS",                   level: 90, icon: Globe },
  { name: "Data Structures & Algorithms", level: 80, icon: Database },
  { name: "Git & GitHub",                 level: 85, icon: GitBranch },
];

const soft: Skill[] = [
  { name: "Problem-Solving",          level: 92, icon: Lightbulb },
  { name: "Research & Documentation", level: 85, icon: Brain },
  { name: "Team Collaboration",       level: 88, icon: MessagesSquare },
  { name: "Adaptability",             level: 90, icon: Shuffle },
  { name: "Time Management",          level: 82, icon: Clock },
];

function Bar({ name, level, icon: Icon }: Skill) {
  return (
    <div className="group">
      <div className="flex justify-between items-center text-sm mb-2">
        <span className="flex items-center gap-2 font-medium">
          <Icon size={14} className="text-primary" />
          {name}
        </span>
        <span className="text-primary font-display text-xs tracking-wider">{level}%</span>
      </div>
      <div className="relative h-2 rounded-full bg-secondary/60 overflow-hidden">
        <div
          className="h-full bg-gradient-cyber rounded-full shadow-glow-sm relative"
          style={{ width: `${level}%` }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>
      </div>
    </div>
  );
}

const stack = [
  "Python", "TensorFlow", "Keras", "PyTorch", "React.js", "Node.js",
  "TypeScript", "JavaScript", "Java", "C++", "HTML5", "CSS3",
  "TailwindCSS", "Git", "GitHub", "DSA", "REST APIs", "SQL",
];

function Skills() {
  return (
    <div className="relative">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-primary/10 blur-[140px] pointer-events-none" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Skills & Expertise"
          title="The Tools I Build With"
          description="A blend of code craft, AI fundamentals, and the soft skills that turn ideas into shipped products."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="glow-border rounded-2xl p-8 transition-smooth">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-xl bg-gradient-primary/20 grid place-items-center shadow-glow-sm">
                <Brain className="text-primary" size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gradient">Technical</h3>
                <p className="text-xs text-muted-foreground">Languages, frameworks & tools</p>
              </div>
            </div>
            <div className="space-y-5">
              {technical.map((s) => <Bar key={s.name} {...s} />)}
            </div>
          </div>

          <div className="glow-border rounded-2xl p-8 transition-smooth">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-11 h-11 rounded-xl bg-accent/20 grid place-items-center shadow-glow-sm">
                <Users className="text-accent" size={20} />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-gradient">Soft Skills</h3>
                <p className="text-xs text-muted-foreground">How I work with people & problems</p>
              </div>
            </div>
            <div className="space-y-5">
              {soft.map((s) => <Bar key={s.name} {...s} />)}
            </div>
          </div>
        </div>

        {/* Stack cloud */}
        <div className="mt-10 glow-border rounded-2xl p-8">
          <div className="text-xs font-display tracking-[0.3em] text-primary uppercase mb-5 text-center">
            Full Stack Snapshot
          </div>
          <div className="flex flex-wrap justify-center gap-2.5">
            {stack.map((s) => (
              <span
                key={s}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium border border-border/80 bg-card/50 backdrop-blur text-muted-foreground hover:text-primary hover:border-primary/60 hover:shadow-glow-sm transition-smooth cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
