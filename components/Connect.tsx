'use client';

import { useState } from 'react';
import { Github, Linkedin, Send } from 'lucide-react';

const ConnectSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up to backend
    console.log('Form submitted:', form);
  };

  return (
    <section id="connect" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* CTA heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Get In Touch{' '}
            <span className="inline-block w-8 h-0.5 bg-muted-foreground align-middle ml-3" />
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-foreground mt-6">
            Ready to take your{' '}
            <span className="text-primary">digital presence</span> to the next
            level?
          </p>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Let's build something meaningful together. Whether it's a sleek
            front-end, powerful automation, or a custom tool, I can help bring
            your ideas to life.
          </p>
        </div>

        {/* Contact form card */}
        <div className="max-w-3xl mx-auto rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-xs font-semibold text-foreground tracking-wider uppercase">
              ✦ Contact
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-4">
              Got a project in mind?
              <br />
              Let's get in touch.
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name *"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border pb-2 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email address *"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border pb-2 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">
                Message
              </label>
              <textarea
                placeholder="Tell me about your project *"
                required
                maxLength={1000}
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border-b border-border pb-2 text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary transition-colors resize-y"
              />
            </div>
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Let's get in touch
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Social links */}
          <div className="flex justify-center gap-4 mt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center font-mono text-xs text-muted-foreground">
          {/* <p>
            Built with <span className="text-primary">React</span> +{' '}
            <span className="text-primary">TailwindCSS</span>
          </p> */}
          <p className="mt-1">© 2026 — all rights reserved</p>
        </footer>
      </div>
    </section>
  );
};

export default ConnectSection;
