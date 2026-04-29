import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Sparkles, Brain, Code2, Rocket } from "lucide-react";
import { NeuralBackground } from "@/components/NeuralBackground";
import vaibhav from "@/assets/vaibhav.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaibhav Sharma — AI & Full-Stack Developer" },
      { name: "description", content: "B.Tech CSE student at LPU. Building intelligent systems with AI, ML, and scalable web technologies." },
      { property: "og:title", content: "Vaibhav Sharma — AI & Full-Stack Developer" },
      { property: "og:description", content: "Building intelligent systems with AI & scalable web technologies." },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "12+", label: "Technologies" },
  { value: "2029", label: "Expected Grad" },
  { value: "∞", label: "Curiosity" },
];

const highlights = [
  { icon: Brain, title: "AI & Machine Learning", text: "Designing models with TensorFlow & Keras to solve real-world problems." },
  { icon: Code2, title: "Full-Stack Engineering", text: "React, Node, and modern web stacks for scalable, polished products." },
  { icon: Rocket, title: "Research Mindset", text: "Curiosity-driven learner exploring innovation at the AI × systems edge." },
];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <NeuralBackground />
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-28 md:pt-28 md:pb-36 grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-display tracking-widest border border-border/80 bg-card/40 backdrop-blur text-primary">
              <Sparkles size={12} /> AVAILABLE FOR COLLABORATION
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05]">
              Hello, I'm <br />
              <span className="text-gradient">Vaibhav Sharma</span>
            </h1>
            <p className="mt-5 text-lg md:text-xl text-foreground/80 font-medium">
              Building intelligent systems with{" "}
              <span className="text-gradient font-semibold">AI &amp; scalable web technologies.</span>
            </p>
            <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
              B.Tech Computer Science student at Lovely Professional University, passionate about
              machine learning, deep learning, and crafting full-stack experiences that solve
              real-world problems.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow-sm hover:shadow-glow transition-smooth"
              >
                View Projects
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border/80 bg-card/40 backdrop-blur hover:border-primary/60 hover:text-primary transition-smooth"
              >
                <Mail size={16} /> Contact Me
              </Link>
            </div>
          </div>

          {/* PROFILE */}
          <div className="relative flex justify-center md:justify-end animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-cyber blur-2xl opacity-60 animate-pulse-glow" aria-hidden />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-[3px] bg-gradient-cyber animate-pulse-glow">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <img
                    src={vaibhav}
                    alt="Vaibhav Sharma"
                    width={512}
                    height={512}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* orbiting ring */}
              <div className="absolute -inset-6 rounded-full border border-dashed border-primary/30 animate-spin-slow" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="glow-border rounded-2xl p-6 md:p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-gradient">{s.value}</div>
              <div className="text-xs md:text-sm text-muted-foreground mt-1 tracking-wider uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12 animate-fade-up">
          <p className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-3">What I Do</p>
          <h2 className="text-3xl md:text-5xl font-bold"><span className="text-gradient">Engineering the Future</span></h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h) => (
            <div key={h.title} className="glow-border rounded-2xl p-7 transition-smooth">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary/20 grid place-items-center mb-4 shadow-glow-sm">
                <h.icon className="text-primary" size={22} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
