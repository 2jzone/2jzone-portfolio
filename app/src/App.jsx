import "./App.css";
import { Link } from "react-router-dom";

function App() {
  const base = import.meta.env.BASE_URL;

  const featuredProjects = [
    {
      title: "Maize Watch",
      subtitle: "Mobile and Web Application (2025)",
      description:
        "IoT-powered corn monitoring system that turns real-time sensor data into prescriptive analytics and ML-driven insights.",
      tech: ["Flutter", "React", "Node.js", "MongoDB"],
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
    },
    {
      title: "Cycling Ride Generator",
      subtitle: "Mobile Application (2025)",
      description:
        "Flutter app that generates personalized bike routes and displays curated cycling articles.",
      tech: ["Flutter", "MongoDB"],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-[1100px] p-6 text-left">
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
                  <h1 className="m-0 text-[34px] leading-[1.1] font-extrabold">
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

                <p className="mt-[14px] text-[18px] text-gray-900 animate-fade-in delay-3">
                  Fullstack Developer - 4th Year BS Information Technology at National
                  University Philippines
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 animate-fade-in delay-4">
                  <a
                    href="#"
                    className="inline-flex h-7 md:h-8 items-center rounded-lg bg-[#111827] px-2.5 md:px-4 text-[8px] md:text-xs font-medium text-white no-underline transition-all duration-200 hover:bg-[rgba(17,24,39,0.9)] hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap min-h-0"
                  >
                    <img
                      className="h-4 w-4"
                      src={`${base}icons/calendar.svg`}
                      alt=""
                      aria-hidden="true"
                      width="16"
                      height="16"
                    />
                    <span className="text-white">Want to Schedule a Meeting?</span>
                    <img
                      className="h-4 w-4"
                      src={`${base}icons/arrow.svg`}
                      alt=""
                      aria-hidden="true"
                      width="16"
                      height="16"
                    />
                  </a>

                  <a
                    href="mailto:you@example.com"
                    className="inline-flex h-7 md:h-8 items-center rounded-lg border border-gray-200 bg-white px-2.5 md:px-4 text-[8px] md:text-xs font-medium text-[#111827] no-underline transition-all duration-200 hover:bg-gray-50 hover:-translate-y-0.5 gap-1 md:gap-1.5 whitespace-nowrap min-h-0"
                  >
                    <img
                      className="h-4 w-4"
                      src={`${base}icons/email.png`}
                      alt=""
                      aria-hidden="true"
                      width="16"
                      height="16"
                    />
                    <span className="text-black">Send Email</span>
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
            <h3 className="text-lg font-extrabold">Educational Background</h3>

            <div className="space-y-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-sm font-bold text-gray-900">BS Information Technology</p>
                <p className="mt-1 text-sm text-gray-700">National University Manila</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-sm font-bold text-gray-900">Junior to Senior High School</p>
                <p className="mt-1 text-sm text-gray-700">
                  Marikina Science High School <br />
                  Graduated with High Honors
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-sm font-bold text-gray-900">Certifications</p>
                <p className="mt-1 text-sm text-gray-700">
                  Lorem ipsum — cert name, issuer, date.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3">
                <p className="text-sm font-bold text-gray-900">Academic Achievements</p>
                <p className="mt-1 text-sm text-gray-700">
                  Consistent Dean's Lister from 1st year - Present <br />
                  Current CGWA - 3.71
                </p>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-2 group animate-fade-in md:order-2">
            <h2 className="text-xl font-extrabold">About</h2>
            <p className="text-base text-gray-700">
              I’m a Full Stack Developer and BSIT student at National University Manila (Mobile & Web
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
              3.71 CGWA, have been a consistent Dean’s Lister, and a University Academic Excellence
              Benefit Scholar—bringing both strong fundamentals and practical execution to every build.
            </p>
          </div>

          {/* ✅ Tech Stack (LIMITED) */}
          <div className="bento-card p-4 col-span-1 md:col-span-4 space-y-4 group animate-fade-in md:order-3">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-extrabold">Tech Stack</h2>

              {/* View All button (scrolls to full stack section) */}

              <Link
                className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors"
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
                    className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-1 text-sm"
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
                    className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-1 text-sm"
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
                    className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-1 text-sm"
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
              <h2 className="text-xl font-extrabold">Projects</h2>

              <Link
                className="text-xs text-foreground/70 hover:text-foreground flex items-center gap-1 transition-colors"
                to="/projects"
              >
                View All
              </Link>
            </div>

            <p className="text-base text-gray-700">
              A few highlights from the apps and platforms I’ve built—spanning IoT + analytics,
              marketplaces, and mobile experiences.
            </p>

            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((p) => (
                <div key={p.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                  <p className="font-bold text-gray-900">{p.title}</p>
                  <p className="mt-1 text-xs text-gray-600">{p.subtitle}</p>
                  <p className="mt-2 text-sm text-gray-700">{p.description}</p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.tech.slice(0, 6).map((t) => (
                      <span
                        key={t}
                        className="rounded-xl border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700"
                      >
                        {t}
                      </span>
                    ))}
                    {p.tech.length > 6 && (
                      <span className="rounded-xl border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700">
                        +{p.tech.length - 6}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="bento-card p-4 col-span-1 md:col-span-3 space-y-2 group animate-fade-in md:order-5">
            <h2 className="text-xl font-extrabold">Socials</h2>
            <p className="text-sm text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.
            </p>
            <div className="space-y-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                Lorem link #1
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                Lorem link #2
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                Lorem link #3
              </div>
            </div>
          </div>

          <div className="bento-card p-4 col-span-1 md:col-span-3 space-y-2 group animate-fade-in md:order-6">
            <h2 className="text-xl font-extrabold">References</h2>
            <p className="text-sm text-gray-700">

            </p>
            <div className="space-y-2">
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                Juan Antonio Gonzales <br />
                Senior Web Developer - New Era Caps<br />
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                Teymour Charles Villanueva <br />
                Junior Web Developer - New Era Caps<br />

              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                Elizer Jr. D. Ponio <br />
                Professor - National University Manila <br />
                E-Mail: ejrdponio@national-u.edu.ph <br />
                Mobile: 09434672862 <br />
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-sm text-gray-700">
                Frederick E. Dador <br />
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
