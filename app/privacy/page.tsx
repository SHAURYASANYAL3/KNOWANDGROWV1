import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';
import WobblyCard from '../../components/ui/WobblyCard';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-marker-yellow">
      <Header />
      
      <section className="bg-graph-paper py-24 sm:py-32 border-b-2 border-dashed border-ink/20">
        <div className="container max-w-4xl text-center space-y-8">
          <SectionHeading 
            eyebrow="Privacy" 
            title="Privacy-first practices." 
            description="We collect only essential information and keep every message and interaction confidential. Our approach is designed for trust, with a strong focus on minimal data and respectful handling." 
            center
            highlightColor="green"
          />
        </div>
      </section>

      <section className="container py-24 bg-paper">
        <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {[
            { 
              icon: '🚫', 
              title: 'Limited information', 
              text: 'We only ask for what is strictly needed to respond to you. We do not track unnecessary browsing data.',
              color: 'sticky-yellow'
            },
            { 
              icon: '🛡️', 
              title: 'No selling', 
              text: 'Your details are never sold to third parties, advertisers, or data brokers. What you share with us stays with us.',
              color: 'sticky-pink'
            },
            { 
              icon: '🤫', 
              title: 'Confidential care', 
              text: 'Messages are treated sensitively and only shared with relevant program staff who need to see them to support you.',
              color: 'sticky-green'
            },
            { 
              icon: '🔒', 
              title: 'Secure communication', 
              text: 'We recommend using trusted email and support channels. We maintain secure internal systems for our contacts.',
              color: 'sticky-blue'
            }
          ].map((item, idx) => (
            <ScrollReveal key={item.title} direction="up" delay={idx + 1} className="h-full">
              <WobblyCard variant={item.color as any} tape className="h-full p-8 flex items-start gap-6 rotate-[1deg] hover:rotate-0 transition-transform">
                <div className="text-4xl font-accent shrink-0 mt-1">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-heading text-ink mb-3">{item.title}</h3>
                  <p className="text-xl font-body leading-relaxed text-ink/80">{item.text}</p>
                </div>
              </WobblyCard>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-ink py-24 text-center text-paper relative overflow-hidden border-t-2 border-dashed border-white/20">
        <div className="absolute inset-0 bg-graph-paper opacity-5" />
        
        <div className="container max-w-3xl space-y-8 relative z-10">
          <p className="font-accent text-3xl text-marker-yellow rotate-[-2deg]">Our promise</p>
          <h2 className="text-5xl sm:text-6xl font-heading leading-[1.1]">
            Your trust and privacy <span className="highlight-pink text-ink">matter most</span>.
          </h2>
          <p className="text-2xl font-body leading-relaxed text-paper/80">
            We keep data handling transparent and simple so you can focus on support, learning, and community without worrying about your digital footprint.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
