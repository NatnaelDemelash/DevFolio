import { ArrowUpRight, ExternalLink } from 'lucide-react';
import projectDashboard from '@/assets/project-dashboard.jpg';
import projectLandingBuilder from '@/assets/project-landing-builder.jpg';
import projectDesignSystem from '@/assets/project-design-system.jpg';
import projectLeadGen from '@/assets/project-lead-gen.jpg';
import projectOnboarding from '@/assets/project-onboarding.jpg';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface Project {
  name: string;
  type: 'frontend' | 'automation';
  description: string;
  tech: string[];
  image: StaticImageData;
  link?: string;
}

const projects: Project[] = [
  {
    name: 'E-Commerce Dashboard',
    type: 'frontend',
    description:
      'Real-time analytics dashboard for e-commerce platforms with interactive charts, live sales metrics, and dark-mode-first design.',
    tech: ['React', 'TypeScript', 'TailwindCSS', 'Recharts'],
    image: projectDashboard,
    link: '#',
  },
  {
    name: 'SaaS Landing Builder',
    type: 'frontend',
    description:
      'Drag-and-drop landing page builder with 50+ pre-built blocks, live preview, and static HTML export for SaaS products.',
    tech: ['Next.js', 'TypeScript', 'Framer Motion', 'dnd-kit'],
    image: projectLandingBuilder,
    link: '#',
  },
  {
    name: 'Design System Kit',
    type: 'frontend',
    description:
      'Production-ready component library with 40+ accessible components, full TypeScript support, and comprehensive Storybook docs.',
    tech: ['React', 'Storybook', 'Radix UI', 'TailwindCSS'],
    image: projectDesignSystem,
    link: '#',
  },
  {
    name: 'Lead Gen Automator',
    type: 'automation',
    description:
      'End-to-end lead generation pipeline that scrapes, scores with AI, enriches with company data, and notifies via Slack.',
    tech: ['n8n', 'OpenAI', 'Google Sheets', 'Slack'],
    image: projectLeadGen,
    link: '#',
  },
  {
    name: 'Client Onboarding Flow',
    type: 'automation',
    description:
      'Automated onboarding that creates Notion workspaces, sends welcome emails, and generates Stripe invoices on contract signature.',
    tech: ['n8n', 'Notion', 'Stripe', 'Gmail'],
    image: projectOnboarding,
    link: '#',
  },
];

const ProjectCard = ({ project }: { project: Project }) => (
  <a
    href={project.link}
    className="group block rounded-xl border border-border bg-card overflow-hidden hover:border-primary/40 transition-all duration-300"
  >
    <div className="aspect-video overflow-hidden bg-secondary">
      <Image
        src={project.image}
        alt={project.name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        placeholder="blur"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
    <div className="p-5">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
          {project.name}
        </h3>
        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-xs font-mono rounded-md border border-border text-muted-foreground bg-secondary"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  </a>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 mb-12">
          {/* Left — Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Selected Work
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              A collection of recent projects spanning frontend development and
              workflow automation. Each one solves a real problem.
            </p>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-foreground text-foreground font-semibold text-sm hover:bg-foreground hover:text-background transition-all duration-300"
            >
              Let's Work Together
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.slice(0, 4).map((p) => (
            <ProjectCard key={p.name} project={p} />
          ))}
        </div>

        {/* Full-width last project */}
        <div className="mt-6">
          <ProjectCard project={projects[4]} />
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
