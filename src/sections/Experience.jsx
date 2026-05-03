import { useState } from "react";

const tabs = ["Experience", "Education"];

const experienceItems = [
  {
    company: "Eagleview, Bangalore, India",
    role: "Senior Software Engineer",
    period: "Sep 2021 - Present",
    url: "https://www.eagleview.com/",
    social: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/eagleview-technologies-inc",
      },
      { label: "Twitter", href: "https://twitter.com/EagleViewTech" },
      { label: "Facebook", href: "https://www.facebook.com/eagleviewindia1/" },
    ],
    bullets: [
      "Developed & deployed 6 microservices and 2 UI applications with seamless widget integration into ESRI and other third-party platforms.",
      "Architected and optimized solutions across both PostgreSQL(PostGIS) and DynamoDB databases, ensuring scalable geospatial data management.",
      "Delivered critical features and bug fixes that enhanced system reliability and user experience across multiple product lines.",
      "Led refactoring initiatives and performance optimization projects, resulting in improved application response times and reduced resource consumption.",
    ],
    tags: [
      "ReactJS",
      "GoLang",
      "PostgreSQL",
      "DynamoDB",
      "ESRI",
      "Microservices",
    ],
  },
  {
    company: "Qvantel",
    role: "Senior Software Developer",
    period: "Sep 2020 - Sep 2021",
    bullets: [
      "Developed responsive React and TypeScript features for a telecom BSS platform, improving UI consistency across 5+ customer-facing modules",
      "Integrated 10+ REST APIs for subscription management, billing, and account workflows, reducing frontend data-fetch errors by ~30%",
      "Resolved critical cross-browser compatibility issues affecting IE11 and Safari, improving accessibility for enterprise clients across regions",
      "Participated in agile ceremonies, sprint planning, and peer code reviews — contributing to on-time delivery of 3 major platform releases",
    ],
    social: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/eagleview-technologies-inc",
      },
      { label: "Twitter", href: "https://twitter.com/EagleViewTech" },
      { label: "Facebook", href: "https://www.facebook.com/eagleviewindia1/" },
    ],
    tags: ["ReactJS", "Redux", "graphQL", "Typescript"],
  },
  {
    company: "Hexagon Capability Center India",
    role: "Lead Developer | React Developer",
    period: "Nov 2014 - Sep 2020",
    url: "https://hexagon.com/",
    social: [
      {
        label: "LinkedIn",
        href: "https://in.linkedin.com/company/dev-technosys-pvt-ltd",
      },
      { label: "Twitter", href: "https://twitter.com/devtechnosys" },
      { label: "Facebook", href: "https://www.facebook.com/devtechnosys/" },
    ],
    bullets: [
      "Delivered 10+ full-stack applications across web and mobile platforms, serving diverse client requirements with exceptional quality and performance standards.",
      "Architected and developed comprehensive solutions using MERN Stack (MongoDB, Express, React, Node.js) and React Native for cross-platform mobile development.",
      "Built scalable web applications including Zawadi, Holyreads, AutoRent-UAE, and Crickmazza.",
      "Implemented robust database architectures using MySQL, MongoDB, and IndexedDB for offline-ready client solutions.",
    ],
    tags: ["MERN", "React Native", "MySQL", "MongoDB", "AWS", "JavaScript"],
  },
  {
    company: "Tech Mahindra",
    role: "Software Engineer",
    period: "Sep 2012 - Nov 2014",
    url: "https://www.techmahindra.com/",
    social: [
      {
        label: "LinkedIn",
        href: "https://in.linkedin.com/company/dev-technosys-pvt-ltd",
      },
      { label: "Twitter", href: "https://twitter.com/devtechnosys" },
      { label: "Facebook", href: "https://www.facebook.com/devtechnosys/" },
    ],
    bullets: [
      "Delivered 10+ full-stack applications across web and mobile platforms, serving diverse client requirements with exceptional quality and performance standards.",
      "Architected and developed comprehensive solutions using MERN Stack (MongoDB, Express, React, Node.js) and React Native for cross-platform mobile development.",
      "Built scalable web applications including Zawadi, Holyreads, AutoRent-UAE, and Crickmazza.",
      "Implemented robust database architectures using MySQL, MongoDB, and IndexedDB for offline-ready client solutions.",
    ],
    tags: ["MERN", "React Native", "MySQL", "MongoDB", "AWS", "JavaScript"],
  },
];

const educationItems = [
  {
    institution: "Merits college, Udaygiri",
    degree: "B.Tech in Computer Science Engineering",
    details: [
      "Completed academic projects on Database Systems, applying concepts of data modeling and query optimization",
      "Served as Class Representative, coordinating communication between students and faculty",
      "Solid academic foundation in Computer Science fundamentals (DSA, OOP, DBMS)",
    ],
  },
];

export default function Experience() {
  const [selectedTab, setSelectedTab] = useState("Experience");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedExperience = experienceItems[selectedIndex];

  return (
    <section
      id="experience"
      className="border-t border-white/10 bg-slate-950/95 py-24"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
            My Journey
          </p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            Professional experience and educational background that shaped my
            career
          </h2>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setSelectedTab(tab)}
              className={`rounded-full border px-5 py-3 text-sm transition ${
                selectedTab === tab
                  ? "border-sky-400 bg-sky-500/10 text-white"
                  : "border-white/10 text-slate-300 hover:border-slate-200/30 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {selectedTab === "Experience" ? (
          <div className="mt-12 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {experienceItems.map((item, index) => (
                <button
                  key={item.company}
                  type="button"
                  onClick={() => setSelectedIndex(index)}
                  className={`w-full rounded-3xl border px-6 py-6 text-left transition ${
                    selectedIndex === index
                      ? "border-sky-400 bg-slate-900/90"
                      : "border-white/10 bg-white/5 hover:border-slate-200/30"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-base font-medium text-white">
                        {item.company}
                      </p>
                      <p className="mt-2 text-sm text-slate-300">{item.role}</p>
                    </div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
                      {item.period}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="flex flex-col gap-6">
                <div>
                  <a
                    href={selectedExperience.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm uppercase tracking-[0.3em] text-sky-400"
                  >
                    {selectedExperience.company}
                  </a>
                  <h3 className="mt-4 text-3xl font-semibold text-white">
                    {selectedExperience.role}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    {selectedExperience.period}
                  </p>
                </div>

                <div className="grid gap-4">
                  {selectedExperience.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      className="rounded-3xl bg-slate-900/90 p-5"
                    >
                      <p className="text-sm leading-7 text-slate-200">
                        {bullet}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="rounded-3xl bg-slate-900/90 p-5">
                  <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
                    Technology stack
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selectedExperience.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {selectedExperience.social.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-full border border-white/10 bg-slate-900/90 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400 hover:text-white"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-12 grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              {educationItems.map((item) => (
                <div
                  key={item.institution}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6"
                >
                  <p className="text-sm uppercase tracking-[0.3em] text-sky-400">
                    {item.institution}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">
                    {item.degree}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">{item.period}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h3 className="text-2xl font-semibold text-white">
                Education highlights
              </h3>
              <div className="mt-6 space-y-4">
                {educationItems[0].details.map((detail) => (
                  <div key={detail} className="rounded-3xl bg-slate-900/90 p-5">
                    <p className="text-sm leading-7 text-slate-200">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
