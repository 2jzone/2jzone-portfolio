import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faFileAlt, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../context/ThemeContext";

export default function Navbar({ onOpenResume }) {
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Certifications", href: "#certifications" },
    { label: "Leadership", href: "#leadership" },
  ];

  return (
    <header className="sticky top-3 md:top-5 z-40 mx-auto w-full max-w-4xl px-3 sm:px-4 pointer-events-none">
      <nav className="pointer-events-auto mx-auto flex items-center justify-between gap-2 px-3 sm:px-4 py-2 rounded-full border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md shadow-sm transition-colors duration-200">
        {/* Left Section: Logo / Home / Back */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {isHome ? (
            <a
              href="#top"
              className="px-2 py-1 text-xs md:text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-black dark:hover:text-white transition-colors"
            >
              JA
            </a>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs md:text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
              <span>Home</span>
            </Link>
          )}

          {/* Home Nav Anchor Links */}
          {isHome && (
            <div className="hidden md:flex items-center gap-0.5 text-xs text-zinc-600 dark:text-zinc-400">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-2 py-1 rounded-md hover:text-zinc-950 dark:hover:text-zinc-100 hover:bg-zinc-100/70 dark:hover:bg-zinc-800/70 transition-all whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Right Section: Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Quick Resume Button */}
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800/60 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-700/60 transition-colors"
              title="View Resume"
            >
              <FontAwesomeIcon icon={faFileAlt} className="text-xs" />
              <span>Resume</span>
            </button>
          )}

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 w-8 h-8 rounded-full flex items-center justify-center text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="text-sm" />
          </button>
        </div>
      </nav>
    </header>
  );
}
