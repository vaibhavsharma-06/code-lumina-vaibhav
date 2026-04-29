import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, Mail, Sparkles, Brain, Code2, Rocket,
  Github, Linkedin, MapPin, Cpu, Database, Atom,
} from "lucide-react";
import { NeuralBackground } from "@/components/NeuralBackground";
import vaibhav from "@/assets/vaibhav.jpg";

const techRibbon = [
  "Python", "TensorFlow", "Keras", "React.js", "Node.js",
  "TypeScript", "PyTorch", "Next.js", "PostgreSQL", "Docker",
  "Git", "C++", "Java", "TailwindCSS",
];

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
      <section className="relative overflow-hidden noise">
        {/* glow blobs */}
        <div className="absolute -top-40 -left-32 w-[480px] h-[480px] rounded-full bg-primary/20 blur-[120px]" aria-hidden />
        <div className="absolute top-20 -right-32 w-[520px] h-[520px] rounded-full bg-accent/25 blur-[120px]" aria-hidden />
        <div className="absolute inset-0 grid-bg" aria-hidden />
        <NeuralBackground />

        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          {/* LEFT */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[11px] font-display tracking-[0.2em] border border-primary/40 bg-primary/10 backdrop-blur text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-electric opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-electric" />
                </span>
                AVAILABLE FOR COLLABORATION
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-display tracking-[0.2em] border border-border/80 bg-card/40 backdrop-blur text-muted-foreground">
                <MapPin size={11} /> LPU · INDIA
              </span>
            </div>

            <p className="mt-7 font-display text-sm tracking-[0.3em] text-muted-foreground uppercase">
              Hello, I'm
            </p>
            <h1 className="mt-2 font-display text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95]">
              <span className="text-shimmer">Vaibhav</span>
              <br />
              <span className="text-gradient">Sharma</span>
              <span className="inline-block ml-2 w-3 h-12 md:h-16 align-middle bg-primary animate-blink rounded-sm shadow-glow-sm" />
            </h1>

            <p className="mt-6 text-lg md:text-xl text-foreground/85 font-medium max-w-xl">
              Building intelligent systems with{" "}
              <span className="text-gradient font-semibold">AI &amp; scalable web technologies.</span>
            </p>
            <p className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
              B.Tech Computer Science student at Lovely Professional University — passionate about
              machine learning, deep learning, and crafting full-stack experiences that solve
              real-world problems.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/projects"
                className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-glow-sm hover:shadow-glow transition-smooth overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">View Projects</span>
                <ArrowRight size={16} className="relative group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border/80 bg-card/40 backdrop-blur hover:border-primary/60 hover:text-primary transition-smooth"
              >
                <Mail size={16} /> Contact Me
              </Link>
              <div className="flex items-center gap-2 ml-1">
                <a href="https://github.com" aria-label="GitHub" className="w-10 h-10 grid place-items-center rounded-full border border-border/80 bg-card/40 backdrop-blur text-muted-foreground hover:text-primary hover:border-primary/60 transition-smooth">
                  <Github size={16} />
                </a>
                <a href="https://linkedin.com" aria-label="LinkedIn" className="w-10 h-10 grid place-items-center rounded-full border border-border/80 bg-card/40 backdrop-blur text-muted-foreground hover:text-primary hover:border-primary/60 transition-smooth">
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — PROFILE */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="relative">
              {/* halo */}
              <div className="absolute -inset-8 rounded-full bg-gradient-cyber blur-3xl opacity-50 animate-pulse-glow" aria-hidden />

              {/* orbit rings */}
              <div className="absolute -inset-10 rounded-full border border-dashed border-primary/30 animate-spin-slow" aria-hidden>
                <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary shadow-glow-sm" />
              </div>
              <div className="absolute -inset-16 rounded-full border border-dashed border-accent/25 animate-spin-reverse" aria-hidden>
                <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-accent shadow-glow-sm" />
              </div>

              {/* portrait */}
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

              {/* floating chips */}
              <div className="absolute -left-6 top-6 glow-border rounded-xl px-3 py-2 backdrop-blur flex items-center gap-2 animate-float" style={{ animationDelay: "0.2s" }}>
                <Brain size={14} className="text-primary" />
                <span className="text-xs font-medium">Deep Learning</span>
              </div>
              <div className="absolute -right-4 top-1/2 glow-border rounded-xl px-3 py-2 backdrop-blur flex items-center gap-2 animate-float" style={{ animationDelay: "1s" }}>
                <Atom size={14} className="text-accent" />
                <span className="text-xs font-medium">Neural Nets</span>
              </div>
              <div className="absolute -left-8 bottom-4 glow-border rounded-xl px-3 py-2 backdrop-blur flex items-center gap-2 animate-float" style={{ animationDelay: "1.6s" }}>
                <Code2 size={14} className="text-neon" />
                <span className="text-xs font-medium">Full-Stack</span>
              </div>
              <div className="absolute -right-2 -bottom-2 glow-border rounded-xl px-3 py-2 backdrop-blur flex items-center gap-2 animate-float" style={{ animationDelay: "0.6s" }}>
                <Database size={14} className="text-electric" />
                <span className="text-xs font-medium">Scalable Systems</span>
              </div>

              {/* status badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glow-border rounded-full px-4 py-2 backdrop-blur flex items-center gap-2 whitespace-nowrap">
                <Cpu size={12} className="text-electric" />
                <span className="text-[11px] font-display tracking-widest">SYSTEM ONLINE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tech ribbon */}
        <div className="relative border-y border-border/60 bg-card/30 backdrop-blur overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {[...techRibbon, ...techRibbon].map((t, i) => (
              <span key={i} className="mx-8 font-display text-sm tracking-[0.25em] text-muted-foreground hover:text-primary transition-smooth">
                {t} <span className="text-primary/50 ml-8">◆</span>
              </span>
            ))}
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
