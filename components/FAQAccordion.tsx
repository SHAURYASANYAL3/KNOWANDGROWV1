'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setIndex] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div 
            key={item.question} 
            className="border-b-2 border-dashed border-ink/30 pb-4"
          >
            <button
              type="button"
              onClick={() => setIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between text-left outline-none group py-2"
              aria-expanded={isOpen}
            >
              <span className={`text-2xl font-heading transition-colors ${isOpen ? 'text-ink-navy highlight-yellow' : 'text-ink group-hover:text-ink-faded'}`}>
                Q: {item.question}
              </span>
              <span className="font-accent text-3xl text-ink">
                {isOpen ? '-' : '+'}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-2 pb-4 flex gap-4">
                    <span className="font-heading text-2xl text-marker-pink">A:</span>
                    <p className="text-xl font-body leading-relaxed text-ink/80 font-medium">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
