import Image from "next/image";
import { TypeWriterText } from "@belajar/components";

const skillGroups = [
  {
    category: "Backend",
    items: ["NestJS", "Gin", "Actix Web", "Springboot", "Quarkus", "FastAPI", "ExpressJS", "Laravel", "CodeIgniter"],
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "MSSQL", "Redis"],
  },
  {
    category: "Infrastructure",
    items: ["Docker", "Kubernetes", "CI/CD", "AWS S3", "Minio", "Azure"],
  },
  {
    category: "Frontend & Mobile",
    items: ["Next.js", "Flutter"],
  },
  {
    category: "Protocols",
    items: ["REST", "gRPC", "WebSocket", "Socket.io"],
  },
];

const projects = [
  {
    num: "01",
    title: "SIP-AJA",
    desc: "Sistem Informasi Perlengkapan Jalan — platform manajemen inventaris infrastruktur jalan untuk Kementerian Perhubungan, mencakup tracking aset dan pelaporan real-time.",
    tags: ["NestJS", "Redis", "PostgreSQL"],
    image: "/sip-aja.png",
  },
  {
    num: "02",
    title: "Virtual Cubicle",
    desc: "Platform ruang kerja virtual untuk kolaborasi tim secara remote, dilengkapi manajemen meeting, presensi digital, dan integrasi kalender.",
    tags: ["Springboot", "PostgreSQL"],
    image: "/virtual-cubicle.png",
  },
  {
    num: "03",
    title: "E-Raport Kesehatan Banjarnegara",
    desc: "Sistem raport kesehatan digital untuk Kabupaten Banjarnegara — mengelola data pasien, rekam medis, dan laporan kesehatan berbasis puskesmas dengan penyimpanan file terpusat.",
    tags: ["NestJS", "MongoDB", "Minio"],
    image: "/e-raport-kesehatan.png",
  },
  {
    num: "04",
    title: "E-Puskesmas Sergai",
    desc: "Sistem informasi puskesmas terintegrasi dengan platform Satu Sehat BPJS. Mencakup rekam medis elektronik, antrian pasien, billing, dan sinkronisasi data nasional.",
    tags: ["NestJS", "PostgreSQL", "Satu Sehat", "Redis", "Minio", "Next.js"],
    image: "/e-puskesmas-sergai.png",
  },
  {
    num: "05",
    title: "Kopkar Toyota",
    desc: "Platform koperasi karyawan Toyota berbasis web — mengelola simpan pinjam, transaksi, notifikasi real-time, dan penyimpanan dokumen dengan infrastruktur Docker Swarm.",
    tags: ["Docker Swarm", "AWS S3", "Redis", "Socket.io", "Laravel", "Next.js"],
    image: "/kopkar-toyota.png",
  },
  {
    num: "06",
    title: "PUD Toyota",
    desc: "Sistem manajemen distribusi kendaraan internal Toyota — tracking pengiriman unit, dokumen serah terima, dan laporan distribusi dealer secara terpusat.",
    tags: ["NestJS", "PostgreSQL", "Minio", "Redis", "Next.js"],
    image: "/pud-toyota.png",
  },
  {
    num: "07",
    title: "OEE Astra Visteon Indonesia",
    desc: "Dashboard Overall Equipment Effectiveness (OEE) untuk monitoring efisiensi mesin di lini produksi Astra Visteon. Deployment on-premise di Windows Server.",
    tags: ["Windows Server", "Laravel", "Next.js", "MSSQL"],
    image: "/oee-astra.png",
  },
  {
    num: "08",
    title: "Blync PGN Com",
    desc: "Aplikasi komunikasi internal untuk PGN Communication — manajemen broadcast, direktori karyawan, dan integrasi notifikasi multi-channel.",
    tags: ["Gin", "PostgreSQL", "Next.js"],
    image: "/pgncom.png",
  },
  {
    num: "09",
    title: "Check Clip",
    desc: "Platform quality control berbasis web untuk pengecekan komponen clip di lini manufaktur — dilengkapi image upload, validasi otomatis, dan laporan inspeksi.",
    tags: ["Actix Web", "PostgreSQL", "Next.js"],
    image: "/checkclip.png",
  },
    {
    num: "10",
    title: "Adenco Rostering",
    desc: "",
    tags: ["NestJS", "Postgresql", "Mssql", "Redis", "Azure"],
    image: "/adenco.png",
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
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
  {
    label: "Email",
    value: "dimasiqball087@gmail.com",
    href: "mailto:dimasiqball087@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/Rezpector888",
    href: "https://github.com/Rezpector888",
    external: true,
  },
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
            Fullstack Engineer
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

          <p className="text-[10px] tracking-[3px] text-[#0c71be] uppercase mb-10">
            NestJS · Golang · PostgreSQL · Cloud · NextJS
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

          <div className="flex flex-col gap-px bg-[#0e1c28]">
            {skillGroups.map((group) => (
              <div key={group.category} className="bg-[#080c10] p-5 flex gap-6 items-start">
                <span className="text-[9px] tracking-[3px] uppercase text-[#0c71be] w-24 shrink-0 pt-0.5">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] text-[#4a7aa0] border border-[#0e1c28] hover:border-[#2d4a60] hover:text-[#7eb8f7] px-3 py-1.5 transition-colors duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>
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

                  <p className="text-[9px] tracking-[2px] text-[#0c71be] uppercase mb-1">
                    {item.date}
                  </p>
                  <p className="text-[13px] text-[#edf4ff] font-semibold">
                    {item.title}
                  </p>
                  <p className="text-[12px] text-[#4a7aa0] mb-2">
                    {item.company}
                  </p>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0e1c28]">
            {projects.map((p) => (
              <div
                key={`${p.num}-${p.title}`}
                className="group bg-[#080c10] hover:bg-[#0b1520] transition-colors duration-200 relative overflow-hidden flex flex-col"
              >
                {/* top accent line */}
                <span className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-[#7eb8f7] transition-all duration-500 z-10" />

                {/* image */}
                <div className="relative w-full aspect-video overflow-hidden bg-[#0e1c28]">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 group-hover:scale-[1.03] transition-all duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* number overlay */}
                  <span className="absolute top-3 left-3 text-[9px] tracking-[3px] text-[#7eb8f7]/50 font-mono">
                    {p.num}
                  </span>
                </div>

                {/* content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-[13px] font-bold text-[#edf4ff] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-[11px] text-[#3d586e] leading-relaxed mb-4 flex-1">
                    {p.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] tracking-[1px] uppercase text-[#2d4a60] border border-[#0e1c28] group-hover:border-[#182d3d] group-hover:text-[#4a7aa0] px-2 py-1 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
              <div
                key={c.label}
                className="bg-[#080c10] hover:bg-[#0b1520] p-6 transition-colors duration-200 flex justify-between items-center"
              >
                <p className="text-[9px] tracking-[3px] uppercase text-[#0c71be]">
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
          <span className="text-[9px] tracking-[2px] text-[#0c71be]">
            © {new Date().getFullYear()} DIMAS IQBAL NUGRAHA
          </span>
          <div className="flex items-center gap-2 text-[9px] tracking-[2px] text-[#0c71be]">
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
