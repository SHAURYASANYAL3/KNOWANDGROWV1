import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import FAQAccordion from '../../components/FAQAccordion';
import { faqItems } from '../../lib/content';

export default function FAQsPage() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <Header />
      <section className="section-bg py-20 sm:py-24">
        <div className="container space-y-8">
          <SectionHeading eyebrow="FAQs" title="Common questions about our programs and support." description="If you do not see your question here, please contact us and we will respond with clarity and care." />
          <p className="max-w-3xl text-sm leading-7 text-muted">These answers are written to help you understand how we work and what to expect.</p>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <FAQAccordion items={faqItems} />
      </section>

      <Footer />
    </main>
  );
}


