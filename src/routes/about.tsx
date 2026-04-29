import { createFileRoute } from "@tanstack/react-router";
import {
  GraduationCap, Lightbulb, Compass, Rocket, Quote, Brain, Sparkles,
  Target, Telescope, BookOpen, Code2, Globe, Cpu, Award, Users, Star,
} from "lucide-react";
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

        {/* ============ DREAM CV ============ */}
        <DreamCV />
      </div>
    </div>
  );
}

/* -------------------- Dream CV Section -------------------- */

const careerShort = [
  "Build a strong foundation in programming, data structures, and problem-solving.",
  "Develop skills in Machine Learning, Deep Learning, and Web Development.",
  "Create multiple real-world projects applying theoretical knowledge.",
  "Actively participate in hackathons, coding competitions, and workshops.",
  "Gain internship experience in software development or AI domains.",
];

const careerLong = [
  "Become a skilled AI/ML Engineer or Full-Stack Developer.",
  "Work on innovative technologies that solve real-world problems.",
  "Contribute to research and development in AI-based systems.",
  "Build a technology-driven startup focused on impactful solutions.",
];

const academicYears = [
  {
    year: "Year 1",
    phase: "Foundation Phase",
    icon: GraduationCap,
    items: [
      "Core subjects: Programming, Mathematics, Basics of Computing.",
      "Learning Python, C++, and basic problem-solving techniques.",
      "Starting web development (HTML, CSS, JavaScript).",
      "Working on small academic and mini-projects.",
    ],
  },
  {
    year: "Year 2",
    phase: "Skill Development",
    icon: Lightbulb,
    items: [
      "Master Data Structures & Algorithms (DSA).",
      "Begin learning Machine Learning fundamentals.",
      "Build intermediate projects integrating ML and Web tech.",
      "Participate in coding contests and hackathons.",
    ],
  },
  {
    year: "Year 3",
    phase: "Specialization",
    icon: Compass,
    items: [
      "Learn Deep Learning (TensorFlow, Keras).",
      "Advance full-stack development skills.",
      "Undertake internships and gain industry exposure.",
      "Start working on research papers and documentation.",
    ],
  },
  {
    year: "Year 4",
    phase: "Professional Readiness",
    icon: Rocket,
    items: [
      "Complete a major AI/ML-based final year project.",
      "Prepare for placements (DSA, aptitude, core concepts).",
      "Build industry-level projects and refine portfolio.",
      "Apply for jobs or explore startup incubation.",
    ],
  },
];

