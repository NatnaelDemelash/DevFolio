"use client";

import { ArrowUpRight, Sparkles, Zap } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-24 sm:pt-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="flex min-h-[88vh] flex-col items-center justify-center text-center">
          {/* Small avatar */}
          <div className="relative">
            <div className="h-40 w-40 rounded-3xl border border-border bg-card/70 shadow-sm backdrop-blur flex items-center justify-center">
              <span className="text-4xl">👋</span>
            </div>
            <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-background" />
          </div>

          {/* Badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Available for freelance • Frontend + Automation
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hi, I’m Natnael.
          </h1>

          <p className="mt-2 text-2xl font-semibold tracking-tight text-foreground/80 sm:text-3xl">
            I build clean interfaces—
            <span className="relative inline-block">
              <span className="relative z-10">
                and automation that saves time
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-2 rounded-full bg-primary/15" />
            </span>
            .
          </p>

          {/* Supporting copy */}
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I help teams ship premium Next.js frontends and n8n workflows that
            remove repetitive work. Fast, polished, and easy to maintain.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
            >
              See my work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#connect"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground shadow-sm backdrop-blur transition hover:bg-card"
            >
              Let’s talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Attention grab: proof chips */}
          <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card/70 p-4 shadow-sm backdrop-blur">
              <p className="text-xs text-muted-foreground">What I deliver</p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                UI that feels premium
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/70 p-4 shadow-sm backdrop-blur">
              <p className="text-xs text-muted-foreground">Automation</p>
              <p className="mt-1 text-sm font-semibold text-foreground">
                n8n + Slack + Jira
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-card/70 p-4 shadow-sm backdrop-blur">
              <p className="text-xs text-muted-foreground">Speed</p>
              <p className="mt-1 text-sm font-semibold text-foreground inline-flex items-center gap-2">
                Ship fast
                <span className="inline-flex items-center gap-1 rounded-xl border border-border bg-background/60 px-2 py-1 text-[10px] font-mono text-muted-foreground">
                  <Zap className="h-3 w-3" />
                  weeks, not months
                </span>
              </p>
            </div>
          </div>

          {/* Micro-scroll hint */}
          <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/50" />
            Scroll to see projects
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
