export default function About() {
  const expertise = [
    "Backend Development",
    "Frontend Development",
    "Cloud & DevOps",
  ];

  return (
    <section
      id="about"
      className="border-t border-white/10 bg-slate-950/95 py-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl space-y-5">
          <p className="text-2xl uppercase tracking-[0.3em] text-sky-400">
            About Me
          </p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Passionate about creating digital experiences that make a difference
          </h2>
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            I am a dedicated developer driven by a passion for acquiring new
            technologies and crafting innovative applications. I enjoy building
            scalable web applications, mobile apps, and cloud solutions that
            help businesses grow.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Core Expertise</h3>
            <div className="mt-6 grid gap-4">
              {expertise.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-slate-700/70 bg-slate-900/80 p-4"
                >
                  <p className="text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Experience</h3>
            <p className="mt-4 text-slate-300 leading-8">
              Over 8+ years of experience building modern apps with React,
              Node.js, and cloud-native technologies. I deliver intuitive
              product experiences, scalable backend systems, and polished
              interfaces across web and mobile.
            </p>
            <div className="mt-8 space-y-4">
              <div className="rounded-3xl bg-slate-900/90 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
                  Tools
                </p>
                <p className="mt-3 text-slate-200">
                  React, Next.js, Node.js, Tailwind CSS, AWS
                </p>
              </div>
              <div className="rounded-3xl bg-slate-900/90 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
                  Focus
                </p>
                <p className="mt-3 text-slate-200">
                  Web apps, mobile apps, performance, accessibility
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
