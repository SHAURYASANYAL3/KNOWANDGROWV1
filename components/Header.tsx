'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const pages = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Focus Areas', href: '/focus-areas' },
  { label: 'Resources', href: '/resources' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact', href: '/contact' }
];

const learnItems = [
  { label: 'Mental Health', href: '/mental-health' },
  { label: 'Digital Safety', href: '/digital-safety' },
  { label: 'Drug Awareness', href: '/drug-awareness' },
  { label: 'Emergency Help', href: '/emergency-help' }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/15 bg-paper/95 backdrop-blur-md">
      <div className="container flex items-center justify-between gap-5 py-5">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-foreground">
          <span className="flex h-10 w-10 items-center justify-center rounded-[1.6rem] border border-border bg-accent/10 text-lg font-bold text-accent shadow-paper">
            K
          </span>
          KNOW & GROW
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {pages.map((page) => (
            <Link key={page.href} href={page.href} className="text-sm text-foreground transition hover:text-accent">
              {page.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLearnOpen((current) => !current)}
              className="inline-flex items-center gap-2 text-sm text-foreground transition hover:text-accent"
              aria-expanded={learnOpen}
            >
              Learn <ChevronDown className="h-4 w-4" />
            </button>
            {learnOpen ? (
              <div className="absolute right-0 z-10 mt-3 w-56 rounded-wobbly border border-border bg-white/95 p-4 shadow-paper">
                <div className="space-y-2">
                  {learnItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setLearnOpen(false)}
                      className="block rounded-full px-4 py-3 text-sm text-foreground transition hover:bg-paperHighlight"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/emergency-help" className="hidden rounded-full border border-border bg-white/80 px-4 py-2 text-xs uppercase tracking-[0.25em] text-foreground transition hover:bg-paperHighlight lg:inline-flex">
            Emergency
          </Link>
          <Link href="/contact" className="hidden rounded-full bg-accent px-5 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-white transition hover:brightness-110 lg:inline-flex">
            Connect
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-border bg-white/90 text-foreground lg:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div className="border-t border-border/10 bg-paper/95 lg:hidden">
          <div className="container space-y-4 px-0 py-6">
            {pages.map((page) => (
              <Link key={page.href} href={page.href} className="block rounded-wobbly border border-border/10 bg-white/95 px-5 py-3 text-sm text-foreground transition hover:bg-paperHighlight">
                {page.label}
              </Link>
            ))}
            <div className="rounded-wobbly border border-border/10 bg-white/95 p-4">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted">Learn</p>
              <div className="space-y-2">
                {learnItems.map((item) => (
                  <Link key={item.href} href={item.href} className="block rounded-full px-4 py-3 text-sm text-foreground transition hover:bg-paperHighlight">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
