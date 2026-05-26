import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';

export default function MentalHealthPage() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <Header />
      <section className="section-bg py-20 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-mint">Mental health</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Supporting emotional wellbeing with respect and real connection.</h1>
            <p className="max-w-2xl text-base leading-8 text-muted">Our mental health programs focus on resilience, coping skills, and community understanding rather than labels or pressure.</p>
          </div>
          <div className="rounded-[2.5rem] border border-border/10 bg-white/95 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-mint">We help</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
              <li>Build emotional vocabulary for young people.</li>
              <li>Reduce stigma through compassionate education.</li>
              <li>Create peer-safe spaces for honest sharing.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <SectionHeading eyebrow="How it works" title="Structured support with a human-first focus." description="Interactive workshops, guided discussions, and resource packs that help youth strengthen resilience and ask for help when they need it." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { title: 'Guided reflection', text: 'Tools for understanding feelings and reducing overwhelm.' },
            { title: 'Peer support', text: 'Safe conversations led by trained youth facilitators.' },
            { title: 'Healthy habits', text: 'Practical strategies for rest, social balance, and emotional care.' }
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
          <p className="text-xs uppercase tracking-[0.32em] text-gold">Care focus</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">Emotional safety is the foundation for every other conversation.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted">We create learning experiences that help youth feel grounded, understood, and supported in their next step.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}


