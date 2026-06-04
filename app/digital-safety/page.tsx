import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';
import WobblyCard from '../../components/ui/WobblyCard';

export default function DigitalSafetyPage() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-marker-yellow">
      <Header />
      
      <section className="relative py-24 sm:py-32 bg-graph-paper overflow-hidden border-b-4 border-dashed border-ink/20">
        <div className="container grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center relative z-10">
          <ScrollReveal direction="left" className="space-y-8">
            <p className="font-accent text-4xl text-ink-navy rotate-[-3deg]">Digital safety</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading leading-[1.1] text-ink">
              Helping young people build <span className="highlight-blue">confidence</span> online.
            </h1>
            <p className="max-w-2xl text-2xl font-body leading-relaxed text-ink/80">
              We teach safe boundaries, honest choices, and how to stay grounded in digital spaces without fear or shame.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="scale" delay={2}>
            <WobblyCard variant="sticky-blue" tape className="p-10 rotate-[2deg]">
              <p className="font-accent text-4xl text-ink mb-6 underline decoration-wavy decoration-ink/20">Highlights:</p>
              <ul className="space-y-5 text-xl font-body leading-relaxed text-ink">
                <li className="flex items-start gap-4">
                  <span className="font-accent text-3xl text-marker-yellow">✓</span>
                  Privacy awareness for messaging.
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-accent text-3xl text-marker-yellow">✓</span>
                  Healthy habits for screen time.
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-accent text-3xl text-marker-yellow">✓</span>
                  Responsive support for online pressure.
                </li>
              </ul>
            </WobblyCard>
          </ScrollReveal>
        </div>
      </section>

      <section className="container py-24 lg:py-32 bg-paper">
        <SectionHeading 
          eyebrow="Key topics" 
          title="Clear guidance." 
          description="Our sessions combine relatable examples with the tools young people need to feel safe online. No tech-jargon, just real skills." 
          center
          highlightColor="blue"
        />
        
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { title: 'Privacy boundaries', text: 'Deciding what to share and who to trust online.' },
            { title: 'Respectful communication', text: 'Creating safe digital interactions and managing conflict.' },
            { title: 'Support pathways', text: 'Knowing exactly where to turn if something feels wrong.' }
          ].map((item, idx) => (
            <ScrollReveal key={item.title} direction="up" delay={idx + 1} className="h-full">
              <div className="card border-drawn border-ink-navy p-8 h-full bg-white hover:bg-paper-lined transition-colors">
                <h3 className="text-3xl font-heading text-ink-navy mb-4">{item.title}</h3>
                <p className="text-xl font-body leading-relaxed text-ink/80">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 text-center text-paper relative overflow-hidden">
        <ScrollReveal direction="up" className="container max-w-4xl space-y-8 relative z-10">
          <p className="font-accent text-4xl text-marker-blue rotate-[2deg]">Digital wellbeing</p>
          <h2 className="text-5xl sm:text-6xl font-heading leading-[1.1] text-white">
            Online safety can feel <span className="highlight-yellow">clear</span>, not scary.
          </h2>
          <p className="text-2xl font-body leading-relaxed text-paper/80 max-w-2xl mx-auto">
            We help young people understand the digital world while keeping the conversation calm, honest, and supportive.
          </p>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
