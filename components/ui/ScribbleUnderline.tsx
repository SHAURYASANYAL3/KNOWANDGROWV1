'use client';

interface ScribbleUnderlineProps {
  color?: string; // e.g. stroke-marker-yellow or stroke-ink-red
  className?: string;
}

export default function ScribbleUnderline({ color = 'stroke-marker-yellow', className = '' }: ScribbleUnderlineProps) {
  return (
    <div className={`absolute -bottom-2 left-0 w-full h-4 pointer-events-none svg-draw ${className}`}>
      <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full overflow-visible">
        <path 
          d="M2,15 Q30,5 50,15 T98,15" 
          fill="none" 
          strokeWidth="6" 
          strokeLinecap="round" 
          className={color}
          style={{ opacity: 0.8 }}
        />
        <path 
          d="M5,18 Q40,10 60,18 T95,18" 
          fill="none" 
          strokeWidth="4" 
          strokeLinecap="round" 
          className={color}
          style={{ opacity: 0.6 }}
        />
      </svg>
    </div>
  );
}
