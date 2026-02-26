import { Sparkles } from "lucide-react";

interface Experience {
  period: string;
  title: string;
  description: string;
  color: string; // tailwind class, e.g. bg-primary
}

const experiences: Experience[] = [
  {
    period: "January 2024 – Present",
    title: "Frontend Engineer at GoodayOn",
    description:
      "Work on frontend architecture, built design systems, and delivered high-performance internal tool app. Automate operations using tools like n8n, Zapier",
    color: "bg-primary",
  },
  {
    period: "Feb 2021 – Dec 2023",
    title: "IT Support at GoodayOn",
    description:
      "Led the operations team while driving process improvements across multiple projects.Focused on performance optimization and efficency.",
    color: "bg-[hsl(0_70%_60%)]",
  },
  {
    period: "May 2019 – Jul 2019",
    title: "Junior Developer at AAU",
    description:
      "Assisted in front-end development and UI enhancements. Contributed to coding, debugging and refining interactive websites.",
    color: "bg-[hsl(50_70%_55%)]",
  },
];

function ExperienceCard({ exp, isLast }: { exp: Experience; isLast: boolean }) {
  return (
    <div className="group relative grid grid-cols-1 gap-4 sm:grid-cols-[180px_28px_1fr]">
      {/* Left: period */}
      <div className="sm:pt-5">
        <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground sm:text-right">
          {exp.period}
        </p>
      </div>

      {/* Middle: rail */}
      <div className="relative hidden sm:flex sm:flex-col sm:items-center">
        <div
          className={
            "mt-5 h-3.5 w-3.5 rounded-full ring-4 ring-background transition " +
            exp.color
          }
        />
        {!isLast && <div className="mt-2 w-px flex-1 bg-border" />}
      </div>

      {/* Right: card */}
      <div className="relative">
        {/* Mobile dot + mini rail */}
        <div className="flex items-start gap-3 sm:hidden">
          <div className="mt-1.5 flex flex-col items-center">
            <div
              className={
                "h-3 w-3 rounded-full ring-4 ring-background transition " +
                exp.color
              }
            />
            {!isLast && (
              <div className="mt-2 h-full min-h-[34px] w-px bg-border" />
            )}
          </div>

          <div className="-mt-1">
            <p className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
              {exp.period}
            </p>
          </div>
        </div>

        <div className="mt-2 rounded-3xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur transition group-hover:shadow-lg group-hover:border-primary/30">
          {/* subtle hover glow */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition duration-300 group-hover:opacity-100">
            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-2xl" />
            <div className="absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-muted/30 blur-2xl" />
          </div>

          <h3 className="text-base font-semibold text-foreground sm:text-lg">
            {exp.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {exp.description}
          </p>

          <div className="mt-5 flex items-center justify-between">
            <span className="text-xs font-mono text-muted-foreground">
              {isLast ? "" : "↓"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative overflow-hidden py-24 sm:py-28 px-6"
    >
      {/* Decorative background (light, consistent with other sections) */}
      {/* <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-44 right-[-140px] h-[560px] w-[560px] rounded-full bg-muted/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div> */}

      <div className="relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          {/* Left: sticky header */}
          <div className="md:col-span-5">
            <div className="md:sticky md:top-28">
              <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                Timeline
              </p>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Experience
              </h2>
              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                I’ve worked with teams — shipping products, improving
                performance, and building automated systems
              </p>
            </div>
          </div>

          {/* Right: timeline */}
          <div className="md:col-span-7">
            <div className="space-y-6">
              {experiences.map((exp, i) => (
                <ExperienceCard
                  key={exp.title}
                  exp={exp}
                  isLast={i === experiences.length - 1}
                />
              ))}
            </div>

            {/* Bottom note */}
            <div className="mt-10 rounded-3xl border border-border bg-card/70 p-6 text-sm text-muted-foreground shadow-sm backdrop-blur">
              Interested in working together? I’m open to projects!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
