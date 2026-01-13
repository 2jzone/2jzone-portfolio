// ✅ src/pages/Projects.jsx
// - full Projects page (similar vibe to TechStack.jsx)
// - "Back to Home" link
// - shows ALL your resume projects

import { Link } from "react-router-dom";

const PROJECTS = [
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
        title: "New Era AIMS (Internship)",
        subtitle: "Company Information System (2025)",
        description:
            "A company website that streamlines company transactions such as asset management, purchase transactions, procurement management, IT portal, and company directory",
        tech: [
            "Laravel",
            "Vue.js",
            "Intertia.js",
            "Axios",
            "Vuetify",
            "Tailwind CSS",
            "PHP",
            "MySQL"
        ],
    },
    {
        title: "Cycling Ride Generator",
        subtitle: "Mobile Application (2025)",
        description:
            "Flutter app that generates personalized bike routes and displays curated cycling articles.",
        tech: ["Flutter", "MongoDB"],
    },
    {
        title: "Facebook Replication",
        subtitle: "Mobile UI Replication (2025)",
        description: "Facebook mobile UI replication built using Flutter.",
        tech: ["Flutter"],
    },
    {
        title: "Zambales Tour",
        subtitle: "Tourism Web Page (2024)",
        description: "Informative tourism web page showcasing Zambales destinations.",
        tech: ["HTML", "CSS"],
    },
    {
        title: "Sinagtala",
        subtitle: "Event Management Website (2023)",
        description: "Event management website built for showcasing and organizing events.",
        tech: ["HTML", "CSS", "JavaScript"],
    },
    {
        title: "Touch My Deck",
        subtitle: "Sorting Game (2022)",
        description: "Sorting game built in Android Studio with Firebase for data handling.",
        tech: ["Android Studio", "Firebase"],
    },
];

export default function Projects() {
    return (
        <main className="min-h-screen bg-white text-black">
            {/* Match App sizing */}
            <div className="mx-auto max-w-[1100px] p-6 text-left">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors"
                >
                    <span aria-hidden="true">←</span>
                    <span>Back to Home</span>
                </Link>

                <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
                    Projects
                </h1>

                <p className="mt-2 text-base text-gray-700">
                    Projects that I have done or contributed to so far.
                </p>

                <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((p) => (
                        <div key={p.title} className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                            <p className="font-bold text-gray-900">{p.title}</p>
                            <p className="mt-1 text-xs text-gray-600">{p.subtitle}</p>
                            <p className="mt-2 text-sm text-gray-700">{p.description}</p>

                            <div className="mt-3 flex flex-wrap gap-2">
                                {p.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-xl border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
