"use client";

import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  LayoutGrid,
  Sparkles,
  Wand2,
  Workflow,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useMemo, useState } from "react";

import projectDashboard from "@/assets/project-dashboard.jpg";
import projectDesignSystem from "@/assets/project-design-system.jpg";
import projectLandingBuilder from "@/assets/project-landing-builder.jpg";
import projectLeadGen from "@/assets/project-lead-gen.jpg";
import projectOnboarding from "@/assets/project-onboarding.jpg";

interface Project {
  name: string;
  type: "frontend" | "automation";
  description: string;
  tech: string[];
  image: StaticImageData;
  link?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    name: "E-Commerce Dashboard",
    type: "frontend",
    featured: true,
    description:
      "Real-time analytics dashboard for e-commerce platforms with interactive charts, live sales metrics, and dark-mode-first design.",
    tech: ["React", "TypeScript", "TailwindCSS", "Recharts"],
    image: projectDashboard,
    link: "#",
  },
  {
    name: "SaaS Landing Builder",
    type: "frontend",
    featured: true,
    description:
      "Drag-and-drop landing page builder with 50+ pre-built blocks, live preview, and static HTML export for SaaS products.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "dnd-kit"],
    image: projectLandingBuilder,
    link: "#",
  },
  {
    name: "Design System Kit",
    type: "frontend",
    description:
      "Production-ready component library with 40+ accessible components, full TypeScript support, and comprehensive Storybook docs.",
    tech: ["React", "Storybook", "Radix UI", "TailwindCSS"],
    image: projectDesignSystem,
    link: "#",
  },
  {
    name: "Lead Gen Automator",
    type: "automation",
    featured: true,
    description:
      "End-to-end lead generation pipeline that scrapes, scores with AI, enriches with company data, and notifies via Slack.",
    tech: ["n8n", "OpenAI", "Google Sheets", "Slack"],
    image: projectLeadGen,
    link: "#",
  },
  {
    name: "Client Onboarding Flow",
    type: "automation",
    description:
      "Automated onboarding that creates Notion workspaces, sends welcome emails, and generates Stripe invoices on contract signature.",
    tech: ["n8n", "Notion", "Stripe", "Gmail"],
    image: projectOnboarding,
    link: "#",
  },
];

const typeMeta = {
  all: { label: "All", icon: LayoutGrid },
  frontend: { label: "Frontend", icon: Code2 },
  automation: { label: "Automation", icon: Workflow },
} as const;

type FilterKey = keyof typeof typeMeta;

function Pill({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "inline-flex items-center gap-2 rounded-2xl border px-3.5 py-2 text-xs font-semibold shadow-sm backdrop-blur transition " +
        (active
          ? "border-primary/30 bg-primary/10 text-foreground"
          : "border-border bg-card/70 text-muted-foreground hover:bg-card")
      }
    >
      {children}
    </button>
  );
}

function Tag({ text }: { text: string }) {
  return (
    <span className="rounded-xl border border-border bg-background/60 px-2.5 py-1 text-[11px] font-mono text-muted-foreground">
      {text}
    </span>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.type === "frontend" ? Code2 : Workflow;

  return (
    <a
      href={project.link}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 shadow-sm backdrop-blur transition hover:shadow-lg hover:border-primary/30"
    >
      {/* Decorative glow on hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-2xl" />
        <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-muted/40 blur-2xl" />
      </div>

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <Image
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          placeholder="blur"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent opacity-90" />

        {/* Floating top bar */}
        <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/60 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
            <Icon className="h-4 w-4" />
            {project.type === "frontend" ? "Frontend" : "Automation"}
          </span>

          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-background/60 text-muted-foreground shadow-sm transition group-hover:text-foreground">
            <ExternalLink className="h-4 w-4" />
          </span>
        </div>

        {/* Bottom title */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-lg font-bold tracking-tight text-foreground">
            {project.name}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
            {project.description}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="relative p-6">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Tag key={t} text={t} />
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {project.featured ? "Featured" : "Selected"}
          </span>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition group-hover:text-primary">
            View project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </div>
    </a>
  );
}

function FeaturedCard({ project }: { project: Project }) {
  const Icon = project.type === "frontend" ? Code2 : Workflow;

  return (
    <a
      href={project.link}
      className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 shadow-sm backdrop-blur transition hover:shadow-lg hover:border-primary/30"
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/15 blur-2xl" />
        <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-muted/40 blur-2xl" />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-12">
        <div className="relative md:col-span-7">
          <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden bg-secondary">
            <Image
              src={project.image}
              alt={project.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, 60vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/10 to-transparent" />
          </div>
        </div>

        <div className="relative md:col-span-5 p-7 md:p-8">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/60 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
              <Sparkles className="h-4 w-4" />
              Spotlight
            </span>
            <span className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/60 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
              <Icon className="h-4 w-4" />
              {project.type === "frontend" ? "Frontend" : "Automation"}
            </span>
          </div>

          <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground">
            {project.name}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Tag key={t} text={t} />
            ))}
          </div>

          <div className="mt-7 flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              Built for real-world impact
            </span>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition group-hover:text-primary">
              Explore
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

const ProjectsSection = () => {
  const [filter, setFilter] = useState<FilterKey>("all");

  const featured = useMemo(
    () => projects.find((p) => p.featured) ?? projects[0],
    [],
  );

  const filtered = useMemo(() => {
    if (filter === "all") return projects;
    return projects.filter((p) => p.type === filter);
  }, [filter]);

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-24 sm:py-28 px-6"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-44 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-44 left-[-160px] h-[560px] w-[560px] rounded-full bg-muted/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur">
              <Wand2 className="h-3.5 w-3.5" />
              Selected work — real products, real outcomes
            </p>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              Projects that ship.
            </h2>
            <p className="mt-3 max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
              A collection of recent work spanning frontend development and
              workflow automation. Each project focuses on clarity, speed, and
              measurable impact.
            </p>
          </div>

          <div className="md:col-span-5 md:justify-self-end">
            <div className="flex flex-wrap items-center gap-2">
              {(Object.keys(typeMeta) as FilterKey[]).map((k) => {
                const Ico = typeMeta[k].icon;
                return (
                  <Pill
                    key={k}
                    active={filter === k}
                    onClick={() => setFilter(k)}
                  >
                    <Ico className="h-4 w-4" />
                    {typeMeta[k].label}
                  </Pill>
                );
              })}
            </div>
          </div>
        </div>

        {/* Spotlight */}
        <div className="mt-10">
          <FeaturedCard project={featured} />
        </div>

        {/* Grid */}
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filtered
            .filter((p) => p.name !== featured.name)
            .map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 rounded-3xl border border-border bg-card/70 p-7 shadow-sm backdrop-blur sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-foreground">
              Want something similar built for your team?
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              I can help with design systems, dashboards, and automation.
            </p>
          </div>
          <a
            href="#connect"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
          >
            Let’s work together
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
