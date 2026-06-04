import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';
import WobblyCard from '../../components/ui/WobblyCard';
import MemberCard from '../../components/MemberCard';
import { members } from '../../lib/content';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paper text-ink overflow-hidden selection:bg-marker-yellow">
      <Header />

      <section className="relative pt-20 pb-32 bg-graph-paper border-b-4 border-dashed border-ink/20">
        <div className="container grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center relative z-10">
          <ScrollReveal direction="left" className="space-y-8">
            <p className="font-accent text-3xl text-ink-navy rotate-[-2deg]">About us</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading leading-[1.1] text-ink">
              KNOW & GROW is <span className="highlight-pink">youth-led</span> and trusted.
            </h1>
            <p className="max-w-2xl text-2xl font-body leading-relaxed text-ink/80 font-medium">
              We are a movement that supports young people with empathetic education. Our mission is to build stronger connections without resorting to fear or stigma.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="scale" delay={2} className="relative">
            <WobblyCard variant="default" className="bg-white p-12 rotate-[2deg]">
              <div className="space-y-8">
                <div>
                  <p className="font-accent text-3xl text-marker-pink mb-2">Our Core Values</p>
                  <p className="text-4xl font-heading text-ink leading-tight">Respect, honesty, responsibility, and compassion.</p>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2 pt-6 border-t-2 border-dashed border-ink/20">
                  <div>
                    <div className="text-5xl mb-4 font-accent">🌱</div>
                    <p className="font-heading text-3xl text-ink mb-2">Rooted</p>
                    <p className="text-lg font-body leading-relaxed text-ink/70">Grounded in trusted information and peer-led care.</p>
                  </div>
                  <div>
                    <div className="text-5xl mb-4 font-accent">🤝</div>
                    <p className="font-heading text-3xl text-ink mb-2">Responsive</p>
                    <p className="text-lg font-body leading-relaxed text-ink/70">Designed to meet young people where they are.</p>
                  </div>
                </div>
              </div>
            </WobblyCard>
          </ScrollReveal>
        </div>
      </section>

      <section className="container py-24 lg:py-32 bg-paper">
        <SectionHeading 
          eyebrow="Approach" 
          title="Learning with empathy." 
          description="Every initiative includes youth voices, research-based structure, and a calm environment for progress." 
          center 
          highlightColor="yellow"
        />
        
        <div className="mt-16 grid gap-8 md:grid-cols-3 relative">
          <div className="hidden md:block absolute top-[20%] left-[10%] right-[10%] h-4 svg-draw pointer-events-none -z-10">
             <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full">
               <path d="M0,10 Q50,0 100,10" fill="none" strokeWidth="2" strokeDasharray="5,5" className="stroke-ink/30" />
             </svg>
          </div>
          
          {[
            { step: '01', title: 'Participant-first', text: 'Programs focus on respect, choice, and meaningful connection.', color: 'sticky-pink' },
            { step: '02', title: 'Trusted facilitation', text: 'Our facilitators are trained to speak openly, without judgment.', color: 'sticky-yellow' },
            { step: '03', title: 'Community', text: 'We work with schools, families, and local partners.', color: 'sticky-green' }
          ].map((item, idx) => (
            <ScrollReveal key={item.title} direction="up" delay={idx + 1} className="relative z-10">
              <WobblyCard variant={item.color as any} tape className="h-full p-8 flex flex-col">
                <div className="font-accent text-5xl text-ink/40 mb-4">{item.step}</div>
                <h3 className="text-3xl font-heading text-ink mb-4">{item.title}</h3>
                <p className="text-xl font-body leading-relaxed text-ink/80">{item.text}</p>
              </WobblyCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 lg:py-32 bg-lined-paper border-t-2 border-dashed border-ink/20">
        <div className="container">
          <SectionHeading 
            eyebrow="Our Team" 
            title="The people behind KNOW & GROW." 
            description="We are a diverse group of young individuals committed to making a difference." 
            highlightColor="green"
          />
          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <ScrollReveal key={index} direction="up" delay={index % 3 + 1}>
                <MemberCard {...member} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-paper relative overflow-hidden">
        <div className="absolute inset-0 bg-graph-paper opacity-5" />
        
        <div className="container grid gap-16 lg:grid-cols-[1.2fr_0.8fr] items-center relative z-10">
          <ScrollReveal direction="up" className="space-y-8">
            <p className="font-accent text-3xl text-marker-yellow rotate-[-3deg]">Mission</p>
            <h2 className="text-5xl sm:text-6xl font-heading leading-tight text-white">
              A <span className="highlight-pink">safer</span> generation is possible.
            </h2>
            <p className="max-w-xl text-2xl font-body leading-relaxed text-paper/80">
              We bring young people tools for self-awareness, digital confidence, and healthy relationships.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="left" delay={2}>
            <div className="bg-paper text-ink p-10 border-drawn shadow-[8px_8px_0px_0px_var(--marker-yellow)] rotate-[2deg]">
              <p className="font-accent text-3xl text-ink-red mb-6">Contact Us</p>
              <p className="text-2xl font-heading text-ink mb-4">team.knowandgrow.org@gmail.com</p>
              <p className="text-xl font-body leading-relaxed text-ink/80 mb-8">
                We respond to partnership, volunteering, and program questions with care.
              </p>
              <a href="/contact" className="btn-sketch highlight-yellow">
                Get in touch
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </main>
  );
}
