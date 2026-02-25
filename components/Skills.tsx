import {
  Code2,
  Palette,
  Globe,
  Layers,
  Wind,
  Workflow,
  PenTool,
  Plug,
  Webhook,
} from 'lucide-react';

const tools = [
  {
    name: 'React',
    desc: 'UI library for building interfaces',
    icon: Globe,
    // color: 'bg-sky-100',
  },
  {
    name: 'TypeScript',
    desc: 'Typed superset of JavaScript',
    icon: Code2,
    // color: 'bg-blue-100',
  },
  {
    name: 'JavaScript',
    desc: 'Programming language of the web',
    icon: Layers,
    // color: 'bg-yellow-100',
  },
  {
    name: 'Next.js',
    desc: 'Full-stack React framework',
    icon: Globe,
    // color: 'bg-neutral-200',
  },
  {
    name: 'TailwindCSS',
    desc: 'Utility-first CSS framework',
    icon: Wind,
    // color: 'bg-cyan-100',
  },
  {
    name: 'Framer Motion',
    desc: 'Animation library for React',
    icon: Palette,
    // color: 'bg-purple-100',
  },
  {
    name: 'n8n',
    desc: 'Workflow automation tool',
    icon: Workflow,
    // color: 'bg-pink-100',
  },
  {
    name: 'API Integrations',
    desc: 'Connect external services',
    icon: Plug,
    // color: 'bg-indigo-100',
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Tech Stack{' '}
          <span className="inline-block w-8 h-0.5 bg-muted-foreground align-middle ml-3" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default animate-fade-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                className={`w-12 h-12 rounded-xl ${tool} flex items-center justify-center shrink-0`}
              >
                <tool.icon className="w-6 h-6 text-foreground/80" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">
                  {tool.name}
                </p>
                <p className="text-xs text-muted-foreground font-mono">
                  {tool.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
