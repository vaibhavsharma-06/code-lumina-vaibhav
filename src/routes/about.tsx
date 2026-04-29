import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Lightbulb, Compass, Rocket, Quote, Brain, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Vaibhav Sharma" },
      { name: "description", content: "Aspiring software engineer focused on AI, research, and entrepreneurship. B.Tech CSE at LPU, graduating 2029." },
      { property: "og:title", content: "About — Vaibhav Sharma" },
      { property: "og:description", content: "AI-focused B.Tech CSE student with a research and entrepreneurial mindset." },
    ],
  }),
  component: About,
});

const timeline = [
  { year: "2025", icon: GraduationCap, title: "Started B.Tech CSE", text: "Joined Lovely Professional University, building strong foundations in programming and DSA." },
  { year: "2026", icon: Lightbulb, title: "Specialization Phase", text: "Deep diving into machine learning, deep learning, and scalable full-stack architectures." },
  { year: "2027", icon: Compass, title: "Research & Internships", text: "Hands-on AI research, hackathons, and applied internships at innovative tech companies." },
  { year: "2029", icon: Rocket, title: "Industry Launch", text: "Graduate with a portfolio of impactful AI products — building the future, one system at a time." },
];

const values = [
  { icon: Brain, label: "Research-Driven" },
  { icon: Sparkles, label: "Detail-Obsessed" },
  { icon: Rocket, label: "Builder Mindset" },
];

function About() {
  return (
    <div className="relative">
      {/* glow blobs */}
      <div className="absolute top-20 -left-32 w-[400px] h-[400px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" aria-hidden />
      <div className="absolute top-1/2 -right-32 w-[420px] h-[420px] rounded-full bg-accent/15 blur-[120px] pointer-events-none" aria-hidden />

      <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="About Me"
          title="Curiosity-Driven, Future-Focused"
          description="I'm Vaibhav — an aspiring software engineer fascinated by how intelligent systems can reshape the way we live, learn, and build."
        />

        {/* Quote banner */}
        <div className="glow-border rounded-2xl p-8 md:p-10 mb-10 relative overflow-hidden">
          <Quote className="absolute -top-2 -left-2 text-primary/15" size={120} />
          <div className="relative">
            <p className="font-display text-xl md:text-2xl leading-relaxed">
              "I believe the best engineers are those who stay <span className="text-gradient">curious</span> —
              who treat every system as a puzzle, every model as a question, and every product as
              <span className="text-gradient"> a chance to matter.</span>"
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {values.map((v) => (
                <span key={v.label} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border border-border/80 bg-card/40 backdrop-blur">
                  <v.icon size={12} className="text-primary" /> {v.label}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Story */}
          <div className="glow-border rounded-2xl p-8 transition-smooth">
            <h3 className="font-display text-xl font-bold mb-4 text-gradient">My Story</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm currently pursuing a B.Tech in Computer Science and Engineering at Lovely Professional
              University, with an expected graduation in 2029. My journey is fueled by curiosity — a
              relentless drive to explore how AI and software can solve meaningful, real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              From training neural networks to architecting full-stack applications, I love operating at
              the intersection of research and engineering. I'm equally passionate about entrepreneurship
              and creating products that move the needle.
            </p>

            {/* Education card */}
            <div className="mt-6 p-5 rounded-xl bg-secondary/40 border border-border/60">
              <div className="text-xs font-display tracking-[0.25em] text-primary uppercase mb-1">Education</div>
              <div className="font-semibold">B.Tech · Computer Science & Engineering</div>
              <div className="text-sm text-muted-foreground">Lovely Professional University · Class of 2029</div>
            </div>
          </div>

          {/* Timeline */}
          <div>
            <h3 className="font-display text-xl font-bold mb-6 text-gradient">Academic Journey</h3>
            <ol className="relative space-y-6">
              {/* vertical line */}
              <span className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" aria-hidden />
              {timeline.map((t, i) => (
                <li key={t.year} className="relative pl-16 animate-fade-up" style={{ animationDelay: `${i * 100}ms` }}>
                  <span className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-primary grid place-items-center shadow-glow-sm">
                    <t.icon size={16} className="text-primary-foreground" />
                  </span>
                  <div className="glow-border rounded-xl p-4 transition-smooth">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold">{t.title}</h4>
                      <span className="font-display text-[10px] tracking-widest text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30">
                        {t.year}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{t.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
