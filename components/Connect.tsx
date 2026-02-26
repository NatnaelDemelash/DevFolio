"use client";

import { ArrowUp, Github, Linkedin, Mail, Sparkles, X } from "lucide-react";

const ConnectSection = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section
      id="connect"
      className="relative overflow-hidden py-24 sm:py-28 px-6"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 right-[-120px] h-[520px] w-[520px] rounded-full bg-muted/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_55%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),transparent_55%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Available for collaborations
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Let’s Connect
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm md:text-base text-muted-foreground">
            Tell me what you’re building. I’ll reply within 24–48 hours.
          </p>
        </div>

        {/* Main grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12">
          {/* Email / CTA (spans wide) */}
          <div className="md:col-span-7">
            <div className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 p-8 shadow-sm backdrop-blur transition hover:shadow-lg">
              <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/15 blur-2xl" />
                <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-muted/40 blur-2xl" />
              </div>

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Let’s Talk
                </p>

                <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <a
                    href="mailto:hello@example.com"
                    className="inline-flex items-center gap-3 text-xl md:text-2xl font-bold text-foreground transition-colors hover:text-primary"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-background/60 shadow-sm">
                      <Mail className="h-5 w-5" />
                    </span>
                    <span className="break-all">hello@example.com</span>
                  </a>

                  <div className="flex items-center gap-2">
                    <a
                      href="mailto:hello@example.com?subject=Hello%Natnael94%20Let%27s%20talk"
                      className="inline-flex items-center justify-center rounded-2xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90"
                    >
                      Email me
                    </a>
                    <button
                      onClick={scrollToTop}
                      className="inline-flex items-center gap-2 rounded-2xl border border-border bg-background/60 px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition hover:bg-background"
                    >
                      Top <ArrowUp className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border bg-background/60 px-4 py-3">
                    <p className="text-xs text-muted-foreground">Preferred</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      Email
                    </p>
                  </div>
                  <div className="rounded-2xl border border-border bg-background/60 px-4 py-3">
                    <p className="text-xs text-muted-foreground">Time zone</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">
                      EAT (UTC+3)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio card */}
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-border bg-card/70 p-8 shadow-sm backdrop-blur">
              <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-muted/40 blur-2xl" />
              <div className="relative flex items-center gap-5">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-background/60 text-3xl shadow-sm">
                  👨‍💻
                </div>
                <div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    I press buttons and interfaces happen.
                  </p>
                </div>
              </div>

              <div className="relative mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-border bg-background/60 px-4 py-3">
                  <p className="text-xs text-muted-foreground">Focus</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    Automation Development
                  </p>
                </div>
                <div className="rounded-2xl border border-border bg-background/60 px-4 py-3">
                  <p className="text-xs text-muted-foreground">Open to</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    Freelance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Link cards row */}
          <div className="md:col-span-12">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Menu */}
              <div className="group rounded-3xl border border-border bg-card/70 p-7 shadow-sm backdrop-blur transition hover:shadow-lg">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Menu
                </p>
                <nav className="mt-4 space-y-2">
                  <a
                    href="#hero"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-background/60 hover:text-primary"
                  >
                    Home
                  </a>
                  <a
                    href="#projects"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-background/60 hover:text-primary"
                  >
                    Works
                  </a>
                  <a
                    href="#experience"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-background/60 hover:text-primary"
                  >
                    About
                  </a>
                </nav>
              </div>

              {/* Follow */}
              <div className="group rounded-3xl border border-border bg-card/70 p-7 shadow-sm backdrop-blur transition hover:shadow-lg">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Follow
                </p>
                <div className="mt-4 grid grid-cols-1 gap-2">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-background hover:text-primary"
                  >
                    <span className="inline-flex items-center gap-2">
                      <X className="h-4 w-4" /> X (Twitter)
                    </span>
                    {/* <span className="text-xs text-muted-foreground">
                      /jordan
                    </span> */}
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-background hover:text-primary"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </span>
                    {/* <span className="text-xs text-muted-foreground">
                      /in/jordan
                    </span> */}
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-2xl border border-border bg-background/60 px-4 py-3 text-sm font-semibold text-foreground shadow-sm transition hover:bg-background hover:text-primary"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Github className="h-4 w-4" /> GitHub
                    </span>
                    {/* <span className="text-xs text-muted-foreground">
                      /jordan
                    </span> */}
                  </a>
                </div>
              </div>

              {/* Explore */}
              <div className="group rounded-3xl border border-border bg-card/70 p-7 shadow-sm backdrop-blur transition hover:shadow-lg">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  Explore
                </p>
                <nav className="mt-4 space-y-2">
                  <a
                    href="#skills"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-background/60 hover:text-primary"
                  >
                    Skills
                  </a>
                  <a
                    href="#projects"
                    className="block rounded-xl px-3 py-2 text-sm font-semibold text-foreground transition hover:bg-background/60 hover:text-primary"
                  >
                    Projects
                  </a>
                </nav>

                <div className="mt-6 rounded-2xl border border-border bg-background/60 p-4">
                  <p className="text-xs text-muted-foreground">Quick note</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">
                    Open to interesting problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="font-mono text-xs text-muted-foreground">
            © 2026 — All rights reserved
          </p>
          <div className="flex items-center gap-2">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card/70 px-4 py-2 text-xs font-semibold text-foreground shadow-sm backdrop-blur transition hover:bg-card"
            >
              <Mail className="h-4 w-4" />
              Say hello
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card/70 px-4 py-2 text-xs font-semibold text-foreground shadow-sm backdrop-blur transition hover:bg-card"
            >
              Back to top <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;
