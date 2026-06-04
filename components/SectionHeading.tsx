import ScrollReveal from './ui/ScrollReveal';
import ScribbleUnderline from './ui/ScribbleUnderline';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
  highlightColor?: 'yellow' | 'pink' | 'green' | 'blue';
}

export default function SectionHeading({ eyebrow, title, description, center = false, highlightColor = 'yellow' }: SectionHeadingProps) {
  const markerColors = {
    yellow: 'stroke-marker-yellow',
    pink: 'stroke-marker-pink',
    green: 'stroke-marker-green',
    blue: 'stroke-marker-blue'
  };

  return (
    <ScrollReveal direction="up" className={`space-y-6 ${center ? 'text-center flex flex-col items-center' : ''}`}>
      <div className="inline-block relative">
        <p className="font-accent text-3xl md:text-4xl text-ink-navy rotate-[-3deg] inline-block px-4 py-1">
          {eyebrow}
        </p>
        <div className="absolute inset-0 border-2 border-ink rounded-wobbly-2 -z-10" />
      </div>
      
      <div className="relative inline-block">
        <h2 className="text-4xl font-heading leading-tight text-ink sm:text-5xl md:text-6xl text-balance relative z-10">
          {title}
        </h2>
        <ScribbleUnderline color={markerColors[highlightColor]} className="-bottom-3" />
      </div>
      
      <p className={`text-xl font-body leading-relaxed text-ink-faded font-medium ${center ? 'max-w-2xl text-center' : 'max-w-xl'} mt-4`}>
        {description}
      </p>
    </ScrollReveal>
  );
}
