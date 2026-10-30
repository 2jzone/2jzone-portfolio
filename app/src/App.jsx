import "./App.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faEnvelope,
  faUser,
  faBriefcase,
  faLaptopCode,
  faFolderOpen,
  faAddressCard,
  faCalendar,
  faArrowRight,
  faTimes,
  faDownload,
  faMapMarkerAlt,
  faAward,
  faExternalLinkAlt,
  faCertificate,
  faUsers,
  faShieldHalved,
  faPhone,
  faGlobe,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jason-angeles-91644a2b2/",
    icon: faLinkedin,
  },
  {
    label: "GitHub",
    href: "https://github.com/2jzone",
    icon: faGithub,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/jsnangls/",
    icon: faCode,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_jasonangeles/",
    icon: faInstagram,
  },
];

const EXPERIENCES = [
  {
    role: "Software Engineer Intern",
    company: "Elinnov Technologies",
    location: "Remote",
    period: "March 2026 – May 2026",
    type: "Internship",
    bullets: [
      "Architected and refactored RESTful backend microservices and database validation logic using C# and ASP.NET Core, enhancing system reliability and transactional consistency.",
      "Conducted Dynamic Application Security Testing (DAST) via OWASP ZAP; identified and patched vulnerabilities including Path Traversal, Cross-Site Scripting (XSS), and Clickjacking.",
      "Engineered end-to-end (E2E) automated testing pipelines with Playwright to validate user journeys and prevent regression errors.",
      "Overhauled containerization workflows by introducing multi-stage Docker configurations, resolving CI/CD bottlenecks in GitHub Actions.",
    ],
    tags: ["C#", "ASP.NET Core", "OWASP ZAP", "Playwright", "Docker", "GitHub Actions"],
  },
  {
    role: "Web Development Intern",
    company: "Authentic Caps Philippines / New Era Caps",
    location: "Metro Manila, PH",
    period: "Dec 2025 – Feb 2026",
    type: "Internship",
    bullets: [
      "Spearheaded phased migration of legacy internal systems to a modern Laravel MVC architecture with modular RESTful APIs.",
      "Designed normalized relational database schemas, mapped ERDs, and built administrative UI dashboards utilizing Vue.js and Vuetify.",
      "Prototyped self-hosted, offline Large Language Model (LLM) agents using Ollama and researched vector search / RAG workflows for automated internal querying.",
    ],
    tags: ["Laravel", "PHP", "Vue.js", "Vuetify", "MySQL", "Ollama", "REST APIs"],
  },
];

const CERTIFICATIONS = [
  {
    title: "Google AI Professional Certificate",
    issuer: "Google / Coursera",
    date: "Aug 2026",
    description:
      "Comprehensive 7-course specialization: AI Fundamentals, AI for Brainstorming & Planning, AI for Research & Insights, AI for Writing & Communicating, AI for Content Creation, AI for Data Analysis, and AI for App Building.",
    badge: "Professional Specialization",
  },
  {
    title: "Foundational C# with Microsoft",
    issuer: "freeCodeCamp / Microsoft",
    date: "March 2026",
    description:
      "Core C# syntax, object-oriented programming, data structures, exception handling, and console application engineering in .NET.",
    badge: "Certification",
  },
  {
    title: "Foundations of User Experience (UX) Design",
    issuer: "Google / Coursera",
    date: "Feb 2026",
    description:
      "User-centered design principles, empathy research, accessibility heuristics, wireframing, and iterative design testing.",
    badge: "Certification",
  },
];

const LEADERSHIP = [
  {
    role: "Executive Finance Officer",
    organization: "Google Developer Groups on Campus National University (GDG on Campus NU-M)",
    description:
      "Managed organizational budget allocations, event financing, and fiscal transparency for university-wide technology conferences, hackathons, and software engineering workshops.",
  },
  {
    role: "Committee Member",
    organization: "Office of the President, CCIT Student Council (College of Computing and Information Technology)",
    description:
      "Spearheaded cross-departmental student academic projects, technology symposiums, and student welfare initiatives across the computer science and IT faculties.",
  },
];

