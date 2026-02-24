import { ArrowUpRight } from "lucide-react";

interface Experience {
  period: string;
  title: string;
  description: string;
  color: string;
}

const experiences: Experience[] = [
  {
    period: "Nov 2022 – Present",
    title: "Senior Frontend Engineer at TechCorp",
    description:
      "Led frontend architecture, built design systems, and delivered high-performance React applications serving 100k+ users.",
    color: "bg-primary",
  },
  {
    period: "Mar 2020 – Oct 2022",
    title: "Frontend Developer at StartupXYZ",
    description:
      "Collaborated with cross-functional teams to build SaaS products. Focused on performance optimization and responsive design.",
    color: "bg-[hsl(0_70%_60%)]",
  },
  {
    period: "Jun 2018 – Feb 2020",
    title: "Junior Developer at WebAgency",
    description:
      "Assisted in front-end development and UI enhancements. Contributed to coding, debugging and refining interactive websites.",
    color: "bg-[hsl(50_70%_55%)]",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">
          {/* Left — Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              My experiences
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              I have had the pleasure to work with companies across a variety of
              industries. I'm always interested in new, exciting and challenging
              adventures.
            </p>
            <a
              href="#about"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-foreground text-foreground font-semibold text-sm hover:bg-foreground hover:text-background transition-all duration-300"
            >
              More About Me
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Right — Timeline */}
          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="grid grid-cols-[140px_24px_1fr] gap-4 items-start"
              >
                {/* Date */}
                <span className="text-xs font-mono text-muted-foreground uppercase tracking-wide pt-1 text-right">
                  {exp.period}
                </span>

                {/* Dot + Line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-3.5 h-3.5 rounded-full ${exp.color} mt-1.5 flex-shrink-0 ring-4 ring-background`}
                  />
                  {i < experiences.length - 1 && (
                    <div className="w-px flex-1 bg-border min-h-[80px]" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-10">
                  <h3 className="font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
