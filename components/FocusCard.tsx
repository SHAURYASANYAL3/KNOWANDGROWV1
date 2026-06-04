import Link from 'next/link';

interface FocusCardProps {
  title: string;
  description: string;
  icon: string;
  color?: string;
  href: string;
}

export default function FocusCard({ title, description, icon, href }: FocusCardProps) {
  return (
    <Link href={href} className="block h-full group outline-none focus-visible:ring-2 focus-visible:ring-ink">
      <div className="card bg-paper p-8 flex flex-col h-full border-drawn shadow-sketch group-hover:shadow-sketch-hover transition-all duration-300 relative z-10 hover:z-20 group-hover:-translate-y-1">
        
        {/* Hand-drawn scribble accent */}
        <div className="absolute top-4 right-4 w-12 h-12 opacity-20 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full stroke-ink fill-none" strokeWidth="4" strokeLinecap="round">
            <path d="M10,90 Q50,10 90,90 Q10,50 90,10" />
          </svg>
        </div>

        <div className="text-5xl mb-6 font-accent">
          {icon}
        </div>
        
        <h3 className="text-3xl font-heading text-ink mb-4 group-hover:text-ink-navy transition-colors">
          {title}
        </h3>
        
        <p className="text-xl font-body leading-relaxed text-ink-faded mb-8 flex-grow font-medium">
          {description}
        </p>
        
        <div className="mt-auto font-heading text-xl text-ink underline decoration-wavy decoration-ink/30 group-hover:decoration-ink-navy">
          Learn more →
        </div>
      </div>
    </Link>
  );
}
