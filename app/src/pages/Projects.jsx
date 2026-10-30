import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faTimes,
  faExternalLinkAlt,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faFigma } from "@fortawesome/free-brands-svg-icons";
import Navbar from "../components/Navbar";

const PROJECTS = [
  {
    title: "Maize Watch",
    subtitle: "IoT Smart Farming & Analytics Platform (Capstone 2025 – 2026)",
    description:
      "Telemetry and prescriptive analytics system helping corn farmers optimize crop yield via ambient sensor metrics and predictive ML alerts.",
    longDescription:
      "Maize Watch is an IoT-powered smart farming system designed to monitor soil moisture, temperature, and crop health in real-time. The system aggregates telemetry sensor data via Arduino and Thingspeak, processing it through a Node.js/Express backend. The frontend is built using React for analytics dashboards and Flutter for mobile users, offering machine learning-driven prescriptive analytics to optimize water usage and maximize corn yield.",
    tech: [
      "Flutter",
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "IoT Sensors",
      "Arduino",
      "Thingspeak",
      "Python",
      "Tailwind CSS",
    ],
    href: "https://maize-watch.vercel.app/",
    github: "https://github.com/Snorlark/Maize-Watch",
  },
  {
    title: "Refurnish",
    subtitle: "Furniture Marketplace Web Platform (2025)",
    description:
      "Scalable marketplace with dynamic catalog filtering, real-time messaging, JWT token auth, Redis distributed session caching, and multi-stage containerized deployments.",
    longDescription:
      "Refurnish is a high-performance modern furniture marketplace application built on the MERN stack with Next.js and TypeScript. It utilizes Redis for caching session states, Socket.io for real-time negotiations and messaging between buyers and sellers, and multi-stage Docker configurations for streamlined deployment.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Socket.io",
      "Docker",
      "PNPM",
      "Tailwind CSS",
      "JWT",
    ],
    href: "https://refurnish-blond.vercel.app/",
    github: "https://github.com/2jzone/Refurnish",
  },
  {
    title: "New Era AIMS (Internship)",
    subtitle: "Company Information System (2025)",
    description:
      "A company website that streamlines company transactions such as asset management, purchase transactions, procurement management, IT portal, and company directory.",
    longDescription:
      "Internal enterprise information system developed during internship at New Era Caps. Features include modular role-based asset tracking, automated purchasing workflows, IT service ticket tracking, and employee directories.",
    tech: [
      "Laravel",
      "Vue.js",
      "Inertia.js",
      "Axios",
      "Vuetify",
      "Tailwind CSS",
      "PHP",
      "MySQL",
      "Spatie",
    ],
  },
  {
    title: "Cycling Ride Generator",
    subtitle: "Mobile Application (2025)",
    description:
      "Flutter app that generates personalized bike routes and displays curated cycling articles.",
    longDescription:
      "A cross-platform mobile app built for active cyclists. Generates customized routes based on fitness level and terrain preference while delivering curated articles and maintenance checklists.",
    tech: ["Flutter", "Dart", "MongoDB", "REST APIs"],
    github: "https://github.com/yourname/cycling-ride-generator",
  },
  {
    title: "Facebook Replication",
    subtitle: "Mobile UI Replication (2025)",
    description: "Facebook mobile UI replication built using Flutter.",
    longDescription:
      "Pixel-perfect replication of the core Facebook mobile experience built with Flutter, demonstrating complex nested list layouts, story carousels, responsive feeds, and tab navigation.",
    tech: ["Flutter", "Dart", "Mobile UI"],
    github: "https://github.com/yourname/facebook-replication",
  },
  {
    title: "Zambales Tour",
    subtitle: "Tourism Web Page (2024)",
    description: "Informative tourism web page showcasing Zambales destinations.",
    longDescription:
      "A responsive tourism showcase presenting scenic coastal and mountain destinations across Zambales province with clean layout aesthetics and travel guides.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/yourname/zambales-tour",
  },
  {
    title: "Sinagtala",
    subtitle: "Event Management & Planning Platform (2023)",
    description:
      "Interactive booking showcase highlighting event execution packages and client consultation scheduling.",
    longDescription:
      "Full web platform for university and community event organization, scheduling, ticket booking previews, and venue showcases.",
    tech: ["JavaScript", "HTML5", "CSS3"],
    href: "https://your-live-site.com",
    github: "https://github.com/2jzone/Sinagtala-Event-Management",
  },
  {
    title: "Touch My Deck",
    subtitle: "Sorting Game (2022)",
    description: "Sorting game built in Android Studio with Firebase for data handling.",
    longDescription:
      "An interactive Android card sorting and memory arcade game with real-time score leaderboards powered by Firebase Realtime Database.",
    tech: ["Android Studio", "Java", "Firebase"],
    github: "https://github.com/yourname/touch-my-deck",
  },
  {
    title: "HOPPin",
    subtitle: "Centralized Ride-hailing App (2023)",
    description: "Figma prototype of a centralized ride-hailing app where the user can easily choose between different prices of rides from different ride-hailing apps.",
    longDescription:
      "Comprehensive UI/UX design prototype in Figma solving ride fare comparison by aggregating prices and estimated times across popular ride-hailing platforms in a single interface.",
    tech: ["Figma", "UI/UX Design", "Wireframing"],
    figma: "https://www.figma.com/design/iWDld1EnxBcNvjRt44rXLE/HOPPin?node-id=0-1&t=jq0Q4TQRGhgUnZ6x-1",
  },
  {
    title: "FiloDroids",
    subtitle: "JavaFX Project (2022)",
    description: "A Java desktop application designed in SceneBuilder and implemented using JavaFX, that lets users choose and customize FiloDroids based on Philippine culture and ethnicities.",
    longDescription:
      "An educational desktop game celebrating Philippine cultural heritage. Users can customize and interact with cultural droid avatars styled after regional attire and folklore.",
    tech: ["Java", "JavaFX", "SceneBuilder"],
    github: "https://github.com/2jzone/FiloDroids",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      <Navbar />

      <main className="mx-auto max-w-3xl md:max-w-4xl px-4 sm:px-6 md:px-8 py-10 md:py-16 space-y-8 animate-fade-in">
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
            <FontAwesomeIcon icon={faFolderOpen} className="text-zinc-400 text-2xl sm:text-3xl" />
            Projects
          </h1>
          <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400">
            A complete catalog of applications, systems, and open-source repositories I've built or contributed to.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 pt-2">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              onClick={() => setSelectedProject(p)}
              className="group flex flex-col justify-between rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 p-5 md:p-6 cursor-pointer transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/70 hover:shadow-sm"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProject(p);
                }
              }}
            >
              <div className="space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="text-base font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                    {p.title}
                  </h2>
                </div>

                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  {p.subtitle}
                </p>

                <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-3">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 mt-auto space-y-4">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-800/60 px-2 py-0.5 text-xs font-mono text-zinc-700 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tech.length > 4 && (
                    <span className="rounded-md border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-800/60 px-2 py-0.5 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      +{p.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Links */}
                <div
                  className="flex items-center gap-2 pt-2 border-t border-zinc-100 dark:border-zinc-800/70 text-xs"
                  onClick={(e) => e.stopPropagation()}
                >
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:underline"
                    >
                      <FontAwesomeIcon icon={faExternalLinkAlt} className="text-[10px]" />
                      <span>Live</span>
                    </a>
                  )}

                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:underline ml-2"
                    >
                      <FontAwesomeIcon icon={faGithub} className="text-xs" />
                      <span>GitHub</span>
                    </a>
                  )}

                  {p.figma && (
                    <a
                      href={p.figma}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:underline ml-2"
                    >
                      <FontAwesomeIcon icon={faFigma} className="text-xs" />
                      <span>Figma</span>
                    </a>
                  )}

                  <span className="ml-auto text-xs font-medium text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-zinc-200 transition-colors">
                    Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* DETAIL DRAWER / MODAL */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-xl rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-2xl space-y-5 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-zinc-950 dark:text-zinc-50">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {selectedProject.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
                aria-label="Close"
              >
                <FontAwesomeIcon icon={faTimes} className="text-base" />
              </button>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Project Overview
              </h4>
              <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line">
                {selectedProject.longDescription || selectedProject.description}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 px-2.5 py-1 text-xs font-mono text-zinc-700 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                {selectedProject.href && (
                  <a
                    href={selectedProject.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                  >
                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                    <span>Live Site</span>
                  </a>
                )}
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <FontAwesomeIcon icon={faGithub} className="text-xs" />
                    <span>GitHub Repo</span>
                  </a>
                )}
                {selectedProject.figma && (
                  <a
                    href={selectedProject.figma}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <FontAwesomeIcon icon={faFigma} className="text-xs" />
                    <span>Figma Prototype</span>
                  </a>
                )}
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="px-3 py-1.5 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
