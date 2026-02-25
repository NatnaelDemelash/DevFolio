import { ArrowUpRight } from 'lucide-react';

const tools = [
  'React',
  'Next.js',
  'TypeScript',
  'TailwindCSS',
  'Framer Motion',
  'n8n',
  'Slack',
  'API Integrations',
  'Webhooks',
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16">
          {/* Left — Heading */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What I Work With
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              My toolkit spans modern frontend frameworks and workflow
              automation platforms. I love building elegant UIs and connecting
              systems together.
            </p>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-foreground text-foreground font-semibold text-sm hover:bg-foreground hover:text-background transition-all duration-300"
            >
              View Projects
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Right — Tools as pills */}
          <div>
            <p className="text-muted-foreground text-sm mb-6">
              Tools that power my every day:
            </p>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-5 py-2.5 rounded-full border border-border bg-card text-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: 'Projects shipped', value: '30+' },
            { label: 'Workflows built', value: '50+' },
            { label: 'Happy clients', value: '20+' },
            { label: 'Cups of coffee', value: '∞' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center rounded-xl border border-border bg-card p-6"
            >
              <p className="text-2xl font-bold text-primary font-mono">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
