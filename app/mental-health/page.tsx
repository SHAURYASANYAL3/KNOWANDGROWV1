import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';
import WobblyCard from '../../components/ui/WobblyCard';

export default function MentalHealthPage() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-marker-yellow">
      <Header />
      
      <section className="relative py-24 sm:py-32 bg-lined-paper overflow-hidden border-b-2 border-ink">
        <div className="container grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center relative z-10">
          <ScrollReveal direction="left" className="space-y-8">
            <p className="font-accent text-4xl text-ink-navy rotate-[-3deg]">Mental health</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading leading-tight text-ink">
              Supporting emotional wellbeing with <span className="highlight-green">respect</span>.
            </h1>
            <p className="max-w-2xl text-2xl font-body leading-relaxed text-ink/80">
              Our mental health programs focus on resilience and community understanding rather than labels or pressure. We provide a calm space to grow.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="scale" delay={2}>
            <WobblyCard variant="sticky-green" tape className="p-10 rotate-[3deg]">
              <p className="font-accent text-4xl text-ink mb-6 underline decoration-wavy decoration-ink/20">We help youth:</p>
              <ul className="space-y-5 text-xl font-body leading-relaxed text-ink">
                <li className="flex items-start gap-4">
                  <span className="font-accent text-3xl">1.</span>
                  Build emotional vocabulary.
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-accent text-3xl">2.</span>
                  Reduce stigma through compassionate education.
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-accent text-3xl">3.</span>
                  Create peer-safe spaces for honest sharing.
                </li>
              </ul>
            </WobblyCard>
          </ScrollReveal>
        </div>
      </section>

      <section className="container py-24 lg:py-32 bg-paper">
        <SectionHeading 
          eyebrow="How it works" 
          title="Structured support." 
          description="Interactive workshops, guided discussions, and resource packs that help youth strengthen resilience." 
          center
          highlightColor="yellow"
        />
        
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { icon: '🌿', title: 'Guided reflection', text: 'Tools for understanding feelings and reducing overwhelm.' },
            { icon: '🤝', title: 'Peer support', text: 'Safe conversations led by trained youth facilitators.' },
            { icon: '☀️', title: 'Healthy habits', text: 'Practical strategies for rest, social balance, and emotional care.' }
          ].map((item, idx) => (
            <ScrollReveal key={item.title} direction="up" delay={idx + 1} className="h-full">
              <div className="card p-8 h-full bg-white border-drawn flex flex-col hover:bg-paper-graph transition-colors">
                <div className="text-6xl mb-6 font-accent">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-heading text-ink mb-4">{item.title}</h3>
                <p className="text-xl font-body leading-relaxed text-ink-faded flex-grow">{item.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 text-center text-paper relative overflow-hidden">
        <div className="absolute inset-0 bg-graph-paper opacity-5" />
        
        <ScrollReveal direction="up" className="container max-w-4xl space-y-8 relative z-10">
          <p className="font-accent text-4xl text-marker-green rotate-[-2deg]">Care focus</p>
          <h2 className="text-5xl sm:text-6xl font-heading leading-[1.1] text-white">
            Emotional <span className="highlight-yellow">safety</span> is the foundation for every conversation.
          </h2>
          <p className="text-2xl font-body leading-relaxed text-paper/80 max-w-3xl mx-auto">
            We create learning experiences that help youth feel grounded, understood, and supported in their next step. You don't have to navigate it alone.
          </p>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
