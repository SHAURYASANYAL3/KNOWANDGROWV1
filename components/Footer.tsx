import Link from 'next/link';

const sections = [
  { title: 'Explore', links: [ { label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Focus Areas', href: '/focus-areas' }, { label: 'Volunteer', href: '/volunteer' } ] },
  { title: 'Support', links: [ { label: 'Resources', href: '/resources' }, { label: 'Emergency Help', href: '/emergency-help' }, { label: 'Contact', href: '/contact' }, { label: 'Privacy', href: '/privacy' } ] }
];

export default function Footer() {
  return (
    <footer className="relative bg-ink text-paper pt-24 pb-12 mt-20">
      {/* Jagged Torn Paper Top Edge */}
      <div className="absolute top-[-2px] left-0 right-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg className="block w-full h-[30px]" viewBox="0 0 1200 30" preserveAspectRatio="none">
          <path d="M0,0 L1200,0 L1200,30 L1150,15 L1100,30 L1050,10 L1000,25 L950,5 L900,30 L850,15 L800,25 L750,5 L700,30 L650,10 L600,25 L550,10 L500,30 L450,15 L400,25 L350,5 L300,30 L250,15 L200,30 L150,10 L100,25 L50,5 L0,30 Z" fill="var(--paper)"></path>
        </svg>
      </div>
      
      <div className="container relative z-10 grid gap-12 lg:grid-cols-[2fr_1fr_1fr]">
        <div className="space-y-6">
          <h2 className="text-4xl font-heading text-white flex items-center gap-3">
            <span className="bg-marker-yellow text-ink px-2 py-1 rounded-sm rotate-[-2deg]">K</span>
            KNOW & GROW
          </h2>
          <p className="max-w-md text-xl font-body leading-relaxed text-paper/80 font-medium">
            Scribbling down ideas for a safer youth journey. Join our movement to build knowledge and share support.
          </p>
          <div className="font-accent text-2xl text-marker-pink rotate-[-2deg] mt-4">
            team.knowandgrow.org@gmail.com
          </div>
        </div>

        {sections.map((section) => (
          <div key={section.title} className="space-y-6">
            <p className="text-2xl font-heading text-marker-yellow underline decoration-wavy decoration-white/30">{section.title}</p>
            <div className="space-y-3 font-body text-xl">
              {section.links.map((link) => (
                <Link key={link.href} href={link.href} className="block text-paper/80 transition hover:text-white hover:translate-x-2">
                  → {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="container relative z-10 mt-16 flex flex-col gap-6 border-t-2 border-dashed border-white/20 pt-8 sm:flex-row sm:items-center sm:justify-between font-body text-lg text-paper/50">
        <p>© 2026 KNOW & GROW. Rooted in knowledge, committed to society.</p>
        <p className="font-accent text-xl">Built with care ♥</p>
      </div>
      
      {/* Sketchy doodles in background */}
      <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 100 100" className="stroke-white fill-none" strokeWidth="2" strokeLinecap="round">
          <path d="M10,50 Q30,10 50,50 T90,50 M30,30 Q50,70 70,30" />
          <circle cx="50" cy="50" r="40" strokeDasharray="5,5" />
        </svg>
      </div>
    </footer>
  );
}
