import { TypeWriterText } from '@belajar/components'

const skills = [
  { num: '01', name: 'NestJS', sub: 'Node.js framework' },
  { num: '02', name: 'Golang', sub: 'High-performance services' },
  { num: '03', name: 'PostgreSQL', sub: 'Relational databases' },
  { num: '04', name: 'Docker / K8s', sub: 'Container orchestration' },
  { num: '05', name: 'Cloud & APIs', sub: 'Design & deployment' },
]

const projects = [
  {
    num: '01',
    title: 'Real-time Backend System',
    desc: 'High-performance backend with real-time event processing and sub-millisecond response times under heavy load.',
    tags: ['NestJS', 'Redis', 'WebSocket'],
  },
  {
    num: '02',
    title: 'Microservices Platform',
    desc: 'Distributed microservices architecture on Kubernetes with automated CI/CD pipelines and zero-downtime deploys.',
    tags: ['Golang', 'Kubernetes', 'gRPC'],
  },
    {
    num: '03',
    title: 'Microservices Platform',
    desc: 'Distributed microservices architecture on Kubernetes with automated CI/CD pipelines and zero-downtime deploys.',
    tags: ['Golang', 'Kubernetes', 'gRPC'],
  },
]

const currentDate = new Date();

export default function Home() {
  return (
    <main className="min-h-screen  text-[#e2f0ff] font-sans relative overflow-x-hidden">
      {/* Starfield canvas rendered by StarfieldCanvas component */}
      {/* <StarfieldCanvas /> */}

      <div className="relative z-10 max-w-4xl mx-auto px-8 py-16">

        {/* NAV */}
        <nav className="flex justify-between items-center mb-20">
          <span className="font-mono text-[11px] tracking-[3px] text-[#7EB8F7]">
            DIMAS.DEV
          </span>
          <ul className="flex gap-7 list-none">
            {['About', 'Work', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="font-mono text-[10px] tracking-[2px] uppercase text-[#4a6a82] hover:text-[#7EB8F7] transition-colors"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* HERO */}
        <section className="mb-24">
          <div className="flex items-center gap-3 mb-5">
            <span className="block w-8 h-px bg-[#7EB8F7]" />
            <span className="font-mono text-[10px] tracking-[4px] text-[#7EB8F7] uppercase">
              Backend Engineer
            </span>
          </div>

          <h1 className="font-mono text-5xl md:text-6xl font-bold leading-[1.1] text-[#EDF4FF] mb-5 tracking-tight">
            <TypeWriterText text="Building systems" speed={70} />
            <br />
            <span>
              that <span className="text-[#7EB8F7]">scale</span>.
            </span>
          </h1>

          <p className="font-mono text-[11px] tracking-[3px] text-[#3d5a72] uppercase mb-6">
            NestJS &nbsp;·&nbsp; Golang &nbsp;·&nbsp; PostgreSQL &nbsp;·&nbsp; Cloud
          </p>

          <p className="text-[15px] text-[#6a8faa] max-w-md leading-relaxed mb-8">
            I architect scalable backend systems and microservices, turning complex
            problems into clean, performant solutions.
          </p>

          <div className="flex gap-3 flex-wrap">
            <a
              href="mailto:dimasiqball087@gmail.com"
              className="font-mono text-[10px] tracking-[2px] uppercase bg-[#7EB8F7] text-[#050a0f] px-7 py-3 hover:bg-[#aad1ff] transition-colors"
            >
              Get in touch →
            </a>
            <a
              href="https://github.com/Rezpector888"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[2px] uppercase text-[#7EB8F7] border border-[#1d3550] px-7 py-3 hover:border-[#7EB8F7] transition-colors"
            >
              GitHub ↗
            </a>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-20" id="about">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-[4px] text-[#7EB8F7] uppercase">
              Core stack
            </span>
            <span className="flex-1 h-px bg-linear-to-r from-[#1d3550] to-transparent" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[#0d1e2e] border border-[#0d1e2e]">
            {skills.map((s) => (
              <div
                key={s.num}
                className="group bg-[#070f17] hover:bg-[#0d1e2e] p-5 transition-colors relative overflow-hidden"
              >
                <span className="absolute top-0 left-0 w-full h-0.5 bg-[#7EB8F7] opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="font-mono text-[10px] text-[#7EB8F7] tracking-[1px] mb-2">{s.num}</p>
                <p className="text-[13px] font-medium text-[#C8DEF0]">{s.name}</p>
                <p className="text-[11px] text-[#2d4a5e] mt-1">{s.sub}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-20" id="work">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-[4px] text-[#7EB8F7] uppercase">
              Selected work
            </span>
            <span className="flex-1 h-px bg-linear-to-r from-[#1d3550] to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-[#0d1e2e] border border-[#0d1e2e]">
            {projects.map((p) => (
              <div
                key={p.num}
                className="group bg-[#070f17] hover:bg-[#0b1926] p-7 transition-colors relative overflow-hidden"
              >
                <span className="absolute top-0 left-0 h-px w-0 group-hover:w-full bg-[#7EB8F7] transition-all duration-500" />
                <p className="font-mono text-[10px] text-[#1d3550] tracking-[2px] mb-4">
                  {p.num} / PROJECT
                </p>
                <h3 className="font-mono text-[14px] font-bold text-[#EDF4FF] mb-3">
                  {p.title}
                </h3>
                <p className="text-[13px] text-[#4a6a82] leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] tracking-[1px] uppercase text-[#7EB8F7] border border-[#1d3550] px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section className="mb-20" id="contact">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-[10px] tracking-[4px] text-[#7EB8F7] uppercase">
              Contact
            </span>
            <span className="flex-1 h-px bg-linear-to-r from-[#1d3550] to-transparent" />
          </div>

          <div className="grid grid-cols-2 gap-px bg-[#0d1e2e] border border-[#0d1e2e]">
            {[
              { label: 'Email', value: 'dimasiqball087@gmail.com', href: 'mailto:dimasiqball087@gmail.com' },
              { label: 'GitHub', value: 'github.com/Rezpector888', href: 'https://github.com/Rezpector888' },
            ].map((c) => (
              <div key={c.label} className="bg-[#070f17] hover:bg-[#0d1e2e] p-6 transition-colors">
                <p className="font-mono text-[10px] tracking-[3px] uppercase text-[#2d4a5e] mb-2">
                  {c.label}
                </p>
                <a
                  href={c.href}
                  target={c.label === 'GitHub' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="text-[13px] text-[#7EB8F7] hover:text-[#aad1ff] transition-colors"
                >
                  {c.value}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="flex justify-between items-center border-t border-[#0d1e2e] pt-6">
          <span className="font-mono text-[10px] text-[#1d3550] tracking-[2px]">
            © {currentDate.getFullYear()} DIMAS IQBAL NUGRAHA
          </span>
          <div className="flex items-center gap-2 font-mono text-[10px] text-[#2d4a5e] tracking-[2px]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3fc97e] animate-pulse" />
            AVAILABLE FOR WORK
          </div>
        </footer>

      </div>
    </main>
  )
}