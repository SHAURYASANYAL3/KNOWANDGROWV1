'use client';

import WobblyCard from './ui/WobblyCard';

interface StatCardProps {
  label: string;
  value: string;
  numericValue: number;
  suffix?: string;
  detail: string;
  icon?: string;
  stickyColor?: 'yellow' | 'pink' | 'blue' | 'green';
}

export default function StatCard({ label, value, suffix = '', detail, icon, stickyColor = 'yellow' }: StatCardProps) {
  return (
    <WobblyCard variant={`sticky-${stickyColor}` as any} tape className="flex flex-col h-full z-10 hover:z-20">
      {icon && (
        <div className="text-4xl mb-4 font-accent">
          {icon}
        </div>
      )}
      <div className="text-5xl font-heading text-ink mb-2">
        {value}{suffix}
      </div>
      <h3 className="text-xl font-heading text-ink mb-4 underline decoration-wavy decoration-ink/20">
        {label}
      </h3>
      <p className="text-lg font-body leading-relaxed text-ink/80 mt-auto">
        {detail}
      </p>
    </WobblyCard>
  );
}
