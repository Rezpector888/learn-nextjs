import { CardExperience, TypeWriterText } from "@belajar/components";

const skills = [
  { num: "01", name: "NestJS", sub: "Node.js framework" },
  { num: "02", name: "Golang", sub: "High-performance services" },
  { num: "03", name: "PostgreSQL", sub: "Relational databases" },
  { num: "04", name: "Docker / K8s", sub: "Container orchestration" },
  { num: "05", name: "Cloud & APIs", sub: "Design & deployment" },
  { num: "06", name: "Redis", sub: "Caching & pub/sub" },
  { num: "07", name: "gRPC", sub: "Service communication" },
  { num: "08", name: "CI/CD", sub: "Automated pipelines" },
];

const projects = [
  {
    num: "01",
    title: "Real-time Backend System",
    desc: "High-performance backend with real-time event processing and sub-millisecond response times under heavy load.",
    tags: ["NestJS", "Redis", "WebSocket"],
  },
  {
    num: "02",
    title: "Microservices Platform",
    desc: "Distributed microservices architecture on Kubernetes with automated CI/CD pipelines and zero-downtime deploys.",
    tags: ["Golang", "Kubernetes", "gRPC"],
  },
  {
    num: "03",
    title: "REST API Gateway",
    desc: "Centralized API gateway with auth, rate limiting, and request routing for multi-tenant applications.",
    tags: ["NestJS", "PostgreSQL", "Docker"],
  },
];

const experiences = [
  {
    title: "Backend Developer",
    company: "PT Altimeda Cipta Visitama",
    date: "Feb 2025 – Present",
    description: "Working with NestJS, Golang, PostgreSQL, MSSQL, Redis.",
  },
  {
    title: "Backend Developer – Freelance",
    company: "PT Ismart Inter Global",
    date: "2024",
    description: "Built RESTful APIs for client integrations.",
  },
  {
    title: "Backend Developer – Freelance",
    company: "CV Moonlight Technology",
    date: "2025",
    description: "Built RESTful APIs for client integrations.",
  },
  {
    title: "Backend Developer & DevOps Engineer",
    company: "PT Supernova Palapa Nusantara",
    date: "2022 – Apr 2025",
    description: "Working with NestJS, Golang, PostgreSQL, MSSQL, Redis.",
  },
  {
    title: "Programmer",
    company: "PT Indismart",
    date: "2022 – 2022",
    description: "Working with NestJS, Golang, PostgreSQL, MSSQL, Redis.",
  },
];

const links = [
  { label: "Email", value: "dimasiqball087@gmail.com", href: "mailto:dimasiqball087@gmail.com" },
  { label: "GitHub", value: "github.com/Rezpector888", href: "https://github.com/Rezpector888", external: true },
];

