import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';

export default function EmergencyHelpPage() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <Header />
      <section className="section-bg py-20 sm:py-24">
        <div className="container space-y-8">
          <SectionHeading eyebrow="Emergency help" title="Immediate guidance for young people in urgent situations." description="If you need support now, these trusted resources and contacts can help you take the next step safely." />
          <p className="max-w-3xl text-sm leading-7 text-muted">We encourage you to reach out to professionals or a trusted adult if you feel unsafe or overwhelmed.</p>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { title: 'Safe contact', text: 'If you are in immediate danger, contact local emergency services first.' },
            { title: 'Trusted adult', text: 'Talk to a parent, guardian, teacher, or counselor who can support you in person.' },
            { title: 'One-on-one support', text: 'Use helplines and online services designed for young people in distress.' }
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-border/10 bg-white/95 p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/95 py-16">
        <div className="container rounded-[3rem] border border-border/10 bg-white/95 p-10 shadow-soft">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-gold">Urgent steps</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">Choose support that feels safe and clear.</h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">It is okay to reach out. You deserve care, understanding, and a space that respects your voice.</p>
            </div>
            <div className="rounded-[2rem] border border-border/10 bg-slate-900/95 p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-muted">Reach out</p>
              <p className="mt-4 text-base leading-7 text-foreground">team.knowandgrow.org@gmail.com</p>
              <p className="mt-3 text-sm leading-7 text-muted">If you are facing an immediate crisis, please contact local services right away.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


