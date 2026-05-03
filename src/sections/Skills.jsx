import { useState } from "react";

const categories = [
  "All Skills",
  "Backend",
  "Database",
  "Frontend Web & Mobile",
  "Cloud & DevOps",
  "Tools & Others",
];

const skills = [
  {
    name: "React",
    category: "Frontend Web & Mobile",
    detail: "Interactive UI creation",
  },

  {
    name: "Next.js",
    category: "Frontend Web & Mobile",
    detail: "React SSR and SSG",
  },
  { name: "Node.js", category: "Backend", detail: "Server-side JavaScript" },

  {
    name: "TypeScript",
    category: "Frontend Web & Mobile",
    detail: "Typed JavaScript",
  },
  {
    name: "HTML 5",
    category: "Frontend Web & Mobile",
    detail: "Semantic markup",
  },
  {
    name: "CSS 3",
    category: "Frontend Web & Mobile",
    detail: "Responsive styling",
  },

  {
    name: "React Native",
    category: "Frontend Web & Mobile",
    detail: "Mobile app interfaces",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    detail: "Relational data systems",
  },
  { name: "GraphQL", category: "Backend", detail: "Flexible query layer" },
  { name: "DynamoDB", category: "Database", detail: "NoSQL cloud database" },
  { name: "MongoDB", category: "Database", detail: "Document store" },
  { name: "MySql", category: "Database", detail: "SQL data storage" },
  { name: "AWS", category: "Cloud & DevOps", detail: "Cloud infrastructure" },
  { name: "Docker", category: "Cloud & DevOps", detail: "Container workflows" },
  {
    name: "Kubernetes",
    category: "Cloud & DevOps",
    detail: "Container orchestration",
  },
  { name: "Jenkins", category: "Cloud & DevOps", detail: "CI/CD automation" },
  { name: "Git", category: "Tools & Others", detail: "Version control" },
  { name: "Webpack", category: "Tools & Others", detail: "Build pipelines" },
  { name: "Vercel", category: "Tools & Others", detail: "Deployment platform" },
  {
    name: "ESRI",
    category: "Frontend Web & Mobile",
    detail: "Geospatial tools",
  },
  {
    name: "Agile/Scrum",
    category: "Tools & Others",
    detail: "Delivery process",
  },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState("All Skills");
  const filteredSkills =
    selectedCategory === "All Skills"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);
  const featuredSkill = filteredSkills[0] ?? skills[0];

  return (
    <section
      id="skills"
      className="border-t border-white/10 bg-slate-950/95 py-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
            Skills & Expertise
          </p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Interactive technology stack
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full border px-5 py-3 text-sm transition ${
                selectedCategory === category
                  ? "border-sky-400 bg-sky-500/10 text-white"
                  : "border-white/10 text-slate-300 hover:border-slate-200/30 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-8 xl:grid-cols-[1.4fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:border-sky-400/30 hover:bg-slate-900/90"
              >
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{skill.detail}</p>
              </div>
            ))}
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
              Featured skill
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              {featuredSkill.name}
            </h3>
            <p className="mt-4 text-slate-300">{featuredSkill.detail}</p>
            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-slate-900/90 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
                  Focus area
                </p>
                <p className="mt-3 text-slate-200">{featuredSkill.category}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
                  Proficiency
                </p>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-800">
                  <div className="h-full w-4/5 rounded-full bg-sky-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