const FEATURED_PROJECTS = [
  {
    title: "Maize Watch",
    subtitle: "IoT Smart Farming & Analytics Platform (Capstone 2025 – 2026)",
    description:
      "Telemetry and prescriptive analytics system helping corn farmers optimize crop yield via ambient sensor metrics and predictive ML alerts.",
    longDescription:
      "Maize Watch is an IoT-powered smart farming system designed to monitor soil moisture, temperature, and crop health in real-time. The system aggregates telemetry sensor data via Arduino and Thingspeak, processing it through a Node.js/Express backend. The frontend is built using React for analytics dashboards and Flutter for mobile users, offering machine learning-driven prescriptive analytics to optimize water usage and maximize corn yield.",
    tech: ["Flutter", "React", "Node.js", "Express.js", "MongoDB", "IoT Sensors", "Arduino", "Thingspeak", "Python"],
    github: "https://github.com/Snorlark/Maize-Watch",
    href: "https://maize-watch.vercel.app/",
  },
  {
    title: "Refurnish",
    subtitle: "Furniture Marketplace Web Platform (2025)",
    description:
      "Scalable marketplace with dynamic catalog filtering, real-time messaging, JWT token auth, Redis distributed session caching, and multi-stage containerized deployments.",
    longDescription:
      "Refurnish is a high-performance modern furniture marketplace application built on the MERN stack with Next.js and TypeScript. It utilizes Redis for distributed session caching, Socket.io for real-time buyer-seller negotiation, and multi-stage Docker configurations for streamlined deployment.",
    tech: ["Next.js", "React", "TypeScript", "Node.js", "Express", "MongoDB", "Redis", "Socket.io", "Docker", "PNPM", "Tailwind CSS"],
    github: "https://github.com/2jzone/Refurnish",
    href: "https://refurnish-blond.vercel.app/",
  },
  {
    title: "Sinagtala",
    subtitle: "Event Management & Planning Platform (2023)",
    description:
      "Interactive booking showcase highlighting event execution packages and client consultation scheduling.",
    longDescription:
      "Full web platform for university and community event organization, scheduling, ticket booking previews, and venue showcases.",
    tech: ["JavaScript", "HTML5", "CSS3", "Responsive UI"],
    github: "https://github.com/2jzone/Sinagtala-Event-Management",
    href: "https://your-live-site.com",
  },
];

const REFERENCES = [
  {
    name: "Juan Antonio Gonzales",
    role: "International MIS Network Engineer",
    affiliation: "Saudi Arabia Based",
    email: "juanantoniogonzales47@gmail.com",
    phone: "09083531771",
  },
  {
    name: "Teymour Charles Villanueva",
    role: "Junior Web Developer",
    affiliation: "New Era Caps",
    email: "villanuevateymour27@gmail.com",
    phone: "09657527690",
  },
  {
    name: "Elizer Jr. D. Ponio",
    role: "Professor",
    affiliation: "National University Manila",
    email: "ejrdponio@national-u.edu.ph",
    phone: "09434672862",
  },
  {
    name: "Frederick E. Dador",
    role: "Professor",
    affiliation: "National University Manila",
    email: "fedador@national-u.edu.ph",
    phone: "09452454330",
  },
];

