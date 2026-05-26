import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <Header />
      <section className="section-bg py-20 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-mint">Contact</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Connect with KNOW & GROW for support and collaboration.</h1>
            <p className="max-w-2xl text-base leading-8 text-muted">Whether you have questions about our programs, want to volunteer, or need guidance, we are here to listen and respond with care.</p>
          </div>
          <div className="rounded-[2.5rem] border border-border/10 bg-white/95 p-8 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-mint">Email</p>
            <p className="mt-4 text-base leading-7 text-foreground">team.knowandgrow.org@gmail.com</p>
            <p className="mt-6 text-sm leading-7 text-muted">We value your privacy and will reply with supportive, helpful information.</p>
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-[2.5rem] border border-border/10 bg-white/95 p-10 shadow-soft">
            <h2 className="text-2xl font-semibold text-white">Send a message</h2>
            <form className="mt-8 space-y-6">
              <label className="block text-sm uppercase tracking-[0.25em] text-muted">Name</label>
              <input className="w-full rounded-3xl border border-border/10 bg-white/95 px-5 py-4 text-slate-100 outline-none" type="text" placeholder="Your name" />
              <label className="block text-sm uppercase tracking-[0.25em] text-muted">Email</label>
              <input className="w-full rounded-3xl border border-border/10 bg-white/95 px-5 py-4 text-slate-100 outline-none" type="email" placeholder="you@example.com" />
              <label className="block text-sm uppercase tracking-[0.25em] text-muted">Message</label>
              <textarea className="w-full rounded-3xl border border-border/10 bg-white/95 px-5 py-4 text-slate-100 outline-none" rows={6} placeholder="How can we help?" />
              <button type="submit" className="inline-flex w-full items-center justify-center rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-950 transition hover:brightness-110">Send message</button>
            </form>
          </div>
          <div className="space-y-8">
            <div className="rounded-[2.5rem] border border-border/10 bg-white/95 p-10 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-mint">Immediate help</p>
              <p className="mt-4 text-base leading-7 text-muted">If you need urgent support, please visit our Emergency Help page for trusted resources and guidance.</p>
              <a href="/emergency-help" className="mt-6 inline-flex rounded-full bg-white/5 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:bg-white/10">Emergency support</a>
            </div>
            <div className="rounded-[2.5rem] border border-border/10 bg-white/95 p-10 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-mint">Privacy first</p>
              <p className="mt-4 text-base leading-7 text-muted">We do not sell personal information. All messages are handled sensitively and confidentially.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


