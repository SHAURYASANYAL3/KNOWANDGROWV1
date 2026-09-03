'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Fuse from 'fuse.js';

// Import our content
import { focusAreas, blogPosts, faqItems, albums } from '../lib/content';

// Prepare a unified search index
const searchData = [
  ...focusAreas.map(item => ({ type: 'Focus Area', title: item.title, description: item.description, link: item.href, icon: item.icon })),
  ...blogPosts.map(item => ({ type: 'Blog Post', title: item.title, description: item.summary, link: '/resources', icon: '📝' })),
  ...faqItems.map(item => ({ type: 'FAQ', title: item.question, description: item.answer, link: '/faqs', icon: '❓' })),
  ...albums.map(item => ({ type: 'Gallery', title: item.title, description: item.description, link: `/gallery/${item.slug}`, icon: '📸' }))
];

const fuse = new Fuse(searchData, {
  keys: ['title', 'description', 'type'],
  threshold: 0.4,
  includeMatches: true
});

export default function SearchModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(searchData.slice(0, 5));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim() === '') {
      setResults(searchData.slice(0, 5));
    } else {
      const searchResults = fuse.search(query).map(result => result.item);
      setResults(searchResults.slice(0, 8)); // limit to top 8
    }
  }, [query]);

  // Keyboard shortcut to open (Cmd+K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="inline-flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-wobbly-1 border-2 border-ink bg-white text-ink shadow-sketch transition hover:bg-paper hover:-translate-y-1 hover:rotate-2"
        aria-label="Search"
      >
        <Search className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-start justify-center bg-ink/30 backdrop-blur-sm p-4 pt-[10vh] sm:p-6 sm:pt-[15vh]"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: -20, rotate: -1 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.95, y: -20, rotate: 1 }}
              className="w-full max-w-2xl bg-paper border-4 border-ink shadow-[12px_12px_0px_0px_var(--ink-charcoal)] rounded-wobbly-2 overflow-hidden flex flex-col max-h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative border-b-2 border-dashed border-ink/20 p-4">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-6 w-6 text-ink/50" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search topics, resources, or galleries... (Ctrl+K)"
                  className="w-full bg-transparent border-none outline-none font-heading text-2xl text-ink pl-12 pr-12 placeholder:text-ink/30"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button 
                  onClick={() => setIsOpen(false)}
                  className="absolute right-6 top-1/2 -translate-y-1/2 text-ink/50 hover:text-ink transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="overflow-y-auto p-4 flex-1">
                {results.length > 0 ? (
                  <ul className="space-y-4">
                    {results.map((item, i) => (
                      <li key={i}>
                        <Link 
                          href={item.link} 
                          onClick={() => setIsOpen(false)}
                          className="flex items-start gap-4 p-4 rounded-wobbly-1 hover:bg-white border-2 border-transparent hover:border-ink hover:shadow-sketch transition-all group"
                        >
                          <span className="text-3xl mt-1">{item.icon}</span>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-accent bg-marker-yellow/50 px-2 py-0.5 rounded-full border border-ink/20">
                                {item.type}
                              </span>
                            </div>
                            <h4 className="font-heading text-xl text-ink group-hover:text-ink-navy transition-colors">
                              {item.title}
                            </h4>
                            <p className="font-body text-ink/70 line-clamp-1">{item.description}</p>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="text-center py-12">
                    <p className="font-accent text-3xl text-ink-faded mb-2">Hmm...</p>
                    <p className="font-body text-xl text-ink/70">No results found for "{query}"</p>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
