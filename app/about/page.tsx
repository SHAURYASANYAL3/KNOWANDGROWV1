import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import MemberCard from '../../components/MemberCard';
import { members } from '../../lib/content';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <Header />

      <section className="bg-paper py-20">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">About us</p>
            <h1 className="text-4xl font-heading leading-tight text-foreground sm:text-5xl">KNOW & GROW is youth-led, trusted, and present for every conversation.</h1>
            <p className="max-w-2xl text-base leading-8 text-muted">
              We are a movement that supports young people with empathetic education and community-powered guidance. Our mission is to build stronger connections, safer choices, and natural learning paths.
            </p>
          </div>
          <div className="paper-card p-8">
            <div className="space-y-5">
              <div className="rounded-wobbly border border-border/10 bg-paper p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-accent2">Our values</p>
                <p className="mt-4 text-lg font-semibold text-foreground">Respect, honesty, responsibility, and compassion.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="paper-card p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-accent">Rooted</p>
                  <p className="mt-3 text-sm leading-7 text-muted">Grounded in trusted information and peer-led care.</p>
                </div>
                <div className="paper-card p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-accent">Responsive</p>
                  <p className="mt-3 text-sm leading-7 text-muted">Designed to meet young people where they are.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <SectionHeading eyebrow="Approach" title="Learning, listening, and acting with empathy." description="Every initiative includes youth voices, research-based structure, and a calm environment for progress." />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Participant-first design',
              text: 'Programs focus on respect, choice, and meaningful connection rather than pressure or slogans.'
            },
            {
              title: 'Trusted facilitation',
              text: 'Our facilitators are trained to speak openly, without judgment, and keep everyone safe.'
            },
            {
              title: 'Community collaboration',
              text: 'We work with schools, families, and local partners to create shared support systems.'
            }
          ].map((item) => (
            <div key={item.title} className="paper-card p-8">
              <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper py-16 lg:py-24 border-t border-border/10">
        <div className="container">
          <SectionHeading 
            eyebrow="Our Team" 
            title="The people behind KNOW & GROW." 
            description="We are a diverse group of young individuals committed to making a difference." 
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/10 bg-paper py-20">
        <div className="container grid gap-10 rounded-wobbly border border-border/10 bg-white/95 p-10 shadow-paper lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-accent2">Mission</p>
            <h2 className="mt-4 text-4xl font-heading leading-tight text-foreground sm:text-5xl">A safer, more informed generation is possible.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted">
              We bring young people tools for self-awareness, digital confidence, and healthy relationships, so communities grow with kindness and clarity.
            </p>
          </div>
          <div className="space-y-4 rounded-wobbly border border-border/10 bg-white/95 p-8 shadow-paper">
            <p className="text-sm uppercase tracking-[0.3em] text-accent">Contact</p>
            <p className="text-base leading-7 text-foreground">team.knowandgrow.org@gmail.com</p>
            <p className="text-sm leading-7 text-muted">We respond to partnership, volunteering, and program questions with care.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


