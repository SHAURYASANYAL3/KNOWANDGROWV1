'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="overflow-hidden rounded-wobbly border border-border bg-white/95 shadow-paper">
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : index)}
              className="flex w-full items-center justify-between gap-4 p-6 text-left text-foreground"
              aria-expanded={open}
            >
              <span className="text-base font-semibold">{item.question}</span>
              <ChevronDown className={`h-5 w-5 transition-transform ${open ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            <div className={`transition-[max-height] duration-300 ease-out overflow-hidden ${open ? 'max-h-96' : 'max-h-0'}`}>
              <p className="px-6 pb-6 text-sm leading-7 text-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
