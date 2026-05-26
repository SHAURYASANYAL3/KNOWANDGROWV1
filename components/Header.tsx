'use client';

import { useState } from 'react';
import Link from 'next/link';
// framer-motion removed for simpler static header
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
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-950/95 backdrop-blur-xl">
      <div className="container flex items-center justify-between gap-6 py-5">
        <Link href="/" className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.4em] text-slate-100">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-3xl bg-gradient-to-br from-gold/20 to-mint/20 text-2xl shadow-glow">K</span>
          KNOW & GROW
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {pages.map((page) => (
            <Link key={page.href} href={page.href} className="text-sm text-slate-200 transition hover:text-white">
              {page.label}
            </Link>
          ))}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLearnOpen((value) => !value)}
              className="inline-flex items-center gap-2 text-sm text-slate-200 transition hover:text-white"
              aria-expanded={learnOpen}
            >
              Learn <ChevronDown className="h-4 w-4" />
            </button>
            <AnimatePresence>
              {learnOpen ? (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-3 w-56 rounded-3xl border border-slate-700 bg-slate-950/95 p-4 shadow-soft backdrop-blur-xl"
                >
                  <div className="space-y-2">
                    {learnItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setLearnOpen(false)}
                        className="block rounded-2xl px-4 py-3 text-sm text-slate-100 transition hover:bg-white/5"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/emergency-help" className="hidden rounded-full border border-white/10 bg-slate-900/90 px-4 py-2 text-xs uppercase tracking-[0.25em] text-slate-200 transition hover:bg-slate-800 lg:inline-flex">
            Emergency
          </Link>
          <Link href="/contact" className="hidden rounded-full bg-gold px-5 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-brand-950 transition hover:brightness-110 lg:inline-flex">
            Connect
          </Link>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-slate-900/90 text-slate-100 lg:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 lg:hidden"
          >
            <div className="container space-y-4 px-0 py-6">
              {pages.map((page) => (
                <Link key={page.href} href={page.href} className="block rounded-3xl px-5 py-3 text-sm text-slate-200 transition hover:bg-white/5">
                  {page.label}
                </Link>
              ))}
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-400">Learn</p>
                <div className="space-y-2">
                  {learnItems.map((item) => (
                    <Link key={item.href} href={item.href} className="block rounded-2xl px-4 py-3 text-sm text-slate-100 transition hover:bg-white/5">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
