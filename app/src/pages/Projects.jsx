import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const PROJECTS = [
    {
        title: "Maize Watch",
        subtitle: "Mobile and Web Application (2025)",
        description:
            "IoT-powered corn monitoring system that turns real-time sensor data into prescriptive analytics and ML-driven insights.",
        tech: [
            "Flutter",
            "React",
            "Tailwind CSS",
            "Node.js (TypeScript)",
            "Express",
            "Arduino",
            "Thingspeak",
            "Python",
            "Socket.io",
            "nginx",
            "MongoDB Atlas",
        ],
        href: "https://maize-watch.vercel.app/", // TODO: replace
        github: "https://github.com/Snorlark/Maize-Watch", // TODO: replace
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
        href: "https://refurnish-blond.vercel.app/", // TODO: replace
        github: "https://github.com/2jzone/Refurnish", // TODO: replace
    },
    {
        title: "New Era AIMS (Internship)",
        subtitle: "Company Information System (2025)",
        description:
            "A company website that streamlines company transactions such as asset management, purchase transactions, procurement management, IT portal, and company directory.",
        tech: [
            "Laravel",
            "Vue.js",
            "Intertia.js",
            "Axios",
            "Vuetify",
            "Tailwind CSS",
            "PHP",
            "MySQL",
            "Spatie",
        ],
        // href: "https://your-live-site.com", // TODO: replace (or remove if private)
        // github: "https://github.com/yourname/new-era-aims", // TODO: replace (or remove if private)
    },
    {
        title: "Cycling Ride Generator",
        subtitle: "Mobile Application (2025)",
        description:
            "Flutter app that generates personalized bike routes and displays curated cycling articles.",
        tech: ["Flutter", "MongoDB"],
        // href: "https://your-live-site.com", // TODO: replace
        github: "https://github.com/yourname/cycling-ride-generator", // TODO: replace
    },
    {
        title: "Facebook Replication",
        subtitle: "Mobile UI Replication (2025)",
        description: "Facebook mobile UI replication built using Flutter.",
        tech: ["Flutter"],
        // href: "https://your-live-site.com", // TODO: replace (optional)
        github: "https://github.com/yourname/facebook-replication", // TODO: replace
    },
    {
        title: "Zambales Tour",
        subtitle: "Tourism Web Page (2024)",
        description: "Informative tourism web page showcasing Zambales destinations.",
        tech: ["HTML", "CSS"],
        // href: "https://your-live-site.com", // TODO: replace
        github: "https://github.com/yourname/zambales-tour", // TODO: replace
    },
    {
        title: "Sinagtala",
        subtitle: "Event Management Website (2023)",
        description: "Event management website built for showcasing and organizing events.",
        tech: ["HTML", "CSS", "JavaScript"],
        href: "https://your-live-site.com", // TODO: replace
        github: "https://github.com/2jzone/Sinagtala-Event-Management", // TODO: replace
    },
    {
        title: "Touch My Deck",
        subtitle: "Sorting Game (2022)",
        description: "Sorting game built in Android Studio with Firebase for data handling.",
        tech: ["Android Studio", "Firebase"],
        // href: "https://your-live-site.com", // TODO: replace (optional)
        github: "https://github.com/yourname/touch-my-deck", // TODO: replace
    },
    {
        title: "HOPPin",
        subtitle: "Centralized Ride-hailing App (2023)",
        description: "Figma prototype of a centralized ride-hailing app where the user can easily choose between different prices of rides from different ride-hailing apps.",
        tech: ["Figma"],
        figma: "https://www.figma.com/design/iWDld1EnxBcNvjRt44rXLE/HOPPin?node-id=0-1&t=jq0Q4TQRGhgUnZ6x-1", // TODO: replace (optional)
        // github: "https://github.com/yourname/touch-my-deck", // TODO: replace
    },
    {
        title: "FiloDroids",
        subtitle: "JavaFX Project (2022)",
        description: "A Java desktop application designed in SceneBuilder and implemented using JavaFX, that lets users choose and customize FiloDroids based on Philippine culture and ethnicities.",
        tech: ["JavaFX", "SceneBuilder"],
        github: "https://github.com/2jzone/FiloDroids",
    },
];

export default function Projects() {
    return (
        <main className="min-h-screen bg-white text-black">
            <div className="mx-auto max-w-[1100px] p-6 text-left">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-black border border-gray-300 rounded-lg transition-all duration-200 hover:underline hover:-translate-y-0.5"
                >
                    <span aria-hidden="true">←</span>
                    <span>Back to Home</span>
                </Link>

                <h1 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight flex items-center gap-2">
                    <FontAwesomeIcon icon={faFolderOpen} />
                    Projects
                </h1>

                <p className="mt-2 text-sm text-gray-700">
                    Projects that I have done or contributed to so far.
                </p>

                <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((p) => {
                        const CardInner = (
                            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 h-full transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
                                <p className="font-bold text-gray-900">{p.title}</p>
                                <p className="mt-1 text-sm text-gray-600">{p.subtitle}</p>
                                <p className="mt-2 text-sm text-gray-700">{p.description}</p>

                                <div className="mt-3 flex flex-wrap gap-2">
                                    {p.tech.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-xl border border-gray-200 bg-white px-2.5 py-1 text-sm text-gray-700"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Explicit links */}
                                <div className="mt-4 flex flex-wrap gap-3">
                                    {p.href && (
                                        <a
                                            href={p.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm underline text-black hover:text-black transition-all duration-200 hover:-translate-y-0.5"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Live
                                        </a>
                                    )}
                                    {p.github && (
                                        <a
                                            href={p.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm underline text-black hover:text-black transition-all duration-200 hover:-translate-y-0.5"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {p.figma && (
                                        <a
                                            href={p.figma}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-sm underline text-black hover:text-black transition-all duration-200 hover:-translate-y-0.5"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Figma
                                        </a>
                                    )}

                                </div>
                            </div>
                        );

                        // Whole card clickable when href exists
                        return p.href ? (
                            <a
                                key={p.title}
                                href={p.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${p.title} (opens in new tab)`}
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
        </main>
    );
}
