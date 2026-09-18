import { useState } from "react";
import { Link } from "react-router-dom";
import useReveal from "../useReveal";
import "./Home.css";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/ruiyang-zhou",
  github: "https://github.com/Rayz0722",
  instagram: "https://www.instagram.com/rayzry22",
  email: "mailto:zhouruiyang2002@gmail.com",
  resume: "/assets/Ruiyang_Zhou_Resume_2026.pdf",
};

const SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "publications", label: "Publications" },
  { id: "skills", label: "Skills" },
];

const EXPERIENCE = [
  {
    org: "Orivya · Georgia Tech CREATE-X",
    role: "Co-Founder & Software Engineer",
    date: "May 2026 — Jul 2026",
    mark: "OR",
    blurb:
      "Co-founded Orivya, a platform that helps long-form video creators turn unused footage into a searchable, licensable library — and earn from it through our marketplace. Selected for CREATE-X Startup Launch, Georgia Tech's founder accelerator.",
    link: { href: "https://www.orivya.net/", label: "orivya.net ↗" },
  },
  {
    org: "China CITIC Bank",
    role: "Software Engineer Intern",
    date: "Jun 2025 — Aug 2025",
    mark: "CB",
    points: [
      "Rebuilt a legacy client account management backend with Java/Spring Boot RESTful APIs, MyBatis mappings, and the existing DB2 database.",
      "Implemented Pinyin fuzzy name search with string-similarity and indexing libraries, improving typo tolerance and cutting failed searches by 33%.",
      "Integrated an RPA download script and a Pandas pipeline generating Word KPI reports, reducing reporting time from 3–4 hours to ~30 seconds.",
    ],
  },
  {
    org: "University of Virginia",
    role: "FPGA Research Assistant",
    date: "Dec 2023 — May 2025",
    mark: "UV",
    points: [
      "Extended a VM-based regular expression matching kernel on an AMD Alveo U280 (Xilinx Vitis, C++) from single-pattern to single-input, multi-pattern matching.",
      "Parallelized across 13 concurrent OpenCL kernels, raising throughput from 240 MB/s to ~1.5 GB/s (~6×); fixed kernel deadlocks and validated sync with HLS stream guards.",
      "Evaluated on the AutomataZoo benchmark suite, converting its regex formats into the form accepted by the regex virtual machine.",
    ],
  },
];

const PUBLICATIONS = [
  {
    venue: "HotCarbon 2026",
    title:
      "Energy Characterization of KV Cache Offloading Under Agentic Workloads",
    authors: "G. Mao, R. Zhou",
    note: "Workshop on Sustainable Computer Systems — ACM SIGEnergy Energy Informatics Review, 6(2).",
    href: "https://energy.acm.org/eir/energy-characterization-of-kv-cache-offloading-under-agentic-workloads/",
  },
];

