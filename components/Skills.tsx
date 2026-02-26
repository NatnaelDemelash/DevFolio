"use client";

import {
  CheckSquare,
  Code2,
  GitBranch,
  Globe,
  MessageSquare,
  Package,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import React from "react";

const skillCategories = [
  {
    label: "Frontend",
    tools: [
      {
        name: "React",
        desc: "For building fast, interactive UIs",
        icon: Globe,
      },
      {
        name: "Next.js",
        desc: "React framework with routing & SSR",
        icon: Package,
      },
      {
        name: "TypeScript",
        desc: "Typed JavaScript for safer code",
        icon: Code2,
      },
    ],
  },
  {
    label: "Backend",
    tools: [
      { name: "Node.js", desc: "JavaScript runtime for servers", icon: Code2 },
    ],
  },
  {
    label: "Tools & DevOps",
    tools: [
      {
        name: "Git & GitHub",
        desc: "Version control and collaboration",
        icon: GitBranch,
      },
      {
        name: "Slack",
        desc: "Team communication platform",
        icon: MessageSquare,
      },
      {
        name: "Jira",
        desc: "Project management and tracking",
        icon: CheckSquare,
      },
    ],
  },
  {
    label: "Automation & Workflow",
    tools: [
      { name: "n8n", desc: "Workflow automation platform", icon: Workflow },
      {
        name: "API Integrations",
        desc: "Connect and automate services",
        icon: Zap,
      },
    ],
  },
] as const;

type Tool = (typeof skillCategories)[number]["tools"][number];

type ToolCardProps = {
  name: Tool["name"];
  desc: Tool["desc"];
  icon: React.ElementType;
};

function ToolCard({ name, desc, icon: Icon }: ToolCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-4 shadow-sm backdrop-blur transition hover:shadow-md hover:border-primary/30">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-primary/10 blur-2xl" />
        <div className="absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-muted/30 blur-2xl" />
      </div>

      <div className="relative flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background/60 shadow-sm">
          <Icon className="h-4 w-4 text-foreground/80" />
        </div>

        <div className="min-w-0">
          <div className="flex items-start justify-between gap-3">
            <p className="text-sm font-semibold leading-none text-foreground">
              {name}
            </p>
            {/* <span className="hidden sm:inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-2 py-1 text-[10px] font-mono text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
              used
            </span> */}
          </div>

          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden py-24 sm:py-28 px-6"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-44 right-[-140px] h-[560px] w-[560px] rounded-full bg-muted/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />
              The stack I reach for most
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              What I use
            </h2>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
              A focused toolkit for building clean interfaces, reliable systems,
              and automation that saves teams time.
            </p>
          </div>

          <div className="md:col-span-5 md:justify-self-end">
            <div className="rounded-3xl border border-border bg-card/70 p-5 shadow-sm backdrop-blur">
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Highlights
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border bg-background/60 px-4 py-3">
                  <p className="text-xs text-muted-foreground">Focus</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    UI + Automation
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-background/60 px-4 py-3">
                  <p className="text-xs text-muted-foreground">Style</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    Clean & fast
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-10 space-y-10">
          {skillCategories.map((category) => (
            <div key={category.label}>
              <div className="mb-4 flex items-center justify-between gap-4">
                <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {category.label}
                </h3>
                <div className="h-px flex-1 bg-border/60" />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {category.tools.map((tool) => (
                  <ToolCard
                    key={tool.name}
                    name={tool.name}
                    desc={tool.desc}
                    icon={tool.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
