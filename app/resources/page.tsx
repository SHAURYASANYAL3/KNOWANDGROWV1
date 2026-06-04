import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import BlogCard from '../../components/BlogCard';
import ScrollReveal from '../../components/ui/ScrollReveal';
import WobblyCard from '../../components/ui/WobblyCard';
import Tape from '../../components/ui/Tape';
import { blogPosts } from '../../lib/content';

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-marker-yellow">
      <Header />
      
      <section className="bg-lined-paper py-24 sm:py-32 border-b-2 border-dashed border-ink/20">
        <div className="container max-w-4xl text-center space-y-8">
          <SectionHeading 
            eyebrow="Resources" 
            title="Practical guides and learning." 
            description="Browse articles and notes designed to help young people, families, and educators build safer environments." 
            center
            highlightColor="yellow"
          />
        </div>
      </section>

      <section className="container py-24 bg-graph-paper">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <ScrollReveal direction="up" className="h-full">
            <BlogCard {...blogPosts[0]} />
          </ScrollReveal>
          
          <div className="grid gap-12 grid-rows-2">
            {blogPosts.slice(1).map((post, idx) => (
              <ScrollReveal key={post.title} direction="up" delay={idx + 2} className="h-full">
                <BlogCard {...post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper py-24 border-t-2 border-ink">
        <div className="container">
          <div className="bg-white border-2 border-ink rounded-wobbly-2 shadow-sketch p-12 lg:p-16 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center relative">
            <Tape className="top-[-10px]" />
            <ScrollReveal direction="left" className="space-y-8">
              <p className="font-accent text-4xl text-marker-pink rotate-[-2deg]">Newsletter</p>
              <h2 className="text-5xl sm:text-6xl font-heading leading-tight text-ink">
                Stay connected with <span className="highlight-green">thoughtful</span> updates.
              </h2>
              <p className="max-w-xl text-2xl font-body leading-relaxed text-ink/80">
                Sign up for curated stories, event updates, and resources that are designed for youth wellbeing and community care. We never spam.
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="right" delay={2}>
              <WobblyCard variant="sticky-yellow" className="p-8 space-y-6 rotate-[2deg]">
                <div>
                  <label className="block font-accent text-2xl text-ink mb-2">Email Address:</label>
                  <input 
                    type="email" 
                    placeholder="you@example.com" 
                    className="input-sketch"
                    required
                  />
                </div>
                <button 
                  type="button" 
                  className="btn-sketch highlight-yellow w-full justify-center"
                >
                  Join the list
                </button>
                <p className="font-accent text-xl text-center text-ink-faded">Your privacy is important to us.</p>
              </WobblyCard>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
