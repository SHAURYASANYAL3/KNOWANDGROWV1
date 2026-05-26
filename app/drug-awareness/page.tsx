import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';

export default function DrugAwarenessPage() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <Header />
      <section className="section-bg py-20 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-mint">Drug awareness</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Honest education on substance risks, choices, and support.</h1>
            <p className="max-w-2xl text-base leading-8 text-muted">Our programs offer clear information without judgment, helping youth talk about substance use with confidence.</p>
          </div>
          <div className="rounded-[2.5rem] border border-border/10 bg-white/95 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-mint">Focus</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
              <li>Practical safety conversations for young people.</li>
              <li>Information that avoids stigma and fear.</li>
              <li>Local support options for those seeking help.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <SectionHeading eyebrow="Program flow" title="Respectful awareness that empowers better choices." description="We provide resources, discussion guides, and support frameworks for young people, families, and educators." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { title: 'Evidence-based', text: 'Clear facts presented in an age-appropriate way.' },
            { title: 'Non-judgmental', text: 'Conversations built around curiosity and care.' },
            { title: 'Supportive', text: 'Where to find help and keep moving forward safely.' }
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
          <p className="text-xs uppercase tracking-[0.32em] text-gold">Awareness</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">Information is most powerful when it feels safe to explore.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted">We provide context, compassion, and clear action steps so young people can make choices without shame.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}


