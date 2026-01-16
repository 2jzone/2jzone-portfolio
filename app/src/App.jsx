import "./App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faCode,
  faEnvelope,
  faUser,
  faGraduationCap,
  faLaptopCode,
  faFolderOpen,
  faShareAlt,
  faAddressCard,
  faCalendar,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

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
    label: "Instagram",
    href: "https://www.instagram.com/_jasonangeles/",
    icon: faInstagram,
  },
  {
    label: "LeetCode",
    href: "https://leetcode.com/u/jsnangls/",
    icon: faCode,
  },
  {
    label: "E-Mail",
    href: "#",
    icon: faEnvelope,
    isEmail: true,
  },
];

function App() {
  const base = import.meta.env.BASE_URL;
  const [showModal, setShowModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  const handleScheduleMeeting = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleOpenEmailModal = (e) => {
    e.preventDefault();
    setShowEmailModal(true);
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

  const featuredProjects = [
    {
      title: "Maize Watch",
      subtitle: "Mobile and Web Application (2025)",
      description:
        "IoT-powered corn monitoring system that turns real-time sensor data into prescriptive analytics and ML-driven insights.",
      tech: ["Flutter", "React", "Node.js", "MongoDB"],
      github: "https://github.com/Snorlark/Maize-Watch",
    },
    {
      title: "Refurnish",
      subtitle: "Next.js | MERN Stack (2025)",
      description:
        "Furniture marketplace web app with real-time features and scalable architecture.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "Socket.io",
        "Docker",
        "PNPM",
        "JWT",
      ],
      github: "https://github.com/2jzone/Refurnish",
    },
    {
      title: "Cycling Ride Generator",
      subtitle: "Mobile Application (2025)",
      description:
        "Flutter app that generates personalized bike routes and displays curated cycling articles.",
      tech: ["Flutter", "MongoDB"],
      github: "https://github.com/yourname/cycling-ride-generator",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      {/* Modal for Schedule Meeting */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-4">Coming Soon</h3>
            <p className="text-sm text-gray-700 mb-4">
              The meeting scheduling feature is coming soon! For now, please use the email button to contact me.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="inline-flex items-center rounded-lg bg-[#111827] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:bg-[rgba(17,24,39,0.9)] hover:-translate-y-0.5"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Modal for Email Provider Selection */}
      {showEmailModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowEmailModal(false)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-4">Choose Email Provider</h3>
            <p className="text-sm text-gray-700 mb-4">
              Select your preferred email service to send an email to jasonsangeles1@gmail.com
            </p>
            <div className="flex flex-col gap-3 mb-4">
              <button
                onClick={() => handleEmailProvider("gmail")}
                className="w-full inline-flex appearance-none items-center justify-center rounded-lg border-2 border-[#EA4335] !bg-white px-4 py-3 text-sm font-medium text-[#EA4335] transition-all duration-200 hover:!bg-[#EA4335] hover:text-white hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#EA4335]/40"
              >
                <span className="font-bold">Gmail</span>
              </button>

              <button
                onClick={() => handleEmailProvider("yahoo")}
                className="w-full inline-flex appearance-none items-center justify-center rounded-lg border-2 border-[#6001D2] !bg-white px-4 py-3 text-sm font-medium text-[#6001D2] transition-all duration-200 hover:!bg-[#6001D2] hover:text-white hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6001D2]/40"
              >
                <span className="font-bold">Yahoo Mail</span>
              </button>

              <button
                onClick={() => handleEmailProvider("outlook")}
                className="w-full inline-flex appearance-none items-center justify-center rounded-lg border-2 border-[#0078D4] !bg-white px-4 py-3 text-sm font-medium text-[#0078D4] transition-all duration-200 hover:!bg-[#0078D4] hover:text-white hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0078D4]/40"
              >
                <span className="font-bold">Outlook</span>
              </button>

            </div>
            <button
              onClick={() => setShowEmailModal(false)}
              className="inline-flex items-center rounded-lg !bg-white px-4 py-2 text-sm font-medium text-black transition-all duration-200 hover:bg-gray-300 hover:-translate-y-0.5"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-[1100px] p-2 text-left">
        {/* HERO / HEADER */}
        <section className="animate-fade-in">
          <div className="bg-white p-[18px] animate-fade-in delay-1">
            <div className="flex items-center gap-6">
              <img
                className="h-40 w-40 flex-shrink-0 rounded-2xl object-cover bg-gray-100 animate-fade-in delay-2"
                src={`${base}jason-profile-pic-160.jpg`}
                srcSet={`${base}jason-profile-pic-160.jpg 160w, ${base}jason-profile-pic-320.jpg 320w, ${base}jason-profile-pic-480.jpg 480w`}
                sizes="160px"
                alt="Jason Angeles"
                width="160"
                height="160"
              />

              <div className="min-w-0 flex-1">
                <div className="animate-fade-in delay-2">
                  <h1 className="m-0 text-[28px] leading-[1.1] font-extrabold">
                    Jason Angeles
                  </h1>

                  <div className="mt-[6px] flex items-center gap-2 text-sm text-gray-700">
                    <img
                      className="h-4 w-4"
                      src={`${base}icons/location.png`}
                      alt=""
                      aria-hidden="true"
                      width="16"
                      height="16"
                    />
                    <span className="truncate">Metro Manila, Philippines</span>
                  </div>
                </div>

                <p className="mt-[14px] text-sm text-gray-900 animate-fade-in delay-3">
                  Fullstack Developer - 4th Year BS Information Technology at National
                  University Philippines
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 animate-fade-in delay-4">
                  <a
                    href="#"
                    onClick={handleScheduleMeeting}
                    className="inline-flex h-7 md:h-8 items-center rounded-lg bg-[#111827] px-2.5 md:px-4 text-[8px] md:text-sm font-medium text-white no-underline transition-all duration-200 hover:bg-[rgba(17,24,39,0.9)] hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap min-h-0"
                  >
                    <FontAwesomeIcon icon={faCalendar} className="h-4 w-4 text-white" />
                    <span className="text-white">Want to Schedule a Meeting?</span>
                    <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 text-white" />
                  </a>

                  <a
                    href="#"
                    onClick={handleOpenEmailModal}
                    className="inline-flex h-7 md:h-8 items-center rounded-lg border border-gray-200 bg-white px-2.5 md:px-4 text-[8px] md:text-sm font-medium text-[#111827] no-underline transition-all duration-200 hover:bg-gray-50 hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap min-h-0"
                  >
                    <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
                    <span className="text-[#111827]">Send Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GRID SECTION */}
        <section className="mt-6 grid grid-cols-1 md:grid-cols-6 gap-2 animate-fade-in delay-5">
          {/* Educational Background */}
          <div className="bento-card p-4 col-span-1 md:col-span-2 md:row-span-2 space-y-2 animate-fade-in animation-delay-200 md:order-1">
            <h3 className="text-base font-extrabold flex items-center gap-2">
              <FontAwesomeIcon icon={faGraduationCap} />
              Educational Background
            </h3>

            <div className="space-y-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-sm font-bold text-gray-900">BS Information Technology</p>
                <p className="mt-1 text-sm text-gray-700">National University Manila</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-sm font-bold text-gray-900">Junior to Senior High School</p>
                <p className="mt-1 text-sm text-gray-700">
                  Marikina Science High School <br />
                  Graduated with High Honors
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-sm font-bold text-gray-900">Certifications</p>
                <p className="mt-1 text-sm text-gray-700">
                  Coming soon.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-sm font-bold text-gray-900">Academic Achievements</p>
                <p className="mt-1 text-sm text-gray-700">
                  Consistent Dean's Lister from 1st year - Present <br />
                  Current CGWA - 3.71
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-sm font-bold text-gray-900">Scolarships</p>
                <p className="mt-1 text-sm text-gray-700">
                  University Academic Excellence Scholarship (NU-M)<br />
                  Pasig Academic Scholarship
                </p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <p className="text-sm font-bold text-gray-900">Extracurricular</p>
                <p className="mt-1 text-sm text-gray-700">
                  College of Computing Science and Infromation Technology Student Council - National University Manila Student <br />
                  Office of the President Committee <br />
                  Google Developer Groups on Campus NU-M - Chief Finance Officer
                </p>
              </div>
            </div>
          </div>



          {/* About */}
          <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in md:order-2">
            <h2 className="text-lg font-extrabold flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} />
              About Me
            </h2>
            <p className="text-sm text-gray-700">
              I'm a Full Stack Developer and BSIT student at National University Manila (Mobile & Web
              Application specialization) with a strong focus on building end-to-end mobile and web
              products—from UI/UX to backend services and databases. My work spans IoT + analytics
              platforms, mobile apps, and responsive web experiences, with hands-on experience across
              Flutter and React on the front end and Node.js/Express on the backend, backed by
              MongoDB/Firebase and SQL databases. <br />
              <br />
              I led and contributed to projects like Maize Watch, an IoT-powered smart farming system
              that turns real-time sensor data into prescriptive analytics–driven
              insights, and Refurnish, a marketplace web app built with Next.js, TypeScript, TailwindCSS,
              Node/Express, MongoDB, Redis, Socket.io, Docker, PNPM, and JWT. Academically, I maintain a
              3.71 CGWA, have been a consistent Dean's Lister, and a University Academic Excellence
              Benefit Scholar—bringing both strong fundamentals and practical execution to every build.
            </p>
          </div>

          {/* ✅ Tech Stack (LIMITED) */}
          <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-4 group animate-fade-in md:order-3">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-extrabold flex items-center gap-2">
                <FontAwesomeIcon icon={faLaptopCode} />
                Tech Stack
              </h2>

              {/* View All button (scrolls to full stack section) */}

              <Link
                className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-black border border-gray-300 rounded-lg transition-all duration-200 hover:underline hover:-translate-y-0.5"
                to="/tech-stack"
              >
                View All
              </Link>

            </div>

            {/* Frontend */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-800">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "Tailwind CSS", "Bootstrap"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-1 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-800">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {["Node.js", "Express.js"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-1 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & DevOps */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-gray-800">Tools &amp; DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VS Code", "Eclipse", "Docker", "PNPM"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-1 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="bento-card p-4 col-span-1 md:col-span-6 space-y-3 group animate-fade-in md:order-4">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-extrabold flex items-center gap-2">
                <FontAwesomeIcon icon={faFolderOpen} />
                Projects
              </h2>

              <Link
                className="inline-flex items-center gap-1 px-3 py-1.5 text-sm text-black border border-gray-300 rounded-lg transition-all duration-200 hover:underline hover:-translate-y-0.5"
                to="/projects"
              >
                View All
              </Link>
            </div>

            <p className="text-sm text-gray-700">
              A few highlights from the apps and platforms I've built—spanning IoT + analytics,
              marketplaces, and mobile experiences.
            </p>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((p) => {
                const CardInner = (
                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 h-full">
                    <p className="font-bold text-gray-900">{p.title}</p>
                    <p className="mt-1 text-sm text-gray-600">{p.subtitle}</p>
                    <p className="mt-2 text-sm text-gray-700">{p.description}</p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.slice(0, 6).map((t) => (
                        <span
                          key={t}
                          className="rounded-xl border border-gray-200 bg-white px-2.5 py-1 text-sm text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                      {p.tech.length > 6 && (
                        <span className="rounded-xl border border-gray-200 bg-white px-2.5 py-1 text-sm text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">
                          +{p.tech.length - 6}
                        </span>
                      )}
                    </div>
                  </div>
                );

                return p.github ? (
                  <a
                    key={p.title}
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${p.title} GitHub (opens in new tab)`}
                    className="block rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 hover:bg-gray-100 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  >
                    {CardInner}
                  </a>
                ) : (
                  <div key={p.title}>{CardInner}</div>
                );
              })}
            </div>
          </div>

          {/* Socials */}
          <div className="bento-card p-4 col-span-1 md:col-span-2 space-y-2 group animate-fade-in md:order-5">
            <h2 className="text-lg font-extrabold flex items-center gap-2">
              <FontAwesomeIcon icon={faShareAlt} />
              Socials
            </h2>

            <p className="text-sm text-gray-700">
              Here are my socials. I'm always open for collaboration and professional networking. Explore my work and reach out! I am open to any job opportunities where my skillset can be of help.
            </p>

            <div className="space-y-2">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  onClick={s.isEmail ? handleOpenEmailModal : undefined}
                  target={s.href.startsWith("mailto:") || s.isEmail ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto:") || s.isEmail ? undefined : "noreferrer"}
                  className="block rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-black
                       transition-all duration-200 hover:bg-gray-100 hover:border-gray-300 hover:-translate-y-0.5
                       focus:outline-none focus:ring-2 focus:ring-black/20"
                  aria-label={`${s.label} link`}
                >
                  <div className="flex items-center gap-3">
                    <FontAwesomeIcon icon={s.icon} className="text-base" />
                    <span>{s.label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in md:order-6">
            <h2 className="text-lg font-extrabold flex items-center gap-2">
              <FontAwesomeIcon icon={faAddressCard} />
              References
            </h2>
            <p className="text-sm text-gray-700">

            </p>
            <div className="space-y-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-sm font-bold">Juan Antonio Gonzales</span> <br />
                International MIS Network Engineer - Saudi Arabia Based<br />
                E-Mail: juanantoniogonzales47@gmail.com <br />
                Mobile: 09083531771
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-sm font-bold">Teymour Charles Villanueva</span> <br />
                Junior Web Developer - New Era Caps<br />
                villanuevateymour27@gmail.com
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-sm font-bold">Elizer Jr. D. Ponio</span> <br />
                Professor - National University Manila <br />
                E-Mail: ejrdponio@national-u.edu.ph <br />
                Mobile: 09434672862 <br />
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                <span className="text-sm font-bold">Frederick E. Dador</span> <br />
                Professor - National University Manila <br />
                E-Mail: fedador@national-u.edu.ph <br />
                Mobile: 09452454330 <br />
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
