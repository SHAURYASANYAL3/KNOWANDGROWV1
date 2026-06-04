import WobblyCard from './ui/WobblyCard';

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  initial: string;
  color?: string; // used to pick sticky color
}

export default function TestimonialCard({ name, role, quote, color = 'pink' }: TestimonialCardProps) {
  // Map our old colors to sticky colors
  const colorMap: Record<string, string> = {
    sage: 'sticky-green',
    navy: 'sticky-blue',
    accent: 'sticky-pink',
    gold: 'sticky-yellow',
    peach: 'sticky-pink'
  };

  const stickyVariant = colorMap[color] || 'sticky-yellow';

  return (
    <WobblyCard variant={stickyVariant as any} tape className="flex flex-col h-full z-10 hover:z-20 mt-6 p-8">
      <div className="font-accent text-3xl sm:text-4xl leading-relaxed text-ink mb-8 mt-2">
        "{quote}"
      </div>
      
      <div className="mt-auto flex flex-col items-end text-right border-t-2 border-dashed border-ink/20 pt-4">
        <p className="font-heading text-2xl text-ink font-bold">{name}</p>
        <p className="font-body text-lg text-ink/70">{role}</p>
      </div>
    </WobblyCard>
  );
}
