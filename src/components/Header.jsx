import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sectionIds = links.map((link) => link.href.slice(1));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.4;
      let currentSection = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/95 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <a href="#home" className="text-xl font-semibold text-white">
          {"<Srinivasulu />"}
        </a>

        <nav aria-label="Primary navigation" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            {links.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setActiveSection(sectionId)}
                    className={`transition ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-slate-300 hover:text-white"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-sky-500/40 bg-sky-500/10 px-5 py-2 text-sky-200 transition hover:border-sky-400 hover:bg-sky-500/20"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
