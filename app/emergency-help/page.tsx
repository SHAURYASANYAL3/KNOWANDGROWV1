import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/SketchButton';
import WobblyCard from '../../components/ui/WobblyCard';

export default function EmergencyHelpPage() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-marker-yellow">
      <Header />
      
      <section className="bg-graph-paper py-24 sm:py-32 border-b-2 border-dashed border-ink/20">
        <div className="container max-w-4xl text-center space-y-8">
          <SectionHeading 
            eyebrow="Emergency help" 
            title="Immediate guidance." 
            description="If you need support now, these trusted resources can help you take the next step safely. You are not alone." 
            center
            highlightColor="yellow"
          />
        </div>
      </section>

      <section className="container py-24 bg-paper">
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            { 
              icon: '🚨', 
              title: 'Safe contact', 
              text: 'If you are in immediate physical danger or a medical emergency, contact your local emergency services right away.',
              color: 'sticky-yellow'
            },
            { 
              icon: '👥', 
              title: 'Trusted adult', 
              text: 'Talk to a parent, guardian, teacher, or counselor who can support you in person. They can help figure out the next steps.',
              color: 'sticky-pink'
            },
            { 
              icon: '📞', 
              title: 'One-on-one support', 
              text: 'Use helplines and online services designed for young people in distress. These are free, confidential, and available 24/7.',
              color: 'sticky-blue'
            }
          ].map((item, idx) => (
            <ScrollReveal key={item.title} direction="up" delay={idx + 1} className="h-full">
              <WobblyCard variant={item.color as any} tape className="h-full p-8 flex flex-col items-start">
                <div className="text-5xl mb-6 font-accent">{item.icon}</div>
                <h3 className="text-3xl font-heading text-ink mb-4">{item.title}</h3>
                <p className="text-xl font-body leading-relaxed text-ink/80">{item.text}</p>
              </WobblyCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-lined-paper py-24 border-t-2 border-dashed border-ink/20">
        <div className="container">
          <div className="bg-white border-4 border-ink shadow-[12px_12px_0px_0px_var(--ink-charcoal)] rounded-wobbly-4 p-12 lg:p-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center rotate-[-1deg]">
            <ScrollReveal direction="left" className="space-y-8">
              <p className="font-accent text-4xl text-ink-navy rotate-[2deg]">Urgent steps</p>
              <h2 className="text-5xl sm:text-6xl font-heading leading-tight text-ink">
                Choose support that feels <span className="highlight-pink">safe</span>.
              </h2>
              <p className="max-w-xl text-2xl font-body leading-relaxed text-ink/80">
                It is okay to reach out. You deserve care, understanding, and a space that respects your voice during hard times.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={2}>
              <div className="bg-ink rounded-wobbly-1 p-10 text-paper rotate-[2deg]">
                <p className="font-accent text-3xl text-marker-pink mb-4">Reach out to us</p>
                <p className="text-2xl font-heading text-paper mb-4">team.knowandgrow.org@gmail.com</p>
                <p className="text-lg font-body leading-relaxed text-paper/70 mb-8">
                  While we respond as quickly as possible, we are not a 24/7 crisis service.
                </p>
                <Button href="/contact" variant="primary" className="bg-white text-ink hover:bg-paper-graph w-full justify-center">
                  Send a message
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
