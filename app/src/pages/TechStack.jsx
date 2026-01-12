// src/pages/TechStack.jsx
import { Link } from "react-router-dom";

const TECH_STACK = [
    { title: "Languages", items: ["HTML", "CSS", "JavaScript", "TypeScript", "Dart", "Python", "PHP"] },
    { title: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Bootstrap"] },
    { title: "Mobile", items: ["Flutter", "Android Studio"] },
    { title: "Backend", items: ["Node.js", "Express.js"] },
    { title: "Databases", items: ["MongoDB", "Firebase", "MySQL", "MS SQL"] },
    { title: "Tools & DevOps", items: ["Git", "GitHub", "VS Code", "Eclipse", "Docker", "PNPM"] },
    { title: "Realtime & Auth", items: ["Redis", "Socket.io", "JWT"] },
];

export default function TechStack() {
    return (
        <main className="min-h-screen bg-white text-black">
            {/* ✅ Match App.jsx sizing: max-w-[1100px] + p-6 */}
            <div className="mx-auto max-w-[1100px] p-6 text-left">
                {/* Back to Home */}
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-sm text-gray-700 hover:text-black transition-colors"
                >
                    <span aria-hidden="true">←</span>
                    <span>Back to Home</span>
                </Link>

                {/* Title */}
                <h1 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">
                    Tech Stack
                </h1>

                {/* Sections */}
                <div className="mt-8 space-y-8">
                    {TECH_STACK.map((section) => (
                        <section key={section.title} className="space-y-3">
                            <h2 className="text-lg font-bold">{section.title}</h2>

                            <div className="flex flex-wrap gap-2">
                                {section.items.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-xl border border-gray-200 bg-gray-50 px-3 py-1 text-sm"
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