const skillTracks = [
  {
    icon: Code2,
    title: "Programming & Problem Solving",
    rows: [
      ["Yr 1–2", "Python, C++, basics of DSA."],
      ["Yr 2–3", "Advanced DSA and competitive coding."],
      ["Yr 3–4", "Apply DSA to real-world systems."],
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    rows: [
      ["Yr 1", "HTML, CSS, JavaScript."],
      ["Yr 2", "React.js and frontend projects."],
      ["Yr 3", "Backend with Node.js and databases."],
      ["Yr 4", "Full-stack apps and deployment."],
    ],
  },
  {
    icon: Cpu,
    title: "AI / ML Development",
    rows: [
      ["Yr 1", "Basic ML concepts and simple models."],
      ["Yr 2", "Core ML algorithms and projects."],
      ["Yr 3", "Deep Learning and advanced models."],
      ["Yr 4", "Real-world AI apps and optimization."],
    ],
  },
];

const softSkills = [
  "Communication and teamwork via group projects.",
  "Research and documentation through academic work.",
  "Time management and project planning.",
  "Adaptability and continuous-learning mindset.",
];

const exposure = [
  "Build 2–3 projects every year.",
  "Participate in hackathons and coding competitions.",
  "Contribute to open-source projects.",
  "Work on real-world problem-solving ideas.",
];

const certifications = [
  { year: "Year 1", items: ["Python Programming", "Web Development Basics"] },
  { year: "Year 2", items: ["Data Structures & Algorithms", "Machine Learning"] },
  { year: "Year 3", items: ["Deep Learning Specialization", "Cloud Computing (AWS / GCP)"] },
  { year: "Year 4", items: ["Advanced AI/ML", "Full-Stack Development"] },
];

function DreamCV() {
  return (
    <section className="mt-20 md:mt-28">
      <SectionHeading
        eyebrow="Dream CV"
        title="My 4-Year Vision"
        description="A structured blueprint of career goals, academic planning, skill acquisition, and certifications — the roadmap I'm following to become a future-ready AI engineer."
      />

      {/* 1. Career Goals */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <DreamCard icon={Target} title="Short-Term Goals" subtitle="During My B.Tech" accent="primary">
          <BulletList items={careerShort} />
        </DreamCard>
        <DreamCard icon={Telescope} title="Long-Term Goals" subtitle="Post-Graduation" accent="accent">
          <BulletList items={careerLong} />
        </DreamCard>
      </div>

      {/* 2. Academic Planning */}
      <SubHeading icon={BookOpen} label="Academic Planning" title="4-Year B.Tech Roadmap" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {academicYears.map((y, i) => (
          <div
            key={y.year}
            className="glow-border rounded-2xl p-5 transition-smooth animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-9 h-9 rounded-lg bg-gradient-primary grid place-items-center shadow-glow-sm">
                <y.icon size={16} className="text-primary-foreground" />
              </span>
              <div>
                <div className="font-display text-[10px] tracking-[0.25em] text-primary uppercase">{y.year}</div>
                <div className="font-semibold text-sm">{y.phase}</div>
              </div>
            </div>
            <BulletList items={y.items} dense />
          </div>
        ))}
      </div>

      {/* 3. Skill Acquisition Plan */}
      <SubHeading icon={Sparkles} label="Skill Plan" title="Acquiring Skills Across 4 Years" />
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        {skillTracks.map((s) => (
          <div key={s.title} className="glow-border rounded-2xl p-5 transition-smooth">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-9 h-9 rounded-lg bg-secondary/60 border border-border grid place-items-center">
                <s.icon size={16} className="text-primary" />
              </span>
              <h4 className="font-semibold">{s.title}</h4>
            </div>
            <ul className="space-y-2">
              {s.rows.map(([k, v]) => (
                <li key={k} className="flex gap-3 text-sm">
                  <span className="font-display text-[10px] tracking-widest text-primary px-2 py-0.5 rounded-full bg-primary/10 border border-primary/30 h-fit shrink-0">
                    {k}
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{v}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <DreamCard icon={Users} title="Soft Skills" subtitle="Human edge" accent="primary">
          <BulletList items={softSkills} />
        </DreamCard>
        <DreamCard icon={Brain} title="Practical Exposure" subtitle="Build · Compete · Contribute" accent="accent">
          <BulletList items={exposure} />
        </DreamCard>
      </div>

      {/* 4. Certifications */}
      <SubHeading icon={Award} label="Certifications" title="Professional Certification Plan" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
        {certifications.map((c, i) => (
          <div
            key={c.year}
            className="glow-border rounded-2xl p-5 transition-smooth animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-display text-[10px] tracking-[0.25em] text-primary uppercase">{c.year}</span>
              <Award size={16} className="text-accent" />
            </div>
            <ul className="space-y-2">
              {c.items.map((it) => (
                <li key={it} className="text-sm flex items-start gap-2">
                  <Star size={12} className="text-primary mt-1 shrink-0" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Final summary */}
      <div className="glow-border rounded-2xl p-8 md:p-10 relative overflow-hidden noise">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-primary/15 blur-[100px] pointer-events-none" aria-hidden />
        <div className="relative">
          <div className="font-display text-xs tracking-[0.3em] text-primary uppercase mb-3">Final Profile Summary</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-gradient">Future-Ready, Vision-Driven</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-3">
            I am a first-year B.Tech Computer Science student with a clear vision to become an
            AI-focused software engineer. My career plan reflects a structured approach toward
            academic excellence, skill development, and practical exposure.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I am committed to building strong fundamentals, developing impactful projects, and
            gaining industry experience. Through consistent learning and innovation, I aim to
            transform theoretical knowledge into real-world solutions and establish myself as a
            capable and future-ready technology professional.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------- Helpers -------------------- */

function SubHeading({
  icon: Icon, label, title,
}: { icon: any; label: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6 mt-2">
      <span className="w-10 h-10 rounded-xl bg-gradient-primary grid place-items-center shadow-glow-sm">
        <Icon size={18} className="text-primary-foreground" />
      </span>
      <div>
        <div className="font-display text-[10px] tracking-[0.3em] text-primary uppercase">{label}</div>
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
      </div>
    </div>
  );
}

function DreamCard({
  icon: Icon, title, subtitle, accent, children,
}: {
  icon: any; title: string; subtitle: string;
  accent: "primary" | "accent"; children: React.ReactNode;
}) {
  const ring = accent === "primary" ? "bg-primary/15 text-primary" : "bg-accent/15 text-accent";
  return (
    <div className="glow-border rounded-2xl p-6 transition-smooth">
      <div className="flex items-center gap-3 mb-4">
        <span className={`w-10 h-10 rounded-xl grid place-items-center ${ring}`}>
          <Icon size={18} />
        </span>
        <div>
          <div className="font-display text-[10px] tracking-[0.25em] text-muted-foreground uppercase">{subtitle}</div>
          <h4 className="font-semibold">{title}</h4>
        </div>
      </div>
      {children}
    </div>
  );
}

function BulletList({ items, dense }: { items: string[]; dense?: boolean }) {
  return (
    <ul className={dense ? "space-y-1.5" : "space-y-2"}>
      {items.map((it) => (
        <li key={it} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-primary shrink-0" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
