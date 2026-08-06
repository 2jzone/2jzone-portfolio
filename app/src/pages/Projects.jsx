import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFolderOpen,
    faChevronLeft,
    faChevronRight,
    faTimes,
    faExternalLinkAlt
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const PROJECTS = [
    {
        title: "Test Showcase Project",
        subtitle: "Interactive Demo Feature (2026)",
        description: "A test widget showcasing the interactive carousel modal feature with a premium glassmorphic popup drawer.",
        longDescription: "This is a detailed, comprehensive description of the Test Showcase Project. It features a fully interactive image carousel, beautiful tags, and action buttons to toggle or navigate between the live site and the source code repository. The modal incorporates rich animations, backdrop blur, smooth sliding transitions for images, and maintains a clean aesthetic consistent with the site's design guidelines.",
        tech: ["React", "Tailwind CSS", "Vite", "Framer Motion", "Splide.js"],
        images: [
            "test-project-1.png",
            "test-project-2.png",
            "test-project-3.png"
        ],
        href: "https://example.com/live-demo",
        github: "https://github.com/2jzone/test-showcase"
    },
    {
        title: "Maize Watch",
        subtitle: "Mobile and Web Application (2025)",
        description:
            "IoT-powered corn monitoring system that turns real-time sensor data into prescriptive analytics and ML-driven insights.",
        longDescription:
            "Maize Watch is an IoT-powered smart farming system designed to monitor soil moisture, temperature, and crop health in real-time. The system aggregates sensor data via Arduino and Thingspeak, processing it through a Node.js backend. The frontend is built using React for analytics dashboards and Flutter for mobile users, offering machine learning-driven prescriptive analytics to optimize water usage and maximize corn yield.",
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
        longDescription:
            "Refurnish is a high-performance modern furniture marketplace application built on the MERN stack with Next.js and TypeScript. It utilizes Redis for caching session states, Socket.io for real-time negotiations and messaging between buyers and sellers, and Docker for simplified deployment. Standard authentication is handled via JSON Web Tokens (JWT), while package management is powered by PNPM.",
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
    const base = import.meta.env.BASE_URL;
    const [selectedProject, setSelectedProject] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Disable body scroll when modal is open
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [selectedProject]);

    const handleCardClick = (project) => {
        setSelectedProject(project);
        setCurrentImageIndex(0);
    };

    const handlePrevImage = (e) => {
        e.stopPropagation();
        if (!selectedProject || !selectedProject.images) return;
        setCurrentImageIndex((prev) =>
            prev === 0 ? selectedProject.images.length - 1 : prev - 1
        );
    };

    const handleNextImage = (e) => {
        e.stopPropagation();
        if (!selectedProject || !selectedProject.images) return;
        setCurrentImageIndex((prev) =>
            prev === selectedProject.images.length - 1 ? 0 : prev + 1
        );
    };

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
                    Projects that I have done or contributed to so far. Click a card to view detailed specifications and screenshots.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {PROJECTS.map((p) => (
                        <div
                            key={p.title}
                            onClick={() => handleCardClick(p)}
                            className="group block text-left rounded-xl border border-gray-200 bg-gray-50 p-4 h-full cursor-pointer transition-all duration-300 hover:bg-gray-100/80 hover:-translate-y-1 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/20"
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    handleCardClick(p);
                                }
                            }}
                        >
                            <p className="font-bold text-gray-900 group-hover:text-black transition-colors">{p.title}</p>
                            <p className="mt-1 text-sm text-gray-600">{p.subtitle}</p>
                            <p className="mt-2 text-sm text-gray-700 line-clamp-3">{p.description}</p>

                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {p.tech.slice(0, 4).map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-xl border border-gray-200/80 bg-white px-2 py-0.5 text-xs text-gray-600 font-medium"
                                    >
                                        {t}
                                    </span>
                                ))}
                                {p.tech.length > 4 && (
                                    <span className="rounded-xl border border-gray-200/80 bg-white px-2 py-0.5 text-xs text-gray-600 font-medium">
                                        +{p.tech.length - 4} more
                                    </span>
                                )}
                            </div>

                            <div className="mt-4 text-xs font-semibold text-black flex items-center gap-1 group-hover:underline">
                                <span>View Details</span>
                                <span aria-hidden="true">→</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Detail Modal Overlay */}
            {selectedProject && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 overflow-y-auto animate-fade-in"
                    onClick={() => setSelectedProject(null)}
                >
                    <div
                        className="bg-white rounded-2xl w-full max-w-2xl border border-gray-200 shadow-2xl flex flex-col max-h-[90vh] overflow-hidden animate-scale-up"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start p-5 border-b border-gray-100">
                            <div>
                                <h3 className="text-xl font-extrabold text-gray-900">{selectedProject.title}</h3>
                                <p className="text-sm text-gray-500 mt-0.5">{selectedProject.subtitle}</p>
                            </div>
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="text-gray-400 hover:text-black hover:bg-gray-100 rounded-lg p-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-200"
                                aria-label="Close modal"
                            >
                                <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Scrollable Content Body */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {/* Image Carousel */}
                            {selectedProject.images && selectedProject.images.length > 0 && (
                                <div className="relative aspect-[16/10] bg-gray-50 rounded-xl overflow-hidden border border-gray-100 shadow-inner group/carousel select-none">
                                    <img
                                        src={`${base}${selectedProject.images[currentImageIndex]}`}
                                        alt={`${selectedProject.title} mockup preview ${currentImageIndex + 1}`}
                                        className="w-full h-full object-cover transition-all duration-300"
                                    />

                                    {/* Carousel Controls */}
                                    {selectedProject.images.length > 1 && (
                                        <>
                                            <button
                                                onClick={handlePrevImage}
                                                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white hover:bg-gray-100 text-black border border-gray-200 shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer z-10"
                                                aria-label="Previous image"
                                            >
                                                <FontAwesomeIcon icon={faChevronLeft} className="w-3.5 h-3.5 text-white" />
                                            </button>
                                            <button
                                                onClick={handleNextImage}
                                                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white hover:bg-gray-100 text-black border border-gray-200 shadow-md hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer z-10"
                                                aria-label="Next image"
                                            >
                                                <FontAwesomeIcon icon={faChevronRight} className="w-3.5 h-3.5 text-white" />
                                            </button>

                                            {/* Dot Indicators */}
                                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/10 px-2 py-1 rounded-full backdrop-blur-[2px]">
                                                {selectedProject.images.map((_, idx) => (
                                                    <button
                                                        key={idx}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            setCurrentImageIndex(idx);
                                                        }}
                                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentImageIndex
                                                                ? "bg-white w-4"
                                                                : "bg-white/50 hover:bg-white/80"
                                                            }`}
                                                        aria-label={`Go to slide ${idx + 1}`}
                                                    />
                                                ))}
                                            </div>
                                        </>
                                    )}
                                </div>
                            )}

                            {/* Tech Stack List */}
                            <div className="space-y-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {selectedProject.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-1 text-sm text-gray-700 font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Long Description */}
                            <div className="space-y-2">
                                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400">Project Overview</h4>
                                <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-line">
                                    {selectedProject.longDescription || selectedProject.description}
                                </p>
                            </div>
                        </div>

                        {/* Footer (Actions) */}
                        <div className="p-4 border-t border-gray-100 bg-gray-50/50 flex flex-wrap justify-start items-center gap-3">
                            {/* Live & Repository links */}
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.href && (
                                    <a
                                        href={selectedProject.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-sm font-extrabold !text-white bg-[#111827] hover:bg-[#111827]/90 active:scale-95 transition-all duration-200 shadow-sm"
                                    >
                                        <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3 !text-white" />
                                        <span className="!text-white">Live Website</span>
                                    </a>
                                )}
                                {selectedProject.github && (
                                    <a
                                        href={selectedProject.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-sm font-extrabold text-black border border-gray-300 bg-white hover:bg-gray-50 active:scale-95 transition-all duration-200 hover:shadow-sm"
                                    >
                                        <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5" />
                                        <span>GitHub Repo</span>
                                    </a>
                                )}
                                {selectedProject.figma && (
                                    <a
                                        href={selectedProject.figma}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs md:text-sm font-extrabold text-black border border-gray-300 bg-white hover:bg-gray-50 active:scale-95 transition-all duration-200 hover:shadow-sm"
                                    >
                                        <span>Figma Design</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}
