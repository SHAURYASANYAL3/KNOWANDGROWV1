import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import BlogCard from '../../components/BlogCard';
import { blogPosts } from '../../lib/content';

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <Header />
      <section className="section-bg py-20 sm:py-24">
        <div className="container space-y-8">
          <SectionHeading eyebrow="Resources" title="Practical guides, stories, and learning for youth wellbeing." description="Browse articles and notes designed to help young people, families, and educators build safer environments." />
          <p className="max-w-3xl text-sm leading-7 text-muted">Each resource brings calm guidance and actionable thinking to the topics that matter most for growing communities.</p>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>
      </section>

      <section className="bg-white/95 py-20">
        <div className="container grid gap-10 rounded-[3rem] border border-border/10 bg-white/95 p-10 shadow-soft lg:grid-cols-[1.25fr_0.75fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-gold">Newsletter</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">Stay connected with calm, thoughtful updates.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted">Sign up for curated stories, event updates, and resources that are designed for youth wellbeing and community care.</p>
          </div>
          <form className="space-y-4 rounded-[2rem] bg-white/95 p-8 shadow-soft">
            <label className="block text-sm uppercase tracking-[0.28em] text-muted">Email</label>
            <input type="email" placeholder="you@example.com" className="w-full rounded-3xl border border-border/10 bg-white/95 px-5 py-4 text-slate-100 outline-none transition focus:border-gold/50 focus:ring-2 focus:ring-gold/20" />
            <button type="submit" className="w-full rounded-full bg-gold px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-950 transition hover:brightness-110">Join the list</button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}


