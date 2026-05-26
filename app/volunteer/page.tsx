import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';

export default function VolunteerPage() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <Header />
      <section className="section-bg py-20 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-mint">Volunteer</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Bring energy, empathy, and lived experience to our programs.</h1>
            <p className="max-w-2xl text-base leading-8 text-muted">Volunteers help create safe spaces, run workshops, and offer steady support for young people finding their way.</p>
          </div>
          <div className="rounded-[2.5rem] border border-border/10 bg-white/95 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-mint">Why volunteer?</p>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-muted">
              <li>Build meaningful connections with youth and peers.</li>
              <li>Gain training in compassionate facilitation.</li>
              <li>Support a movement grounded in real care.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <SectionHeading eyebrow="Your role" title="Support youth with empathy, trust, and practical guidance." description="We recruit volunteers who want to stand beside young people and help models of safe behavior feel real." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {[
            { title: 'Mentoring circles', text: 'Lead small-group discussions and share techniques for safety and wellbeing.' },
            { title: 'Community outreach', text: 'Help spread awareness in schools, clubs, and online spaces.' },
            { title: 'Resource coordination', text: 'Support the creation and sharing of trusted materials.' }
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
          <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.32em] text-gold">Take action</p>
              <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">Your time becomes a safe place for another young person.</h2>
            </div>
            <a href="/contact" className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-950 transition hover:brightness-110">Apply now</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


