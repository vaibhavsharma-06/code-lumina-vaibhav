import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Lightbulb, Compass, Rocket } from "lucide-react";
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

function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="About Me"
        title="Curiosity-Driven, Future-Focused"
        description="I'm Vaibhav — an aspiring software engineer fascinated by how intelligent systems can reshape the way we live, learn, and build."
      />

      <div className="grid md:grid-cols-2 gap-10 items-start">
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
          <p className="text-muted-foreground leading-relaxed">
            My focus areas: machine learning, deep learning, scalable web systems, and building
            with intent.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xl font-bold mb-6 text-gradient">Academic Journey</h3>
          <ol className="relative border-l-2 border-border/80 pl-6 space-y-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[34px] top-0 w-10 h-10 rounded-full bg-gradient-primary grid place-items-center shadow-glow-sm">
                  <t.icon size={16} className="text-primary-foreground" />
                </span>
                <div className="font-display text-xs tracking-widest text-primary">{t.year}</div>
                <h4 className="font-semibold mt-1">{t.title}</h4>
                <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{t.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
