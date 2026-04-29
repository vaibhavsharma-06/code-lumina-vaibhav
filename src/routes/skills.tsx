import { createFileRoute } from "@tanstack/react-router";
import { SectionHeading } from "@/components/SectionHeading";
import { Brain, Users } from "lucide-react";

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

const technical = [
  { name: "Python", level: 88 },
  { name: "Java", level: 78 },
  { name: "C++", level: 72 },
  { name: "JavaScript / React.js", level: 82 },
  { name: "HTML & CSS", level: 90 },
  { name: "TensorFlow / Keras", level: 70 },
  { name: "Data Structures & Algorithms", level: 80 },
  { name: "Git & GitHub", level: 85 },
];

const soft = [
  { name: "Problem-Solving", level: 92 },
  { name: "Research & Documentation", level: 85 },
  { name: "Team Collaboration", level: 88 },
  { name: "Adaptability", level: 90 },
  { name: "Time Management", level: 82 },
];

function Bar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="font-medium">{name}</span>
        <span className="text-primary font-display text-xs">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary/60 overflow-hidden">
        <div
          className="h-full bg-gradient-cyber rounded-full shadow-glow-sm"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Skills & Expertise"
        title="The Tools I Build With"
        description="A blend of code craft, AI fundamentals, and the soft skills that turn ideas into shipped products."
      />

      <div className="grid md:grid-cols-2 gap-6">
        <div className="glow-border rounded-2xl p-8 transition-smooth">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary/20 grid place-items-center">
              <Brain className="text-primary" size={20} />
            </div>
            <h3 className="font-display text-xl font-bold text-gradient">Technical</h3>
          </div>
          <div className="space-y-5">
            {technical.map((s) => <Bar key={s.name} {...s} />)}
          </div>
        </div>

        <div className="glow-border rounded-2xl p-8 transition-smooth">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-accent/20 grid place-items-center">
              <Users className="text-accent" size={20} />
            </div>
            <h3 className="font-display text-xl font-bold text-gradient">Soft Skills</h3>
          </div>
          <div className="space-y-5">
            {soft.map((s) => <Bar key={s.name} {...s} />)}
          </div>
        </div>
      </div>
    </div>
  );
}
