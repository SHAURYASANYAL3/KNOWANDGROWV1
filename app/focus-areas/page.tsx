import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import FocusCard from '../../components/FocusCard';
import ScrollReveal from '../../components/ui/ScrollReveal';
import WobblyCard from '../../components/ui/WobblyCard';
import { focusAreas } from '../../lib/content';

export default function FocusAreasPage() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-marker-yellow">
      <Header />
      
      <section className="bg-lined-paper py-24 sm:py-32 border-b-2 border-dashed border-ink/20">
        <div className="container max-w-4xl text-center space-y-8">
          <SectionHeading 
            eyebrow="Focus areas" 
            title="Our core programs." 
            description="Every area is designed to feel accessible, empowering, and anchored in community learning rather than fear." 
            center
            highlightColor="green"
          />
        </div>
      </section>

      <section className="container py-24 bg-graph-paper">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {focusAreas.map((area, idx) => (
            <ScrollReveal key={area.title} direction="up" delay={idx % 3 + 1} className="h-full">
              <FocusCard {...area} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-24 bg-paper relative overflow-hidden">
        <div className="container">
          <WobblyCard variant="default" className="p-10 lg:p-16 border-4 border-ink shadow-[12px_12px_0px_0px_var(--ink-charcoal)] grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <ScrollReveal direction="left" className="space-y-8">
              <p className="font-accent text-3xl text-ink-red rotate-[-2deg]">Our commitment</p>
              <h2 className="text-5xl sm:text-6xl font-heading leading-[1.1] text-ink">
                Programs built for <span className="highlight-yellow">trust</span>, not theatrics.
              </h2>
              <p className="text-2xl font-body leading-relaxed text-ink/80 max-w-xl">
                We aim for clarity and calm, with materials that guide young people through real decisions instead of dramatizing risk or using shock tactics.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={2}>
              <div className="bg-ink rounded-wobbly-2 p-10 text-paper rotate-[2deg]">
                <p className="font-accent text-4xl text-marker-yellow mb-6">Why it works</p>
                <ul className="space-y-6 text-xl font-body leading-relaxed text-paper/90">
                  <li className="flex gap-4">
                    <span className="font-accent text-3xl text-marker-pink">-</span>
                    Clear conversation prompts for mentors.
                  </li>
                  <li className="flex gap-4">
                    <span className="font-accent text-3xl text-marker-pink">-</span>
                    Flexible modules for schools or clubs.
                  </li>
                  <li className="flex gap-4">
                    <span className="font-accent text-3xl text-marker-pink">-</span>
                    Practical follow-ups to reinforce learning.
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </WobblyCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}