export default function App() {
  const base = import.meta.env.BASE_URL;
  const [showModal, setShowModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleScheduleMeeting = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleOpenEmailModal = (e) => {
    e.preventDefault();
    setShowEmailModal(true);
  };

  const handleViewResume = (e) => {
    e.preventDefault();
    setShowResumeModal(true);
  };

  const handleEmailProvider = (provider) => {
    const email = "jasonsangeles1@gmail.com";
    const subject = "Contact from Portfolio";
    let url = "";

    switch (provider) {
      case "gmail":
        url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`;
        break;
      case "yahoo":
        url = `https://compose.mail.yahoo.com/?to=${email}&subject=${encodeURIComponent(subject)}`;
        break;
      case "outlook":
        url = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}`;
        break;
      default:
        return;
    }
    window.open(url, "_blank");
    setShowEmailModal(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      {/* Top Floating Navigation */}
      <Navbar onOpenResume={() => setShowResumeModal(true)} />

      {/* Main Single-Column Document Flow */}
      <main id="top" className="mx-auto max-w-3xl md:max-w-4xl px-4 sm:px-6 md:px-8 py-10 md:py-16 space-y-16 md:space-y-24">
        {/* HERO SECTION */}
        <section className="space-y-6 md:space-y-8 animate-fade-in">
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/20 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for software engineering opportunities
          </div>

          {/* Profile Header Row */}
          <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="space-y-3 flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50">
                Jason Angeles
              </h1>

              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Full Stack Developer | Software Engineer
                </span>
                <span className="text-zinc-300 dark:text-zinc-700">•</span>
                <span className="flex items-center gap-1.5">
                  <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xs text-zinc-400" />
                  Metro Manila, Philippines
                </span>
              </div>

              <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                Full-stack software engineer and Magna Cum Laude BSIT graduate. Experienced in building end-to-end web and mobile apps with secure backends, robust databases, and automated CI/CD pipelines.
              </p>

              {/* Quick Contact Micro-Row */}
              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-zinc-500 dark:text-zinc-400">
                <a
                  href="tel:+639684406355"
                  className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <FontAwesomeIcon icon={faPhone} className="text-[10px]" />
                  <span>+63 968 440 6355</span>
                </a>
                <span>•</span>
                <a
                  href="mailto:jasonsangeles1@gmail.com"
                  className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="text-[10px]" />
                  <span>jasonsangeles1@gmail.com</span>
                </a>
                <span>•</span>
                <a
                  href="https://jason-angeles-portfolio.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                  <FontAwesomeIcon icon={faGlobe} className="text-[10px]" />
                  <span>jason-angeles-portfolio.vercel.app</span>
                </a>
              </div>
            </div>

            {/* Profile Avatar */}
            <div className="relative shrink-0">
              <img
                src={`${base}jason-profile-pic-160.jpg`}
                srcSet={`${base}jason-profile-pic-160.jpg 160w, ${base}jason-profile-pic-320.jpg 320w, ${base}jason-profile-pic-480.jpg 480w`}
                sizes="112px"
                alt="Jason Angeles"
                width="112"
                height="112"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl object-cover border border-zinc-200 dark:border-zinc-800 shadow-sm"
              />
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center gap-2.5 pt-1">
            <button
              onClick={handleScheduleMeeting}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-medium rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-95 transition-all shadow-sm"
            >
              <FontAwesomeIcon icon={faCalendar} className="text-xs" />
              <span>Schedule a Meeting</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs ml-0.5" />
            </button>

            <button
              onClick={handleOpenEmailModal}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs md:text-sm font-medium rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 active:scale-95 transition-all"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
              <span>Send Email</span>
            </button>

            <button
              onClick={handleViewResume}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs md:text-sm font-medium rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 active:scale-95 transition-all"
            >
              <FontAwesomeIcon icon={faAddressCard} className="text-xs" />
              <span>View Resume</span>
            </button>

            {/* Social Icons */}
            <div className="flex items-center gap-1.5 ml-auto sm:ml-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  title={s.label}
                  className="p-2 w-9 h-9 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-all flex items-center justify-center"
                >
                  <FontAwesomeIcon icon={s.icon} className="text-sm" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="space-y-4 pt-4 border-t border-zinc-100 dark:border-zinc-800/70">
          <h2 className="text-lg md:text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
            <FontAwesomeIcon icon={faUser} className="text-xs text-zinc-400" />
            About
          </h2>

          <div className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3 font-normal">
            <p>
              I am a Full Stack Developer and Software Engineer graduated <strong>Magna Cum Laude</strong> with a BS in Information Technology (Mobile &amp; Web Applications) from <strong>National University Manila</strong> (3.72 CGWA). I build resilient, high-throughput digital systems across front-end experiences, backend microservices, and relational/NoSQL data layers.
            </p>
            <p>
              My background bridges enterprise web migrations (Laravel, Vue.js, Vuetify), distributed microservices (C#, ASP.NET Core, Docker), and automated software quality assurance (Playwright E2E and OWASP ZAP DAST security vulnerability patching). In addition, I have hands-on experience experimenting with local LLMs (Ollama) and building responsive applications in Flutter, React, and Next.js.
            </p>
            <p>
              Whether engineering IoT telemetry pipelines for agriculture (Maize Watch) or building distributed marketplace engines with real-time sockets and Redis (Refurnish), I prioritize clean architectural patterns, robust security practices, and reliable deployments.
            </p>
          </div>
        </section>

        {/* PROFESSIONAL EXPERIENCE SECTION */}
        <section id="experience" className="space-y-8 pt-4 border-t border-zinc-100 dark:border-zinc-800/70">
          <div>
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
              <FontAwesomeIcon icon={faBriefcase} className="text-xs text-zinc-400" />
              Professional Experience
            </h2>
            <p className="mt-1 text-xs md:text-sm text-zinc-500 dark:text-zinc-500">
              Internships and software engineering engagements.
            </p>
          </div>

          {/* Timeline List */}
          <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 md:ml-4 space-y-8 pl-6 md:pl-8">
            {EXPERIENCES.map((exp) => (
              <div key={exp.company + exp.role} className="relative group space-y-2">
                {/* Connector Dot */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-[#09090b] bg-zinc-900 dark:bg-zinc-100 group-hover:scale-125 transition-transform"></div>

                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div>
                    <h3 className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                      {exp.role}
                    </h3>
                    <p className="text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                      {exp.company} <span className="text-zinc-400">• {exp.location}</span>
                    </p>
                  </div>
                  <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 shrink-0">
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-2 space-y-1.5 text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed list-disc list-outside pl-4">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/60 px-2 py-0.5 text-xs font-mono text-zinc-700 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION & ACADEMIC HONORS */}
        <section className="space-y-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/70">
          <div>
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
              <FontAwesomeIcon icon={faGraduationCap} className="text-xs text-zinc-400" />
              Education &amp; Academic Honors
            </h2>
            <p className="mt-1 text-xs md:text-sm text-zinc-500 dark:text-zinc-500">
              Academic degrees, graduation distinctions, and university scholarships.
            </p>
          </div>

          <div className="relative border-l border-zinc-200 dark:border-zinc-800 ml-3 md:ml-4 space-y-6 pl-6 md:pl-8">
            {/* University */}
            <div className="relative group space-y-1.5">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-[#09090b] bg-zinc-900 dark:bg-zinc-100 group-hover:scale-125 transition-transform"></div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  Bachelor of Science in Information Technology
                </h3>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  Aug 2022 — Sept 2026
                </span>
              </div>

              <p className="text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                National University Manila <span className="text-zinc-400">• Mobile &amp; Web Application Specialization</span>
              </p>

              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                <span className="inline-flex items-center font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
                  <FontAwesomeIcon icon={faAward} className="text-[10px] mr-1" />
                  Magna Cum Laude
                </span>
                <span className="font-mono text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded-full">
                  3.72 CGWA
                </span>
                <span className="text-zinc-600 dark:text-zinc-400">Consistent First Honor Dean's Lister</span>
              </div>

              <p className="mt-2 text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Awarded the <strong>University Academic Excellence Benefit Scholarship</strong> (100% full tuition and miscellaneous discount) for consistent top-tier academic ranking.
              </p>
            </div>

            {/* High School */}
            <div className="relative group space-y-1">
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-3 h-3 rounded-full border-2 border-white dark:border-[#09090b] bg-zinc-400 dark:bg-zinc-600 group-hover:scale-125 transition-transform"></div>

              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                <h3 className="text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  Senior High School (STEM Track)
                </h3>
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  2020 — 2022
                </span>
              </div>
              <p className="text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Marikina Science High School <span className="text-zinc-400">• Graduated with High Honors</span>
              </p>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS & CONTINUOUS LEARNING SECTION */}
        <section id="certifications" className="space-y-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/70">
          <div>
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
              <FontAwesomeIcon icon={faCertificate} className="text-xs text-zinc-400" />
              Certifications &amp; Professional Credentials
            </h2>
            <p className="mt-1 text-xs md:text-sm text-zinc-500 dark:text-zinc-500">
              Verified certifications in Artificial Intelligence, backend engineering, and user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.title}
                className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 p-4 md:p-5 flex flex-col justify-between space-y-3 transition-all hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      {cert.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 leading-snug">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                    {cert.issuer}
                  </p>

                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LEADERSHIP & EXTRACURRICULAR SECTION */}
        <section id="leadership" className="space-y-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/70">
          <div>
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
              <FontAwesomeIcon icon={faUsers} className="text-xs text-zinc-400" />
              Leadership &amp; Extracurricular Activities
            </h2>
            <p className="mt-1 text-xs md:text-sm text-zinc-500 dark:text-zinc-500">
              Community initiatives, developer chapters, and student governance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LEADERSHIP.map((lead) => (
              <div
                key={lead.role}
                className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 p-4 md:p-5 space-y-2"
              >
                <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                  {lead.role}
                </h3>
                <p className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                  {lead.organization}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                  {lead.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section id="projects" className="space-y-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/70">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
                <FontAwesomeIcon icon={faFolderOpen} className="text-xs text-zinc-400" />
                Featured Projects
              </h2>
              <p className="mt-1 text-xs md:text-sm text-zinc-500 dark:text-zinc-500">
                A selection of full-stack platforms, IoT systems, and applications.
              </p>
            </div>

            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-medium rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <span>View all projects</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Link>
          </div>

          {/* Project List */}
          <div className="space-y-4">
            {FEATURED_PROJECTS.map((project) => (
              <div
                key={project.title}
                className="group relative rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 p-5 md:p-6 transition-all duration-200 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-900/70 hover:shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* External Links */}
                  <div className="flex items-center gap-2 shrink-0 pt-1 sm:pt-0">
                    {project.href && (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} Live Preview`}
                        title="Live Demo"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                        <span>Live</span>
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} GitHub Repository`}
                        title="Source Code"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                      >
                        <FontAwesomeIcon icon={faGithub} className="text-xs" />
                        <span>Code</span>
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                    >
                      <span>Overview</span>
                    </button>
                  </div>
                </div>

                <p className="mt-3 text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {project.description}
                </p>

                {/* Tech Pills */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-800/60 px-2 py-0.5 text-xs font-mono text-zinc-700 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS & TECH STACK SECTION */}
        <section id="skills" className="space-y-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/70">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg md:text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
                <FontAwesomeIcon icon={faLaptopCode} className="text-xs text-zinc-400" />
                Technical Skills &amp; Architecture
              </h2>
              <p className="mt-1 text-xs md:text-sm text-zinc-500 dark:text-zinc-500">
                Core technologies, security tools, and systems utilized for development.
              </p>
            </div>

            <Link
              to="/tech-stack"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-medium rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              <span>Full stack</span>
              <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
            </Link>
          </div>

          {/* Grouped Skills Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Languages */}
            <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 p-4 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Languages
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["JavaScript", "TypeScript", "PHP", "C#", "Python", "Dart", "HTML5", "CSS3"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Frameworks & Libraries */}
            <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 p-4 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Frameworks &amp; Libraries
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["React", "Next.js", "Vue.js", "ASP.NET Core", "Express.js", "Laravel", "Inertia.js", "Flutter", "Tailwind CSS", "Vuetify", "Bootstrap"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Databases & ORMs */}
            <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 p-4 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                Databases &amp; ORMs
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["PostgreSQL", "MySQL", "MS SQL", "MongoDB", "Firebase", "Eloquent ORM", "Database Migrations"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Testing, Security & DevOps */}
            <div className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 p-4 space-y-2.5">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
                <FontAwesomeIcon icon={faShieldHalved} className="text-[10px]" />
                Testing, Security &amp; DevOps
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {["Playwright (E2E)", "OWASP ZAP (DAST)", "xUnit", "Docker (Multi-stage)", "Ollama (Local LLMs)", "GitHub Actions", "Git", "VS Code"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-800/60 px-2.5 py-1 text-xs font-medium text-zinc-800 dark:text-zinc-200 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* REFERENCES SECTION */}
        <section id="references" className="space-y-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/70">
          <div>
            <h2 className="text-lg md:text-xl font-bold tracking-tight text-zinc-950 dark:text-zinc-50 flex items-center gap-2">
              <FontAwesomeIcon icon={faAddressCard} className="text-xs text-zinc-400" />
              Professional References
            </h2>
            <p className="mt-1 text-xs md:text-sm text-zinc-500 dark:text-zinc-500">
              Supervisors, engineers, and faculty mentors available for verification.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {REFERENCES.map((ref) => (
              <div
                key={ref.name}
                className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/40 p-4 space-y-1.5"
              >
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {ref.name}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  {ref.role} — <span className="text-zinc-500">{ref.affiliation}</span>
                </p>
                <div className="pt-2 text-xs text-zinc-500 dark:text-zinc-400 space-y-0.5">
                  <p>
                    <a
                      href={`mailto:${ref.email}`}
                      className="hover:underline hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    >
                      {ref.email}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`tel:${ref.phone}`}
                      className="hover:underline hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                    >
                      {ref.phone}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-10 border-t border-zinc-100 dark:border-zinc-800/70 text-xs text-zinc-500 dark:text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Jason Angeles. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Back to top ↑
            </a>
            <a
              href="https://github.com/2jzone"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/jason-angeles-91644a2b2/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </footer>
      </main>

      {/* MODAL 1: RESUME PDF VIEWER */}
      {showResumeModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setShowResumeModal(false)}
        >
          <div
            className="w-full max-w-4xl h-[90vh] rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-2xl flex flex-col overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/80">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faAddressCard} className="text-zinc-500 text-sm" />
                <h3 className="text-sm md:text-base font-bold text-zinc-900 dark:text-zinc-100">
                  Jason Angeles — Resume
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={`${base}resume.pdf`}
                  download
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                  <FontAwesomeIcon icon={faDownload} className="text-xs" />
                  <span>Download PDF</span>
                </a>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                  aria-label="Close resume modal"
                >
                  <FontAwesomeIcon icon={faTimes} className="text-base" />
                </button>
              </div>
            </div>

            {/* PDF Viewer Body */}
            <div className="flex-1 w-full bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
              <iframe
                src={`${base}resume.pdf`}
                title="Resume Preview"
                className="w-full h-full border-none"
              />
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: SCHEDULE MEETING */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setShowModal(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <FontAwesomeIcon icon={faCalendar} className="text-zinc-400 text-sm" />
                Schedule a Meeting
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>
            <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Automated calendar scheduling is currently being connected. In the meantime, please feel free to drop me an email and we can coordinate a time that fits your schedule!
            </p>
            <div className="flex items-center gap-2 pt-2">
              <button
                onClick={() => {
                  setShowModal(false);
                  setShowEmailModal(true);
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 text-xs md:text-sm font-medium rounded-xl bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                <FontAwesomeIcon icon={faEnvelope} className="text-xs" />
                <span>Send Email Instead</span>
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 text-xs md:text-sm font-medium rounded-xl border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: EMAIL PROVIDER SELECTOR */}
      {showEmailModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setShowEmailModal(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-2xl space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  Compose Message
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  Select your preferred mail client to reach out directly
                </p>
              </div>
              <button
                onClick={() => setShowEmailModal(false)}
                className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="flex flex-col gap-2.5 pt-2">
              <button
                onClick={() => handleEmailProvider("gmail")}
                className="w-full inline-flex items-center justify-between px-4 py-3 text-xs md:text-sm font-semibold rounded-xl border-2 border-[#EA4335]/30 hover:border-[#EA4335] text-[#EA4335] bg-white dark:bg-zinc-900 hover:bg-[#EA4335]/5 dark:hover:bg-[#EA4335]/10 transition-all"
              >
                <span>Gmail</span>
                <span className="text-xs font-normal opacity-70">mail.google.com</span>
              </button>

              <button
                onClick={() => handleEmailProvider("yahoo")}
                className="w-full inline-flex items-center justify-between px-4 py-3 text-xs md:text-sm font-semibold rounded-xl border-2 border-[#6001D2]/30 hover:border-[#6001D2] text-[#6001D2] dark:text-[#a855f7] bg-white dark:bg-zinc-900 hover:bg-[#6001D2]/5 dark:hover:bg-[#6001D2]/10 transition-all"
              >
                <span>Yahoo Mail</span>
                <span className="text-xs font-normal opacity-70">mail.yahoo.com</span>
              </button>

              <button
                onClick={() => handleEmailProvider("outlook")}
                className="w-full inline-flex items-center justify-between px-4 py-3 text-xs md:text-sm font-semibold rounded-xl border-2 border-[#0078D4]/30 hover:border-[#0078D4] text-[#0078D4] bg-white dark:bg-zinc-900 hover:bg-[#0078D4]/5 dark:hover:bg-[#0078D4]/10 transition-all"
              >
                <span>Outlook Web</span>
                <span className="text-xs font-normal opacity-70">outlook.live.com</span>
              </button>
            </div>

            <button
              onClick={() => setShowEmailModal(false)}
              className="w-full py-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors text-center"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* MODAL 4: PROJECT OVERVIEW (QUICK DRAWER) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="w-full max-w-lg rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                  {selectedProject.title}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                  {selectedProject.subtitle}
                </p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1 rounded-lg text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
            </div>

            <div className="space-y-3 pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Project Overview
              </h4>
              <p className="text-xs md:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {selectedProject.longDescription || selectedProject.description}
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Technologies
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 px-2.5 py-0.5 text-xs font-mono text-zinc-700 dark:text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-100 dark:border-zinc-800 flex items-center justify-between gap-2">
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
                    <span>GitHub</span>
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
