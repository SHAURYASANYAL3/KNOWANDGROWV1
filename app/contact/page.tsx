import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';
import Button from '../../components/ui/SketchButton';
import WobblyCard from '../../components/ui/WobblyCard';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-paper text-ink overflow-hidden selection:bg-marker-yellow">
      <Header />
      
      <section className="relative py-24 sm:py-32 bg-lined-paper border-b-2 border-dashed border-ink/20">
        <div className="container grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center relative z-10">
          <ScrollReveal direction="left" className="space-y-8">
            <p className="font-accent text-4xl text-ink-red rotate-[-2deg]">Contact</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading leading-tight text-ink">
              Connect with us for <span className="highlight-pink">support</span> and collaboration.
            </h1>
            <p className="max-w-2xl text-2xl font-body leading-relaxed text-ink/80">
              Whether you have questions about our programs, want to volunteer, or need guidance, we are here to listen.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="scale" delay={2}>
            <WobblyCard variant="sticky-pink" tape className="p-10 rotate-[2deg]">
              <p className="font-accent text-4xl text-ink mb-6">Direct Email:</p>
              <p className="text-3xl font-heading text-ink-navy mb-4">team.knowandgrow.org@gmail.com</p>
              <p className="text-xl font-body leading-relaxed text-ink/80">
                We value your privacy and will reply with supportive, helpful information within 48 hours.
              </p>
            </WobblyCard>
          </ScrollReveal>
        </div>
      </section>

      <section className="container py-24 bg-graph-paper">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          <ScrollReveal direction="up">
            <div className="bg-white border-2 border-ink rounded-wobbly-1 p-10 shadow-sketch">
              <h2 className="text-4xl font-heading text-ink mb-8 underline decoration-wavy decoration-ink-faded">Send a message</h2>
              <form className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="block font-accent text-2xl text-ink">First Name</label>
                    <input className="input-sketch" type="text" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label className="block font-accent text-2xl text-ink">Email</label>
                    <input className="input-sketch" type="email" placeholder="you@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block font-accent text-2xl text-ink">Subject</label>
                  <select className="input-sketch bg-white appearance-none cursor-pointer">
                    <option>General inquiry</option>
                    <option>Volunteering</option>
                    <option>School partnership</option>
                    <option>Program feedback</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="block font-accent text-2xl text-ink">Message</label>
                  <textarea className="input-sketch resize-y min-h-[150px]" placeholder="How can we help? (Feel free to scribble)" />
                </div>
                
                <button type="button" className="btn-sketch highlight-yellow w-full justify-center">
                  Send message
                </button>
              </form>
            </div>
          </ScrollReveal>
          
          <div className="space-y-8">
            <ScrollReveal direction="up" delay={2}>
              <WobblyCard variant="sticky-yellow" tape className="p-8">
                <p className="font-accent text-3xl text-ink-red mb-4">Immediate help</p>
                <p className="text-xl font-body leading-relaxed text-ink mb-6">
                  If you need urgent support, please visit our Emergency Help page for trusted resources.
                </p>
                <Button href="/emergency-help" variant="primary" className="bg-white">
                  Emergency support
                </Button>
              </WobblyCard>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={3}>
              <WobblyCard variant="sticky-green" tape className="p-8 rotate-[2deg]">
                <p className="font-accent text-3xl text-ink-navy mb-4">Privacy first</p>
                <p className="text-xl font-body leading-relaxed text-ink">
                  We do not sell personal information. All messages are handled sensitively.
                </p>
              </WobblyCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
