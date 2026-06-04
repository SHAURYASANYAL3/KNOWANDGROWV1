import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/SketchButton';
import WobblyCard from '../../components/ui/WobblyCard';

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-marker-yellow">
      <Header />
      
      <section className="relative py-24 sm:py-32 bg-lined-paper border-b-2 border-dashed border-ink/20">
        <div className="container grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center relative z-10">
          <ScrollReveal direction="left" className="space-y-8">
            <p className="font-accent text-4xl text-ink-navy rotate-[-3deg]">Volunteer</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading leading-tight text-ink">
              Bring energy and <span className="highlight-yellow">empathy</span> to our programs.
            </h1>
            <p className="max-w-2xl text-2xl font-body leading-relaxed text-ink/80">
              Volunteers help create safe spaces, run workshops, and offer steady support for young people finding their way. Your perspective matters here.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="scale" delay={2}>
            <WobblyCard variant="sticky-yellow" tape className="p-10 rotate-[2deg]">
              <p className="font-accent text-4xl text-ink mb-6 underline decoration-wavy decoration-ink/20">Why volunteer?</p>
              <ul className="space-y-6 text-xl font-body leading-relaxed text-ink">
                <li className="flex items-start gap-4">
                  <span className="font-accent text-3xl">-</span>
                  Build meaningful connections.
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-accent text-3xl">-</span>
                  Gain training in mental health first aid.
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-accent text-3xl">-</span>
                  Support a movement grounded in real care.
                </li>
              </ul>
            </WobblyCard>
          </ScrollReveal>
        </div>
      </section>

      <section className="container py-24 lg:py-32 bg-paper">
        <SectionHeading 
          eyebrow="Your role" 
          title="Support youth with trust." 
          description="We recruit volunteers who want to stand beside young people and help models of safe behavior feel real and accessible." 
          center
          highlightColor="green"
        />
        
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[
            { icon: '👥', title: 'Mentoring circles', text: 'Lead small-group discussions and share techniques for safety.' },
            { icon: '🏫', title: 'Community outreach', text: 'Help spread awareness in schools, clubs, and online spaces.' },
            { icon: '📚', title: 'Resource coordination', text: 'Support the creation and sharing of trusted materials.' }
          ].map((item, idx) => (
            <ScrollReveal key={item.title} direction="up" delay={idx + 1} className="h-full">
              <div className="card p-8 h-full bg-white border-drawn hover:bg-paper-graph transition-colors">
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

      <section className="bg-graph-paper py-24 lg:py-32 relative overflow-hidden border-t-4 border-ink">
        <div className="container relative z-10">
          <ScrollReveal direction="up" className="bg-white border-4 border-ink shadow-[12px_12px_0px_0px_var(--ink-charcoal)] rounded-wobbly-3 p-12 sm:p-20 max-w-4xl mx-auto text-center rotate-[-1deg]">
            <p className="font-accent text-4xl text-ink-red mb-6 rotate-[2deg]">Take action</p>
            <h2 className="text-5xl sm:text-6xl font-heading leading-tight text-ink mb-8 text-balance">
              Your time becomes a <span className="highlight-pink">safe place</span>.
            </h2>
            <p className="text-2xl font-body text-ink/80 mb-10 max-w-2xl mx-auto">
              Ready to make a difference? Apply now to join our next orientation cohort and start your journey as a youth mentor.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Apply now
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
