'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/SketchButton';

const pages = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Focus Areas', href: '/focus-areas' },
  { label: 'Volunteer', href: '/volunteer' },
  { label: 'Contact', href: '/contact' }
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-sm border-b-2 border-ink shadow-sketch py-3' : 'bg-transparent py-6'
        }`}
      >
        {/* Torn paper top edge if not scrolled */}
        {!scrolled && (
          <div className="absolute top-0 left-0 w-full h-4 overflow-hidden pointer-events-none opacity-20">
            <svg viewBox="0 0 1200 20" preserveAspectRatio="none" className="w-full h-full fill-ink">
              <path d="M0,0 L1200,0 L1200,10 C1150,20 1100,5 1050,15 C1000,5 950,20 900,10 C850,5 800,15 750,5 C700,20 650,10 600,15 C550,5 500,20 450,10 C400,5 350,15 300,5 C250,20 200,10 150,15 C100,5 50,20 0,10 Z" />
            </svg>
          </div>
        )}
        
        <div className="container flex items-center justify-between gap-5">
          <Link href="/" className="flex items-center gap-3 font-heading text-2xl font-bold text-ink hover:-rotate-2 transition-transform">
            <span className="flex h-12 w-12 items-center justify-center rounded-wobbly-1 border-2 border-ink bg-marker-yellow text-3xl shadow-sketch">
              K
            </span>
            <span className="mt-2">KNOW & GROW</span>
          </Link>

          <nav className="hidden items-center gap-6 lg:flex font-body text-xl">
            {pages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className={`relative px-2 py-1 transition-transform hover:-translate-y-0.5 hover:rotate-1 ${
                  pathname === page.href ? 'text-ink font-bold' : 'text-ink-faded hover:text-ink'
                }`}
              >
                {page.label}
                {pathname === page.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-marker-pink/50 rounded-full -z-10 blur-[1px]"></span>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/emergency-help" variant="red" size="sm" className="hidden lg:inline-flex">
              Emergency
            </Button>
            <Button href="/resources" variant="primary" size="sm" className="hidden lg:inline-flex">
              Resources
            </Button>
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-wobbly-2 border-2 border-ink bg-white text-ink shadow-sketch lg:hidden transition hover:bg-paper"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu - styled like a clipboard overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -20, rotate: -2 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-ink/20 backdrop-blur-sm p-4 pt-24 lg:hidden overflow-y-auto"
          >
            <div className="bg-paper border-2 border-ink rounded-wobbly-1 p-8 shadow-[8px_8px_0px_0px_var(--ink-charcoal)] relative max-w-sm mx-auto">
              {/* Binder clip decorative element */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-8 bg-ink rounded-t-lg"></div>
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-6 border-4 border-ink rounded-full"></div>
              
              <div className="flex flex-col gap-6 mt-4 font-heading text-3xl">
                {pages.map((page, i) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-ink py-2 border-b-2 border-dashed border-ink/20"
                  >
                    {page.label}
                  </Link>
                ))}
                <Link
                  href="/resources"
                  onClick={() => setMenuOpen(false)}
                  className="block text-ink py-2 border-b-2 border-dashed border-ink/20"
                >
                  Resources
                </Link>
                <div className="pt-4 flex flex-col gap-4 font-body">
                  <Button href="/emergency-help" variant="red" className="w-full justify-center">
                    Emergency Help
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
