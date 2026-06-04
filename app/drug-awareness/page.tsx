import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';
import WobblyCard from '../../components/ui/WobblyCard';

export default function DrugAwarenessPage() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-marker-yellow">
      <Header />
      
      <section className="relative py-24 sm:py-32 bg-lined-paper overflow-hidden border-b-2 border-ink">
        <div className="container grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center relative z-10">
          <ScrollReveal direction="left" className="space-y-8">
            <p className="font-accent text-4xl text-ink-red rotate-[3deg]">Drug awareness</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading leading-[1.1] text-ink">
              Honest education on <span className="highlight-yellow">choices</span> and support.
            </h1>
            <p className="max-w-2xl text-2xl font-body leading-relaxed text-ink/80">
              Our programs offer clear information without judgment, helping youth talk about substance use with confidence and understanding.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="scale" delay={2}>
            <WobblyCard variant="sticky-yellow" tape className="p-10 rotate-[-2deg]">
              <p className="font-accent text-4xl text-ink mb-6 underline decoration-wavy decoration-ink/20">Focus Areas:</p>
              <ul className="space-y-6 text-xl font-body leading-relaxed text-ink">
                <li className="flex items-start gap-4">
                  <span className="font-accent text-3xl">-</span>
                  Practical safety conversations.
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-accent text-3xl">-</span>
                  Information that avoids stigma.
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-accent text-3xl">-</span>
                  Local support options.
                </li>
              </ul>
            </WobblyCard>
          </ScrollReveal>
        </div>
      </section>

      <section className="container py-24 lg:py-32 bg-paper">
        <SectionHeading 
          eyebrow="Program flow" 
          title="Respectful awareness." 
          description="We provide resources and support frameworks for young people, families, and educators." 
          center
          highlightColor="pink"
        />
        
        <div className="mt-16 grid gap-8 md:grid-cols-3 relative">
          {[
            { icon: '📖', title: 'Evidence-based', text: 'Clear facts presented in a relatable way.' },
            { icon: '💬', title: 'Non-judgmental', text: 'Conversations built around curiosity and care.' },
            { icon: '🤝', title: 'Supportive', text: 'Where to find help and keep moving forward.' }
          ].map((item, idx) => (
            <ScrollReveal key={item.title} direction="up" delay={idx + 1} className="h-full">
              <div className="bg-white border-drawn p-8 h-full flex flex-col items-center text-center">
                <div className="text-6xl mb-6 font-accent">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-heading text-ink mb-4">{item.title}</h3>
                <p className="text-xl font-body leading-relaxed text-ink-faded">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 text-center text-paper relative overflow-hidden">
        <div className="absolute inset-0 bg-graph-paper opacity-5" />
        
        <ScrollReveal direction="up" className="container max-w-4xl space-y-8 relative z-10">
          <p className="font-accent text-4xl text-marker-yellow rotate-[-2deg]">Awareness</p>
          <h2 className="text-5xl sm:text-6xl font-heading leading-[1.1] text-white">
            Information is most powerful when it feels <span className="highlight-pink">safe</span>.
          </h2>
          <p className="text-2xl font-body leading-relaxed text-paper/80 max-w-3xl mx-auto">
            We provide context, compassion, and clear action steps so young people can make choices without shame.
          </p>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