const SKILLS = [
  {
    label: "Languages",
    items: ["Python", "Java", "TypeScript", "C/C++", "SQL", "Shell"],
  },
  {
    label: "Systems & Backend",
    items: [
      "Spring Boot",
      "PostgreSQL",
      "Redis",
      "Kafka",
      "GCP",
      "Docker",
      "Next.js",
      "React",
      "Electron",
      "Prometheus",
      "CI/CD",
      "Slurm",
      "OpenMPI",
      "OpenCL",
    ],
  },
  {
    label: "AI / ML",
    items: ["PyTorch", "Hugging Face", "vLLM", "CUDA", "ChromaDB", "PaddleOCR"],
  },
];

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Home() {
  const [hasPhoto, setHasPhoto] = useState(true);
  useReveal();

  return (
    <div className="home ambient">
      <div className="home-grid">
        <aside className="side">
          <div className="side-card" data-reveal>
            <div className="avatar">
              {hasPhoto ? (
                <img
                  src="/assets/profile.jpg"
                  alt="Ruiyang Zhou"
                  onError={() => setHasPhoto(false)}
                />
              ) : (
                <span className="avatar-mono">RZ</span>
              )}
            </div>

            <h1 className="side-name">Ruiyang Zhou</h1>
            <p className="side-where">Atlanta · Charlottesville · Chengdu</p>

            <div className="side-block">
              <p className="side-org">Georgia Tech</p>
              <p className="side-line">
                M.S. Computational Science &amp; Engineering
              </p>
              <p className="side-line dim">2025 — 2027 · GPA 3.87</p>
            </div>

            <div className="side-block">
              <p className="side-org">University of Virginia</p>
              <p className="side-line">
                B.A. Computer Science, Highest Distinction
              </p>
              <p className="side-line dim">2020 — 2025 · GPA 3.87</p>
            </div>

            <div className="side-links">
              <a href={LINKS.github} target="_blank" rel="noopener noreferrer">
                GitHub ↗
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn ↗
              </a>
              <a
                href={LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram ↗
              </a>
              <a href={LINKS.email}>Email ↗</a>
            </div>

            <div className="side-block">
              <p className="side-label">Resume</p>
              <a
                className="side-resume"
                href={LINKS.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ruiyang_Zhou_2026.pdf ↗
              </a>
              <p className="side-line dim">Last updated · September 2026</p>
            </div>
          </div>
        </aside>

        <main className="main">
          <header className="main-head" data-reveal>
            <h2 className="sec-title">About</h2>
            <nav className="sec-nav">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  className="sec-nav-link"
                  onClick={() => scrollToSection(s.id)}
                >
                  {s.label}
                </button>
              ))}
              <Link to="/Music">Music</Link>
            </nav>
          </header>

          <section className="about" data-reveal>
            <p>
              I&apos;m a master&apos;s student in Computational Science and
              Engineering at Georgia Tech, following my undergraduate studies at
              the University of Virginia, where I earned a B.A. in Computer
              Science.
            </p>
            <p>
              My interest is in distributed systems, high-performance computing,
              and machine learning systems — I&apos;m particularly interested in
              AI infrastructure: the systems and tools that make it possible to
              develop, deploy, and use AI efficiently at scale, especially
              inference and serving.
            </p>
            <p>
              Most recently I co-founded{" "}
              <a
                href="https://www.orivya.net/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Orivya
              </a>
              , a platform that helps long-form video creators turn unused
              footage into a searchable, licensable library — and earn from it
              through our marketplace. Before that I worked as an SDE intern at
              China CITIC Bank and as a research assistant at the University of
              Virginia, working on FPGA regular expression acceleration.
            </p>
            <p className="about-aside">
              Outside of systems work: music production, mixing, and the places
              where signal processing and audio meet code.
            </p>
          </section>

          <section id="experience" className="sec">
            <h2 className="sec-title" data-reveal>
              Experience
            </h2>
            <div className="cards">
              {EXPERIENCE.map((e, i) => (
                <div
                  className="reveal"
                  data-reveal
                  style={{ "--d": `${i * 90}ms` }}
                  key={e.org}
                >
                  <article className="card">
                    <div className="card-head">
                      <span className="card-mark">{e.mark}</span>
                      <div className="card-headline">
                        <p className="card-org">{e.org}</p>
                        <p className="card-role">{e.role}</p>
                      </div>
                      <span className="card-date">{e.date}</span>
                    </div>
                    {e.blurb ? (
                      <p className="card-blurb">{e.blurb}</p>
                    ) : (
                      <ul className="card-points">
                        {e.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    )}
                    {e.link && (
                      <a
                        className="card-cta"
                        href={e.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {e.link.label}
                      </a>
                    )}
                  </article>
                </div>
              ))}
            </div>
          </section>

          <section id="publications" className="sec">
            <h2 className="sec-title" data-reveal>
              Publications
            </h2>
            <div className="cards">
              {PUBLICATIONS.map((p) => (
                <div className="reveal" data-reveal key={p.title}>
                  <article className="card pub">
                    <span className="tag">{p.venue}</span>
                    <h3 className="pub-title">
                      {p.href ? (
                        <a
                          className="pub-link"
                          href={p.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {p.title} ↗
                        </a>
                      ) : (
                        p.title
                      )}
                    </h3>
                    <p className="pub-authors">{p.authors}</p>
                    <p className="pub-note">{p.note}</p>
                  </article>
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="sec">
            <h2 className="sec-title" data-reveal>
              Skills
            </h2>
            <div className="skills" data-reveal>
              {SKILLS.map((g) => (
                <div className="skill-row" key={g.label}>
                  <p className="skill-label">{g.label}</p>
                  <div className="chips">
                    {g.items.map((i) => (
                      <span className="chip" key={i}>
                        {i}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="main-foot" data-reveal>
            <p>Ruiyang Zhou · Atlanta, GA · this page keeps updating.</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
