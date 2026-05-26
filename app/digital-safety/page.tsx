import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';

export default function DigitalSafetyPage() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <Header />
      <section className="section-bg py-20 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1.05fr_0.85fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-mint">Digital safety</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Helping young people build confidence and calm online.</h1>
            <p className="max-w-2xl text-base leading-8 text-muted">We teach safe boundaries, honest choices, and how to stay grounded in digital spaces without fear or shame.</p>
          </div>
          <div className="rounded-[2.5rem] border border-border/10 bg-white/95 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-mint">Highlights</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
              <li>Privacy awareness for messaging, profiles, and stories.</li>
              <li>Healthy habits for social media and screen time.</li>
              <li>Responsive support for online pressure.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <SectionHeading eyebrow="Key topics" title="Clear guidance that feels practical and respectful." description="Our sessions combine relatable examples with the tools young people need to feel safe online." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { title: 'Privacy boundaries', text: 'Deciding what to share and who to trust online.' },
            { title: 'Respectful communication', text: 'Creating safe digital interactions with peers.' },
            { title: 'Support pathways', text: 'Knowing where to turn if something feels wrong.' }
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-border/10 bg-white/95 p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-950 to-brand-900 py-20">
        <div className="container rounded-[3rem] border border-border/10 bg-white/95 p-10 shadow-soft sm:p-14">
          <p className="text-xs uppercase tracking-[0.32em] text-gold">Digital wellbeing</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">Online safety can feel clear, not scary.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted">We help young people understand the digital world while keeping the conversation calm, honest, and supportive.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}


