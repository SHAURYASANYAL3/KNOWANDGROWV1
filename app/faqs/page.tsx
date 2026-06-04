import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import FAQAccordion from '../../components/FAQAccordion';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/SketchButton';
import WobblyCard from '../../components/ui/WobblyCard';
import { faqItems } from '../../lib/content';

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-paper text-ink overflow-hidden selection:bg-marker-yellow">
      <Header />
      
      <section className="relative py-24 sm:py-32 bg-lined-paper border-b-4 border-dashed border-ink/20">
        <div className="container max-w-4xl text-center space-y-8 relative z-10">
          <SectionHeading 
            eyebrow="FAQs" 
            title="Common questions." 
            description="If you do not see your question here, please contact us and we will respond with clarity and care. These answers are written to help you understand how we work and what to expect." 
            center
            highlightColor="yellow"
          />
        </div>
      </section>

      <section className="container py-24 lg:py-32 bg-graph-paper">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal direction="up" className="mb-12 bg-white p-8 lg:p-12 border-2 border-ink shadow-[8px_8px_0px_0px_var(--ink-charcoal)] rounded-wobbly-1">
            <FAQAccordion items={faqItems} />
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={2}>
            <WobblyCard variant="sticky-yellow" tape className="p-10 text-center space-y-6 mt-16 rotate-[1deg]">
              <h3 className="text-4xl font-heading text-ink">Still have questions?</h3>
              <p className="text-xl font-body text-ink/80 max-w-md mx-auto">
                Our team is always happy to provide more information about our programs or volunteering opportunities.
              </p>
              <Button href="/contact" variant="primary">
                Contact us directly
              </Button>
            </WobblyCard>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