export default function Home() {
  return (
    <main className="min-h-screen  text-[#c8d8e8] font-mono antialiased relative overflow-x-hidden">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        {/* ── NAV ── */}
        <nav className="flex justify-between items-center mb-28">
          <span className="text-[11px] tracking-[4px] text-[#4a7aa0] uppercase">
            dimas.dev
          </span>
          <ul className="flex gap-8 list-none">
            {[
              { label: "About", href: "#about" },
              { label: "Work", href: "#work" },
              { label: "Experience", href: "#experience" },
              { label: "Contact", href: "#contact" },
            ].map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[11px] tracking-[2px] uppercase text-[#2d4a60] hover:text-[#7eb8f7] transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ── HERO ── */}
        <section className="mb-32">
          <p className="text-[10px] tracking-[5px] text-[#4a7aa0] uppercase mb-6">
            Backend Engineer
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-[#edf4ff] leading-[1.15] tracking-tight mb-6">
            <TypeWriterText text="Building systems" speed={60} />
            <br />
            that <span className="text-[#7eb8f7]">scale</span>.
          </h1>

          <p className="text-[13px] text-[#3d586e] leading-relaxed max-w-sm mb-10">
            I design and build scalable backend systems — turning complex
            requirements into clean, resilient services.
          </p>

          <p className="text-[10px] tracking-[3px] text-[#2a3d4d] uppercase mb-10">
            NestJS · Golang · PostgreSQL · Cloud
          </p>

          <div className="flex gap-3">
            <a
              href="mailto:dimasiqball087@gmail.com"
              className="text-[10px] tracking-[2px] uppercase bg-[#7eb8f7] text-[#060c12] px-6 py-3 hover:bg-[#aad1ff] transition-colors duration-200"
            >
              Get in touch →
            </a>
            <a
              href="https://github.com/Rezpector888"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] tracking-[2px] uppercase border border-[#182d3d] text-[#4a7aa0] px-6 py-3 hover:border-[#4a7aa0] hover:text-[#7eb8f7] transition-colors duration-200"
            >
              GitHub ↗
            </a>
          </div>
        </section>

        {/* ── SKILLS ── */}
        <section className="mb-28" id="about">
          <SectionLabel>Core Stack</SectionLabel>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#0e1c28]">
            {skills.map((s) => (
              <div
                key={s.num}
                className="group bg-[#080c10] hover:bg-[#0e1c28] p-5 transition-colors duration-200 relative"
              >
                <span className="absolute top-0 left-0 w-full h-px bg-[#7eb8f7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <p className="text-[9px] text-[#1d3550] tracking-[2px] mb-2">{s.num}</p>
                <p className="text-[13px] text-[#c8d8e8] font-medium">{s.name}</p>
                <p className="text-[11px] text-[#2a3d4d] mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── EXPERIENCE ── */}
        <section className="mb-28" id="experience">
          <SectionLabel>Experience</SectionLabel>

          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-0 top-2 bottom-2 w-px bg-[#0e1c28]" />

            <div className="flex flex-col gap-10 pl-8">
              {experiences.map((item, i) => (
                <div key={i} className="relative">
                  {/* dot */}
                  <span className="absolute -left-8 top-1.5 w-2 h-2 rounded-full bg-[#7eb8f7] shadow-[0_0_8px_#7eb8f7]" />

                  <p className="text-[9px] tracking-[2px] text-[#2a3d4d] uppercase mb-1">
                    {item.date}
                  </p>
                  <p className="text-[13px] text-[#edf4ff] font-semibold">
                    {item.title}
                  </p>
                  <p className="text-[12px] text-[#4a7aa0] mb-2">{item.company}</p>
                  <p className="text-[12px] text-[#2d4a60] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="mb-28" id="work">
          <SectionLabel>Selected Work</SectionLabel>

          <div className="flex flex-col gap-px bg-[#0e1c28]">
            {projects.map((p) => (
              <div
                key={p.num}
                className="group bg-[#080c10] hover:bg-[#0b1520] p-7 transition-colors duration-200 relative overflow-hidden"
              >
                <span className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-[#7eb8f7] transition-all duration-500" />
                <p className="text-[9px] text-[#1d3550] tracking-[2px] mb-4">
                  {p.num}
                </p>
                <h3 className="text-[14px] font-bold text-[#edf4ff] mb-2">
                  {p.title}
                </h3>
                <p className="text-[12px] text-[#3d586e] leading-relaxed mb-5">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] tracking-[1px] uppercase text-[#4a7aa0] border border-[#0e1c28] px-2 py-1 group-hover:border-[#1d3550] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CONTACT ── */}
        <section className="mb-28" id="contact">
          <SectionLabel>Contact</SectionLabel>

          <div className="flex flex-col gap-px bg-[#0e1c28]">
            {links.map((c) => (
              <div key={c.label} className="bg-[#080c10] hover:bg-[#0b1520] p-6 transition-colors duration-200 flex justify-between items-center">
                <p className="text-[9px] tracking-[3px] uppercase text-[#2a3d4d]">
                  {c.label}
                </p>
                <a
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="text-[12px] text-[#4a7aa0] hover:text-[#7eb8f7] transition-colors"
                >
                  {c.value} ↗
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="flex justify-between items-center border-t border-[#0e1c28] pt-6">
          <span className="text-[9px] tracking-[2px] text-[#1d3550]">
            © {new Date().getFullYear()} DIMAS IQBAL NUGRAHA
          </span>
          <div className="flex items-center gap-2 text-[9px] tracking-[2px] text-[#2a3d4d]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3fc97e] animate-pulse" />
            AVAILABLE FOR WORK
          </div>
        </footer>

      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[10px] tracking-[4px] text-[#4a7aa0] uppercase whitespace-nowrap">
        {children}
      </span>
      <span className="flex-1 h-px bg-[#0e1c28]" />
    </div>
  );
}
