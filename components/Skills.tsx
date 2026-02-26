"use client";

import {
  CheckSquare,
  Code2,
  GitBranch,
  Globe,
  MessageSquare,
  Package,
  Workflow,
  Zap,
} from "lucide-react";

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
      {
        name: "Node.js",
        desc: "JavaScript runtime for servers",
        icon: Code2,
      },
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
      {
        name: "n8n",
        desc: "Workflow automation platform",
        icon: Workflow,
      },
      {
        name: "API Integrations",
        desc: "Connect and automate services",
        icon: Zap,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-8 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-16">
          What I Use
        </h2>

        <div className="space-y-12">
          {skillCategories.map((category) => (
            <div key={category.label}>
              {/* Category Label */}
              <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-6">
                {category.label}
              </h3>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {category.tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-start gap-4 p-6 rounded-2xl bg-[#222] border border-gray-800 hover:border-gray-700 hover:bg-[#252525] transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <tool.icon className="w-6 h-6 text-white/80" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-base mb-1">
                        {tool.name}
                      </p>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
