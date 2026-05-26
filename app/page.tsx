'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import StatCard from '../components/StatCard';
import FocusCard from '../components/FocusCard';
import TestimonialCard from '../components/TestimonialCard';
import SketchButton from '../components/ui/SketchButton';
import WobblyCard from '../components/ui/WobblyCard';
import { focusAreas, siteStats, testimonials } from '../lib/content';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper text-foreground">
      <Header />

      <section className="relative overflow-hidden border-b border-border/10 bg-paper py-20">
        <div className="absolute left-1/2 top-8 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Rooted in knowledge</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-heading leading-tight text-foreground sm:text-6xl">
              Compassionate education for young people, communities, and trusted adults.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">
              KNOW & GROW creates calm, honest spaces where youth can learn digital safety, mental health skills, safe relationship practices, and positive community support.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <SketchButton href="/volunteer" variant="primary">Join the movement</SketchButton>
              <SketchButton href="/focus-areas" variant="secondary">Our focus areas</SketchButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-wobbly border border-border/20 bg-white/95 p-8 shadow-paper sm:p-10"
          >
            <div className="absolute inset-0 bg-hero-glow opacity-60 mix-blend-screen" />
            <div className="relative rounded-wobblyMd border border-border/10 bg-paper p-8 shadow-paperStrong">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-accent2">Safe learning</p>
                  <h2 className="mt-4 text-3xl font-heading text-foreground">Youth-led stories. Guided care. Trust-first navigation.</h2>
                </div>
                <div className="rounded-full bg-accent/10 px-4 py-3 text-sm font-semibold text-accent">2026 impact</div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-wobbly border border-border/10 bg-white/95 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-accent2">Resilient youth</p>
                  <p className="mt-4 text-base leading-7 text-muted">Practical tools that help young people express needs and find support.</p>
                </div>
                <div className="rounded-wobbly border border-border/10 bg-white/95 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-accent2">Community trust</p>
                  <p className="mt-4 text-base leading-7 text-muted">Local leaders and educators work with us to build safer, kinder networks.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <WobblyCard className="p-6">
                <p className="text-4xl font-bold text-foreground">12k+</p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-accent2">Young voices reached</p>
              </WobblyCard>
              <WobblyCard className="p-6">
                <p className="text-4xl font-bold text-foreground">92+</p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-accent2">Programs delivered</p>
              </WobblyCard>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container space-y-10 py-16 lg:py-24">
        <SectionHeading
          eyebrow="Impact"
          title="Meaningful outcomes with calm, confident support."
          description="Our work blends youth experience, accessible education, and community partnerships to create measurable change."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {siteStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="border-t border-border/10 bg-paper py-16 sm:py-20 lg:py-24">
        <div className="container">
          <SectionHeading
            eyebrow="What we do"
            title="Focused support across six core areas."
            description="From mental wellness to digital wellbeing, each program is designed to feel safe, contemporary, and practical."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((area) => (
              <FocusCard key={area.title} {...area} />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-accent">Stories that matter</p>
            <h2 className="text-4xl font-heading leading-tight text-foreground sm:text-5xl">Youth experiences that guide our work.</h2>
            <p className="max-w-2xl text-base leading-8 text-muted">Real voices shape our programs. Every story we share is centered on compassion, growth, and active listening.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/10 bg-paper py-20">
        <div className="container rounded-wobbly border border-border/10 bg-white/95 p-10 shadow-paper sm:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-accent2">Volunteer</p>
              <h2 className="text-4xl font-heading leading-tight text-foreground sm:text-5xl">Help shape a safer future for youth.</h2>
              <p className="max-w-xl text-base leading-8 text-muted">Volunteers bring warmth, perspective, and consistency to every initiative. Your time and voice can create trusted change.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <SketchButton href="/volunteer" variant="primary">Get involved</SketchButton>
              <SketchButton href="/contact" variant="ghost">Ask a question</SketchButton>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}


