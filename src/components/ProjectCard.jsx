export default function ProjectCard({ project }) {
  return (
    <a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      className="group w-full max-w-[320px] overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-xl shadow-slate-950/20 transition hover:-translate-y-1 hover:border-sky-400/40 hover:bg-slate-900/80"
    >
      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-5 pb-5 pt-20 text-white">
          <p className="text-sm uppercase tracking-[0.35em] text-sky-300">
            {project.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <p className="text-sm leading-6 text-slate-300">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-900/85 px-3 py-1 text-xs text-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
