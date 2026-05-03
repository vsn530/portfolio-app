import { useState } from "react";
import { categories, projects } from "../data/portfolio";
import ProjectCard from "../components/ProjectCard";

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All Projects");
  const filteredProjects =
    selectedCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="portfolio"
      className="border-t border-white/10 bg-slate-950/95 py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
            Portfolio
          </p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            My Portfolio
          </h2>
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            Showcasing innovative projects and creative solutions.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-3 text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-sky-500 to-violet-500 text-white shadow-lg shadow-sky-500/20"
                  : "border border-white/10 bg-slate-950/80 text-slate-300 hover:border-slate-200/20 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-14 grid justify-center gap-6 xl:justify-center [grid-template-columns:repeat(auto-fit,minmax(280px,320px))]">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
