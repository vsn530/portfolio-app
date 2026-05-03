export default function Hero() {
  const roles = [
    { emoji: "💼", label: "Full Stack Developer" },
    { emoji: "📱", label: "Frontend Developer" },
  ];

  return (
    <section id="home" className="bg-slate-950 h-screen py-12">
      <div className="container mx-auto grid items-center gap-12 px-4 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="text-xl uppercase tracking-[0.3em] text-sky-400">
            Hello, I&apos;m
          </div>
          <h1 className="max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Srinivasulu
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Thanks for dropping by. I love solving problems, creating intuitive
            experiences, and experimenting with new tech.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#contact"
              className="rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-400"
            >
              Work with me
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-white/10 px-6 py-3 text-sm text-slate-200 transition hover:border-sky-400"
            >
              View projects
            </a>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {roles.map((role) => (
              <div
                key={role.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-5"
              >
                <div className="text-3xl">{role.emoji}</div>
                <p className="mt-4 text-sm text-slate-200">{role.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto w-full max-w-[400px] rounded-[40px] border border-white/10 bg-white/5 p-6 lg:mx-0">
          <div className="aspect-[4/5] self-end overflow-hidden rounded-[32px] bg-slate-900">
            <img
              src="/profilepid.jpg"
              alt="Srinivas"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
