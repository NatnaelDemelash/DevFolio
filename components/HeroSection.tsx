import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-[90vh] flex items-center px-6 pt-24">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left — Text */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card/50 mb-8">
            <span className="text-primary text-sm">✦</span>
            <span className="text-sm text-muted-foreground font-medium">
              Hello!
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-6">
            I'm John Doe,
            <br />a{" "}
            <span className="relative inline-block">
              <span className="relative z-10">frontend engineer.</span>
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C30 2 60 4 100 6C140 8 170 3 198 7"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="opacity-60"
                />
                <path
                  d="M5 10C40 5 80 7 120 5C160 3 185 8 195 6"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="opacity-40"
                />
              </svg>
            </span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-md mb-8 leading-relaxed">
            I'm a freelance frontend engineer & n8n automation specialist. I'm
            very passionate about the work that I do.
          </p>

          <a
            href="#projects"
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border-2 border-foreground text-foreground font-semibold text-sm hover:bg-foreground hover:text-background transition-all duration-300"
          >
            See My Works
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Right — Photo card (Theo Lansdale style) */}
        <div className="flex justify-center md:justify-end">
          <div className="relative">
            {/* Rotating badge */}
            <div className="absolute -top-6 -right-6 z-10 w-20 h-20">
              <div className="relative w-full h-full animate-spin-slow">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <defs>
                    <path
                      id="circlePath"
                      d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="fill-muted-foreground text-[11px] font-mono uppercase tracking-[0.3em]">
                    <textPath href="#circlePath">
                      ✦ Available ✦ For Freelance ✦
                    </textPath>
                  </text>
                </svg>
              </div>
              <ArrowUpRight className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 text-foreground" />
            </div>

            {/* Photo card */}
            <div className="w-64 md:w-72 rounded-xl border-2 border-border bg-card p-3 shadow-xl">
              <div className="aspect-[3/4] rounded-lg bg-secondary overflow-hidden mb-3">
                {/* Placeholder — replace with your photo */}
                <div className="w-full h-full bg-gradient-to-br from-muted-foreground/20 to-muted-foreground/5 flex items-center justify-center">
                  <span className="text-6xl text-muted-foreground/30 font-bold font-mono">
                    ND
                  </span>
                </div>
              </div>
              <div className="flex items-end justify-between px-1 pb-1">
                <div>
                  <p className="text-sm font-bold text-foreground font-mono">
                    JOHN DOE
                  </p>
                  <p className="text-[11px] text-muted-foreground font-mono">
                    ENGINEER + AUTOMATION
                  </p>
                </div>
                <span className="text-xs text-muted-foreground font-mono">
                  2026
                </span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-4 -left-8 text-muted-foreground/30">
              <svg width="48" height="24" viewBox="0 0 48 24" fill="none">
                <path
                  d="M2 12C8 6 14 6 20 12C26 18 32 18 38 12C44 6 48 6 48 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M2 18C8 12 14 12 20 18C26 24 32 24 38 18C44 12 48 12 48 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
