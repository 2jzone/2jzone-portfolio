import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faCode,
  faDatabase,
  faTools,
  faShieldHalved,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";

const TECH_STACK = [
  {
    title: "Languages",
    icon: faCode,
    description: "Core programming languages for web, mobile, and backend microservice engineering.",
    items: ["JavaScript", "TypeScript", "PHP", "C#", "Python", "Dart", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: faLaptopCode,
    description: "Full-stack web frameworks, UI libraries, reactive architectures, and mobile SDKs.",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "ASP.NET Core",
      "Express.js",
      "Laravel",
      "Inertia.js",
      "Flutter",
      "Tailwind CSS",
      "Vuetify",
      "Bootstrap",
      "Axios",
      "jsPDF",
    ],
  },
  {
    title: "Databases & ORMs",
    icon: faDatabase,
    description: "Relational engines, NoSQL document stores, object-relational mapping, and migration tooling.",
    items: [
      "PostgreSQL",
      "MySQL",
      "MS SQL",
      "MongoDB",
      "Firebase",
      "Eloquent ORM",
      "Database Migrations",
    ],
  },
  {
    title: "Testing & Security",
    icon: faShieldHalved,
    description: "End-to-end automation, unit testing, and dynamic application security vulnerability assessments.",
    items: ["Playwright (E2E)", "OWASP ZAP (DAST)", "xUnit"],
  },
  {
    title: "DevOps, Tools & AI",
    icon: faTools,
    description: "Containerization, automated pipelines, local large language models, and developer tooling.",
    items: [
      "Docker (Multi-stage)",
      "Ollama (Local LLMs)",
      "GitHub Actions (CI/CD)",
      "Git",
      "GitHub",
      "VS Code",
      "Android Studio",
      "Eclipse",
      "Codeviz",
    ],
  },
];

export default function TechStack() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      <Navbar />

      <main className="mx-auto max-w-3xl md:max-w-4xl px-4 sm:px-6 md:px-8 py-10 md:py-16 space-y-10 animate-fade-in">
        {/* Navigation Breadcrumb */}
        <div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs md:text-sm font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-3">
            <FontAwesomeIcon icon={faLaptopCode} className="text-zinc-400 text-2xl sm:text-3xl" />
            Technical Skills &amp; Architecture
          </h1>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
            A comprehensive catalog of programming languages, frameworks, databases, security testing suites, and DevOps tooling I work with.
          </p>
        </div>

        {/* Categorized Tech Stack Grid */}
        <div className="space-y-6 pt-2">
          {TECH_STACK.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 p-5 md:p-6 space-y-3.5 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-lg bg-white dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/80 text-zinc-700 dark:text-zinc-300">
                  <FontAwesomeIcon icon={section.icon} className="text-sm" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-zinc-950 dark:text-zinc-50">
                    {section.title}
                  </h2>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {section.description}
                  </p>
                </div>
              </div>

              {/* Items */}
              <div className="flex flex-wrap gap-2 pt-1">
                {section.items.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/60 px-3 py-1 text-xs md:text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
