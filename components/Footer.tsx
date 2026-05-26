import Link from 'next/link';

const sections = [
  { title: 'Explore', links: [ { label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Focus Areas', href: '/focus-areas' }, { label: 'Volunteer', href: '/volunteer' } ] },
  { title: 'Support', links: [ { label: 'Resources', href: '/resources' }, { label: 'Emergency Help', href: '/emergency-help' }, { label: 'Contact', href: '/contact' }, { label: 'Privacy', href: '/privacy' } ] }
];

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-border/15 text-foreground">
      <div className="container grid gap-12 py-16 lg:grid-cols-[1.6fr_1fr_1fr]">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.24em] text-accent">KNOW & GROW</p>
          <h2 className="max-w-md text-3xl font-heading leading-tight text-foreground sm:text-4xl">A grounded platform for safer youth journeys.</h2>
          <p className="max-w-md text-sm leading-7 text-muted">We keep personal data minimal, community-focused, and privacy-first across every program.</p>
        </div>

        {sections.map((section) => (
          <div key={section.title} className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-muted">{section.title}</p>
            <div className="space-y-3">
              {section.links.map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-foreground transition hover:text-accent">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="container mt-12 flex flex-col gap-4 border-t border-border/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 KNOW & GROW. Rooted in knowledge, committed to society.</p>
        <p>team.knowandgrow.org@gmail.com</p>
      </div>
    </footer>
  );
}
