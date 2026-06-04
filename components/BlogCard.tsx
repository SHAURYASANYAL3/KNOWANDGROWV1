import Link from 'next/link';
import WobblyCard from './ui/WobblyCard';

interface BlogCardProps {
  title: string;
  summary: string;
  category: string;
  readTime: string;
  color?: string;
}

export default function BlogCard({ title, summary, category, readTime }: BlogCardProps) {
  return (
    <WobblyCard variant="polaroid" tape className="flex flex-col h-full z-10 hover:z-20 cursor-pointer group">
      {/* Photo Placeholder Area - styled like a taped photo */}
      <div className="w-full h-48 bg-paper-lined border-2 border-ink rounded-sm mb-4 relative overflow-hidden group-hover:bg-paper-graph transition-colors">
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-ink fill-none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="10" y="20" width="80" height="60" />
            <circle cx="35" cy="45" r="8" />
            <path d="M10,80 L40,40 L70,70 L90,50 L90,80" />
          </svg>
        </div>
      </div>
      
      <div className="flex flex-col flex-grow px-2">
        <div className="flex items-center justify-between mb-2">
          <span className="font-accent text-xl bg-marker-yellow/50 px-2 rotate-[-2deg]">
            {category}
          </span>
          <span className="font-body text-ink-faded text-sm">
            {readTime}
          </span>
        </div>
        
        <h3 className="text-3xl font-heading text-ink mb-3 group-hover:text-ink-navy transition-colors">
          {title}
        </h3>
        
        <p className="text-lg font-body leading-relaxed text-ink/80 flex-grow">
          {summary}
        </p>
      </div>
    </WobblyCard>
  );
}
