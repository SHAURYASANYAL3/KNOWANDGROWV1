import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <Header />
      <section className="section-bg py-20 sm:py-24">
        <div className="container space-y-8">
          <SectionHeading eyebrow="Privacy" title="Privacy-first practices for a safer experience." description="We collect only essential information and keep every message and interaction confidential." />
          <p className="max-w-3xl text-sm leading-7 text-muted">Our approach is designed for trust, with a strong focus on minimal data and respectful handling.</p>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2">
          {[
            { title: 'Limited information', text: 'We only ask for what is needed to respond, connect, or provide resources.' },
            { title: 'No selling', text: 'Your details are never sold to third parties.' },
            { title: 'Confidential care', text: 'Messages are treated sensitively and only shared with relevant program staff.' },
            { title: 'Secure communication', text: 'We recommend using trusted email and support channels for any sensitive questions.' }
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-border/10 bg-white/95 p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/95 py-16">
        <div className="container rounded-[3rem] border border-border/10 bg-white/95 p-10 shadow-soft sm:p-14">
          <p className="text-xs uppercase tracking-[0.32em] text-gold">Our promise</p>
          <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">Your trust and privacy matter most.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-muted">We keep data handling transparent and simple so you can focus on support, learning, and community.</p>
        </div>
      </section>

      <Footer />
    </main>
  );
}


