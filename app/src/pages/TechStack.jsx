// src/pages/TechStack.jsx
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faLaptopCode, 
  faCode, 
  faMobileScreenButton, 
  faServer, 
  faDatabase, 
  faTools, 
  faNetworkWired 
} from "@fortawesome/free-solid-svg-icons";

const TECH_STACK = [
    { title: "Languages", icon: faCode, items: ["HTML", "CSS", "Java", "JavaScript", "TypeScript", "Dart", "Python", "PHP"] },
    { title: "Frontend", icon: faLaptopCode, items: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "Laravel", "Vue"] },
    { title: "Mobile", icon: faMobileScreenButton, items: ["Flutter", "Android Studio (Dart)"] },
    { title: "Backend", icon: faServer, items: ["Node.js (JavaScript/TypeScript)", "Express.js", "PHP"] },
    { title: "Databases", icon: faDatabase, items: ["MongoDB", "Firebase", "MySQL", "MS SQL"] },
    { title: "Tools & DevOps", icon: faTools, items: ["Figma", "Git", "GitHub", "VS Code", "Eclipse", "Docker", "PNPM"] },
    { title: "Realtime & Auth", icon: faNetworkWired, items: ["Redis", "Socket.io", "JWT"] },
];

export default function TechStack() {
    return (
        <main className="min-h-screen bg-white text-black">
            {/* ✅ Match App.jsx sizing: max-w-[1100px] + p-6 */}
            <div className="mx-auto max-w-[1100px] p-6 text-left">
                {/* Back to Home */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-3 py-1.5 text-sm text-black border border-gray-300 rounded-lg transition-all duration-200 hover:underline hover:-translate-y-0.5"
                >
                    <span aria-hidden="true">←</span>
                    <span>Back to Home</span>
                </Link>

                {/* Title */}
                <h1 className="mt-4 text-2xl md:text-3xl font-extrabold tracking-tight flex items-center gap-2">
                    <FontAwesomeIcon icon={faLaptopCode} />
                    Tech Stack
                </h1>

                {/* Sections */}
                <div className="mt-8 space-y-8">
                    {TECH_STACK.map((section) => (
                        <section key={section.title} className="space-y-3">
                            <h2 className="text-base font-bold flex items-center gap-2">
                                <FontAwesomeIcon icon={section.icon} />
                                {section.title}
                            </h2>

                            <div className="flex flex-wrap gap-2">
                                {section.items.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-1 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </main>
    );
}
