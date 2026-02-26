"use client";

import Profile from "@/assets/profile.png";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "Experience", href: "#experience", id: "experience" },
] as const;

const AVATAR_SRC = Profile;

type SectionId = (typeof NAV_ITEMS)[number]["id"];

function cx(...classes: Array<string | false | undefined | null>) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<SectionId>("hero");
  const lastActive = useRef<SectionId>("hero");

  const sectionIds = useMemo(() => NAV_ITEMS.map((x) => x.id), []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Active section highlight via IntersectionObserver
  useEffect(() => {
    const els = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the most visible intersecting entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );

        const top = visible[0];
        if (!top?.target?.id) return;

        const next = top.target.id as SectionId;
        if (next !== lastActive.current) {
          lastActive.current = next;
          setActive(next);
        }
      },
      {
        root: null,
        // helps highlight when section is in the top-ish area
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.1, 0.2, 0.35, 0.5],
      },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sectionIds]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const pillBase = cx(
    "rounded-full border border-border/60 transition-all duration-300",
    scrolled
      ? "bg-card/90 backdrop-blur-xl shadow-lg"
      : "bg-card/70 backdrop-blur-md",
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop */}
      <div className="hidden sm:flex justify-center pt-4 px-4">
        <div className={cx("flex items-center gap-2 px-2 py-2", pillBase)}>
          {/* Avatar */}
          <a
            href="#hero"
            className="relative h-9 w-9 overflow-hidden rounded-full bg-muted shrink-0"
            aria-label="Go to top"
          >
            <Image
              src={AVATAR_SRC}
              alt="Natnael"
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </a>

          {/* Links */}
          <div className="relative flex items-center gap-1 px-1">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={cx(
                    "relative text-sm px-3 py-1.5 rounded-full transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                    "hover:bg-secondary/60",
                  )}
                >
                  {isActive && (
                    <span className="absolute inset-0 -z-10 rounded-full bg-secondary/70" />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Contact button */}
          <a
            href="#connect"
            className="group inline-flex items-center gap-2 rounded-full border border-border/80 px-5 py-1.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary/60"
          >
            Contact
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>

      {/* Mobile pill */}
      <div className="sm:hidden fixed top-4 right-4">
        <div className={cx("flex items-center gap-2 px-2 py-2", pillBase)}>
          <div className="relative h-8 w-8 overflow-hidden rounded-full bg-muted shrink-0">
            <Image
              src={Profile}
              alt="Natnael"
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>

          <span className="text-sm text-muted-foreground whitespace-nowrap">
            Available
          </span>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse shrink-0" />

          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-4 h-4 text-primary-foreground" />
            ) : (
              <Menu className="w-4 h-4 text-primary-foreground" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile overlay + drawer */}
      <div
        className={cx(
          "sm:hidden fixed inset-0 z-40 transition",
          mobileOpen ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        {/* Overlay */}
        <button
          onClick={() => setMobileOpen(false)}
          className={cx(
            "absolute inset-0 bg-background/60 backdrop-blur-sm transition-opacity",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
          aria-label="Close menu overlay"
        />

        {/* Drawer */}
        <div
          className={cx(
            "absolute right-4 top-20 w-[calc(100%-2rem)] rounded-3xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-xl p-3 transition-all duration-300",
            mobileOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2",
          )}
        >
          <div className="px-2 py-2">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Navigate
            </p>
          </div>

          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cx(
                    "flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition",
                    isActive
                      ? "bg-secondary/70 text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60",
                  )}
                >
                  {item.label}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              );
            })}

            <a
              href="#connect"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              Contact
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
