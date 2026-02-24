'use client';

import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Blog', href: '#blog' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      {/* Desktop nav pill */}
      <div
        className={`hidden sm:flex items-center gap-2 px-2 py-2 rounded-full border border-border/60 transition-all duration-300 ${
          scrolled
            ? 'bg-card/90 backdrop-blur-xl shadow-lg'
            : 'bg-card/70 backdrop-blur-md'
        }`}
      >
        {/* Avatar */}
        <div className="w-9 h-9 rounded-full bg-muted overflow-hidden flex-shrink-0">
          <div className="w-full h-full bg-linear-to-br from-muted-foreground/30 to-muted-foreground/10 flex items-center justify-center text-xs text-muted-foreground font-mono">
            ND
          </div>
        </div>

        {/* Nav Links - Desktop */}
        <div className="flex items-center gap-1 px-2">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full hover:bg-secondary/60"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact Button */}
        <a
          href="#connect"
          className="text-sm text-foreground border border-border/80 rounded-full px-5 py-1.5 hover:bg-secondary/60 transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Mobile nav — "Available for work" pill */}
      <div
        className={`sm:hidden fixed top-4 right-4 flex items-center gap-2 px-2 py-2 rounded-full border border-border/60 transition-all duration-300 ${
          scrolled
            ? 'bg-card/90 backdrop-blur-xl shadow-lg'
            : 'bg-card/70 backdrop-blur-md'
        }`}
      >
        <div className="w-8 h-8 rounded-full bg-muted overflow-hidden flex-shrink-0">
          <div className="w-full h-full bg-gradient-to-br from-muted-foreground/30 to-muted-foreground/10 flex items-center justify-center text-[10px] text-muted-foreground font-mono">
            ND
          </div>
        </div>
        <span className="text-sm text-muted-foreground whitespace-nowrap">
          Available for work
        </span>
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse flex-shrink-0" />
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0"
        >
          {mobileOpen ? (
            <X className="w-4 h-4 text-primary-foreground" />
          ) : (
            <Menu className="w-4 h-4 text-primary-foreground" />
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="sm:hidden fixed top-20 left-4 right-4 bg-card/95 backdrop-blur-xl border border-border/60 rounded-2xl p-4 flex flex-col gap-2 z-40">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2.5 rounded-xl hover:bg-secondary/60"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#connect"
            onClick={() => setMobileOpen(false)}
            className="text-sm text-foreground border border-border/80 rounded-xl px-4 py-2.5 text-center hover:bg-secondary/60 transition-colors mt-1"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
