import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import FocusCard from '../../components/FocusCard';
import { focusAreas } from '../../lib/content';

export default function FocusAreasPage() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <Header />
      <section className="section-bg py-20 sm:py-24">
        <div className="container space-y-8">
          <SectionHeading eyebrow="Focus areas" title="Our core programs and how they support youth." description="Every area is designed to feel accessible, empowering, and anchored in community learning." />
          <p className="max-w-3xl text-sm leading-7 text-muted">We combine education, compassionate communication, and practical skills to help young people make confident choices.</p>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {focusAreas.map((area) => (
            <FocusCard key={area.title} {...area} />
          ))}
        </div>
      </section>

      <section className="bg-white/95 py-16">
        <div className="container grid gap-10 rounded-[2.5rem] border border-border/10 bg-white/95 p-10 shadow-soft lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-mint">Our commitment</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">Programs built for trust, not theatrics.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted">We aim for clarity and calm, with materials that guide young people through real decisions instead of dramatizing risk.</p>
          </div>
          <div className="space-y-4 rounded-[2rem] bg-slate-900/95 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-muted">Why it works</p>
            <ul className="space-y-3 text-sm leading-7 text-muted">
              <li>Clear conversation prompts for young people and mentors.</li>
              <li>Flexible modules that can suit schools, clubs, or online groups.</li>
              <li>Practical follow-ups to reinforce learning and care.</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


