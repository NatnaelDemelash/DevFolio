import { CheckCircle, MapPin } from "lucide-react";
const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Intro Card — spans 2 cols */}
          <div className="md:col-span-2 rounded-2xl bg-card border border-border p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              <span className="text-primary">Frontend engineer</span> with a
              love for clean UI and fast apps
            </h2>
          </div>
          {/* Location Card */}
          <div className="rounded-2xl bg-card border border-border p-6 flex flex-col items-start justify-center gap-2">
            <p className="text-xs text-muted-foreground uppercase tracking-wider font-mono">
              Based In
            </p>
            <p className="text-xl font-bold text-foreground">
              Addis Ababa, Ethiopia
            </p>
            <div className="flex items-center gap-1.5 mt-2">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                Open to remote work
              </span>
            </div>
          </div>
          {/* Avatar Card */}
          <div className="rounded-2xl bg-card border border-border p-6 flex items-center justify-center">
            <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center">
              <span className="text-5xl text-muted-foreground/40 font-bold font-mono">
                ND
              </span>
            </div>
          </div>
          {/* Verified / Available Badge Card */}
          <div className="rounded-2xl bg-card border border-border p-6 flex flex-col items-center justify-center text-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <CheckCircle className="w-8 h-8 text-primary" />
              <div className="w-3 h-3 rounded-full bg-primary/60" />
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
            <p className="text-sm font-semibold text-foreground">
              Available for Projects
            </p>
          </div>
          {/* Code Snippet Card */}
          <div className="rounded-2xl bg-card border border-border p-6 flex flex-col gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
            </div>
            <pre className="text-xs font-mono text-muted-foreground leading-relaxed overflow-hidden">
              {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Hi, I'm Nati</title>
</head>
<body>`}
            </pre>
          </div>
          {/* What I Do Card */}
          <div className="md:col-span-2 rounded-2xl bg-card border border-border p-8 flex flex-col gap-3">
            <span className="inline-flex self-start items-center px-3 py-1 rounded-full border border-border text-xs font-mono text-muted-foreground">
              What I Do
            </span>
            <p className="text-xl md:text-2xl font-bold text-foreground leading-snug">
              Focused on fast builds, clean code, and smart design
            </p>
          </div>
          {/* Exploring Card */}
          <div className="rounded-2xl bg-card border border-border p-8 flex flex-col gap-2 justify-center">
            <p className="text-lg text-muted-foreground">Exploring</p>
            <p className="text-xl font-bold text-foreground">
              n8n & Automation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
