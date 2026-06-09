'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import StatCard from '../components/StatCard';
import FocusCard from '../components/FocusCard';
import TestimonialCard from '../components/TestimonialCard';
import BlogCard from '../components/BlogCard';
import Button from '../components/ui/SketchButton';
import ScrollReveal from '../components/ui/ScrollReveal';
import WobblyCard from '../components/ui/WobblyCard';
import Tape from '../components/ui/Tape';
import { focusAreas, siteStats, testimonials, trustSignals, blogPosts, workshopImages } from '../lib/content';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-paper text-ink overflow-hidden selection:bg-marker-yellow">
      <Header />

      {/* 1. HERO SECTION - Scrapbook spread */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 lg:py-0 overflow-hidden bg-graph-paper">
        {/* Sketchy ambient shapes */}
        <div className="absolute top-20 left-0 w-[500px] h-[500px] border-2 border-dashed border-ink/10 rounded-wobbly-1 animate-wobble-slow -z-10" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] border border-ink/5 rounded-wobbly-2 animate-wobble-slow -z-10" style={{ animationDelay: '1s' }} />

        <div className="container grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut", staggerChildren: 0.2 }}
            className="space-y-8"
          >
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="relative inline-block">
              <p className="font-accent text-3xl text-ink-red rotate-[-3deg] inline-block px-4 py-1">
                Rooted in knowledge
              </p>
              <div className="absolute inset-0 border-2 border-ink rounded-wobbly-3 -z-10" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl lg:text-[5rem] font-heading leading-[1.1] text-ink text-balance"
            >
              Compassionate <span className="highlight-yellow">education</span> for young people.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="max-w-xl text-xl sm:text-2xl leading-relaxed text-ink/80 font-body font-medium"
            >
              KNOW & GROW creates calm, honest spaces where youth can learn digital safety, mental health skills, and safe relationship practices.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row pt-4"
            >
              <Button href="/volunteer" variant="primary" size="lg" showArrow>Join the movement</Button>
              <Button href="/focus-areas" variant="ghost" size="lg">Explore our work</Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block h-[600px] animate-float-paper"
          >
            {/* Main Collage Piece */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-white p-4 pb-12 border-2 border-ink shadow-sketch rounded-wobbly-4 rotate-[-1deg] group hover:rotate-0 transition-transform duration-500">
              <Tape className="top-[-15px] left-1/2 -translate-x-1/2 w-32" />
              <div className="w-full h-full overflow-hidden border border-ink/20 bg-paper-lined rounded-wobbly-1">
                <img src="/pic/workshop_pics/workshop-3.jpg" alt="Workshop Highlight" className="w-full h-full object-cover transition-scale duration-700 group-hover:scale-105" />
              </div>
            </div>

            {/* Floating sticky notes */}
            <div className="absolute top-20 -left-10 w-72">
              <WobblyCard variant="sticky-yellow">
                <p className="font-accent text-3xl text-ink">Mental wellness resources for everyone!</p>
                <div className="absolute bottom-4 right-4 text-3xl">🧠</div>
              </WobblyCard>
            </div>

            <div className="absolute bottom-32 -right-4 w-64">
              <WobblyCard variant="sticky-pink">
                <p className="font-accent text-3xl text-ink">Digital safety, made approachable.</p>
                <div className="absolute top-4 right-4 text-3xl">🛡️</div>
              </WobblyCard>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TRUST BAR - Pinned notes */}
      <section className="bg-white py-12 border-y-2 border-dashed border-ink/20">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
            {trustSignals.map((signal, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx + 1} className="flex items-center gap-3">
                <svg className="w-6 h-6 stroke-ink-green fill-none" viewBox="0 0 24 24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6L9 17l-5-5"/>
                </svg>
                <span className="text-xl font-heading text-ink">{signal}</span>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SURVEY PARTICIPATION SECTION */}
      <section className="py-20 bg-paper border-b-2 border-dashed border-ink/10 overflow-hidden relative">
        {/* Decorative doodles */}
        <div className="absolute top-10 right-[-5%] w-64 h-64 border-2 border-ink/5 rounded-full animate-wobble-slow -z-0" />
        <div className="absolute bottom-10 left-[-5%] w-48 h-48 border border-ink/5 rounded-wobbly-2 -z-0" />
        
        <div className="container relative z-10">
          <ScrollReveal direction="up" className="max-w-4xl mx-auto">
            <WobblyCard variant="default" className="bg-white/80 backdrop-blur-sm p-10 md:p-16 text-center border-drawn shadow-paper">
              <Tape className="top-[-20px] left-1/2 -translate-x-1/2 w-32 h-10" />
              
              <div className="space-y-6">
                <h2 className="text-5xl md:text-6xl font-heading text-ink">KNOW & GROW</h2>
                <p className="text-2xl md:text-3xl font-accent text-ink-navy rotate-[-1deg]">
                  Bio Physical Education Awareness, Mental Health Awareness & Social Media Awareness
                </p>
                
                <div className="h-px w-24 bg-ink/20 mx-auto my-8 border-dashed border-t-2" />
                
                <p className="text-xl md:text-2xl font-body text-ink/80 leading-relaxed max-w-3xl mx-auto">
                  A survey conducted exclusively for school children to understand awareness levels regarding mental health, social media usage, relationships, school environment, physical education, and overall well-being.
                </p>
                
                <div className="pt-8 space-y-6">
                  <Button 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfhtBWxFhzXxjqJTaN3TkpQfMzGC9uje1axFxLVLGAd5fRuLQ/viewform?pli=1" 
                    variant="primary" 
                    size="lg"
                    className="scale-110 md:scale-125"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Take the Survey
                  </Button>
                  
                  <p className="text-lg font-accent text-ink-faded italic">
                    "Your responses help improve awareness programs for students."
                  </p>
                </div>
              </div>
            </WobblyCard>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. IMPACT STATS - Sticky note grid */}
      <section className="bg-lined-paper py-20 sm:py-24 lg:py-32">
        <div className="container space-y-16">
          <SectionHeading
            eyebrow="Our Impact"
            title="Meaningful outcomes."
            description="Our work blends youth experience, accessible education, and community partnerships to create measurable change."
            highlightColor="pink"
          />
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
            {siteStats.map((stat, idx) => {
              const colors = ['yellow', 'pink', 'blue', 'green'] as const;
              return (
                <ScrollReveal key={stat.label} direction="up" delay={idx + 1} className="h-full">
                  <StatCard {...stat} stickyColor={colors[idx % 4]} />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. FOCUS AREAS - Drawn boxes */}
      <section className="py-20 sm:py-24 lg:py-32 bg-paper">
        <div className="container space-y-16">
          <SectionHeading
            eyebrow="What we do"
            title="Focused support."
            description="From mental wellness to digital wellbeing, each program is designed to feel safe and practical."
            highlightColor="green"
          />
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {focusAreas.map((area, idx) => (
              <ScrollReveal key={area.title} direction="up" delay={idx + 1} className="h-full">
                <FocusCard {...area} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. EDITORIAL STORYTELLING - The scrapbook spread */}
      <section className="py-20 sm:py-24 lg:py-32 overflow-hidden bg-graph-paper">
        <div className="container">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-center">
            <ScrollReveal direction="left" className="relative h-[500px]">
              {/* Photo placeholder collage */}
              <div className="absolute top-10 left-10 w-64 h-auto bg-white p-3 pb-8 shadow-sticky rotate-[-5deg] border border-ink/10 group hover:rotate-0 transition-transform duration-500">
                <Tape className="top-[-10px] left-1/2 -translate-x-1/2 w-20" />
                <div className="aspect-square w-full overflow-hidden border border-ink/20 bg-paper-lined">
                  <img src="/pic/workshop_pics/workshop-1.jpg" alt="Workshop photo" className="w-full h-full object-cover transition-scale duration-700 group-hover:scale-110" />
                </div>
                <p className="font-accent text-xl text-ink mt-3 text-center">Workshop photo</p>
              </div>
              <div className="absolute bottom-10 right-10 w-72 h-auto bg-white p-3 pb-8 shadow-sticky rotate-[4deg] border border-ink/10 z-10 group hover:rotate-0 transition-transform duration-500">
                <Tape className="top-[-10px] left-1/2 -translate-x-1/2 w-20" />
                <div className="aspect-[4/3] w-full overflow-hidden border border-ink/20 bg-paper-lined">
                  <img src="/pic/workshop_pics/workshop-2.jpg" alt="Community" className="w-full h-full object-cover transition-scale duration-700 group-hover:scale-110" />
                </div>
                <p className="font-accent text-xl text-ink mt-3 text-center">Community</p>
              </div>
              
              {/* Scribbles between photos */}
              <svg className="absolute inset-0 w-full h-full stroke-marker-pink fill-none z-0" strokeWidth="4" strokeLinecap="round">
                <path d="M 100 200 Q 200 100 300 200 T 400 300" />
              </svg>
            </ScrollReveal>
            
            <ScrollReveal direction="right" className="space-y-8">
              <div className="inline-block relative">
                <p className="font-accent text-3xl text-ink-navy rotate-[2deg] inline-block px-4 py-1">Stories that matter</p>
                <div className="absolute inset-0 border-2 border-dashed border-ink rounded-wobbly-1 -z-10" />
              </div>
              <h2 className="text-5xl sm:text-6xl font-heading text-ink leading-tight">
                Youth experiences that <span className="highlight-yellow">guide</span> our work.
              </h2>
              <p className="text-2xl font-body text-ink/80 leading-relaxed font-medium">
                Real voices shape our programs. We don't guess what young people need; we listen. Every workshop, resource, and session is centered on compassion.
              </p>
              
              <div className="mt-8 relative">
                <WobblyCard variant="sticky-yellow" tape className="rotate-[1deg]">
                  <p className="font-accent text-4xl leading-relaxed text-ink mb-4">
                    "The most powerful thing an adult can do is simply hold space without rushing to fix everything."
                  </p>
                  <p className="text-xl font-heading text-ink-navy text-right">
                    — Focus Group Participant, 17
                  </p>
                </WobblyCard>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 6. YOUTH VOICES - Notice board */}
...
      {/* WORKSHOP HIGHLIGHTS GALLERY */}
      <section className="py-20 sm:py-24 lg:py-32 bg-graph-paper overflow-hidden">
        <div className="container space-y-16">
          <SectionHeading
            eyebrow="Moments in action"
            title="Workshop Highlights."
            description="A glimpse into our recent sessions with schools and youth communities."
            center
            highlightColor="yellow"
          />
          
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pt-8">
            {workshopImages.map((image, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx + 1}>
                <div className="group relative bg-white p-3 pb-12 shadow-sticky rotate-[-2deg] hover:rotate-0 transition-transform duration-500 border border-ink/10 h-full">
                  <Tape className="top-[-10px] left-1/2 -translate-x-1/2 w-20" />
                  <div className="aspect-square w-full overflow-hidden border border-ink/20 bg-paper-lined">
                    <img 
                      src={image.url} 
                      alt={image.caption} 
                      className="w-full h-full object-cover transition-scale duration-700 group-hover:scale-110" 
                    />
                  </div>
                  <p className="font-accent text-xl text-ink mt-4 text-center">{image.caption}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RESOURCES - Polaroids */}
      <section className="py-20 sm:py-24 lg:py-32 bg-lined-paper">
        <div className="container space-y-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Resources"
              title="Guides for youth wellbeing."
              description="Browse articles designed to help young people build safer environments."
            />
            <Link href="/resources" className="font-heading text-2xl text-ink underline decoration-wavy decoration-ink/40 hover:decoration-ink transition-colors pb-2">
              View all resources →
            </Link>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {blogPosts.map((post, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx + 1} className="h-full">
                <BlogCard {...post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. VOLUNTEER CTA - Drawn flyer */}
      <section className="py-20 lg:py-32 bg-paper relative overflow-hidden">
        <div className="container">
          <ScrollReveal direction="up">
            <div className="bg-white border-4 border-ink rounded-wobbly-2 p-12 lg:p-20 shadow-[12px_12px_0px_0px_var(--ink-charcoal)] max-w-5xl mx-auto relative">
              <Tape className="top-[-15px] w-24 h-8" />
              <Tape className="bottom-[-15px] left-10 w-20 h-6 rotate-[15deg]" />
              
              <div className="grid lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
                <div className="space-y-8">
                  <h2 className="text-5xl sm:text-7xl font-heading text-ink leading-[1.1]">
                    Help shape a <span className="highlight-yellow">safer future</span>.
                  </h2>
                  <p className="text-2xl font-body text-ink/80 leading-relaxed font-medium">
                    Volunteers bring warmth, perspective, and consistency to every initiative. Your time can create trusted change.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 pt-4">
                    <Button href="/volunteer" variant="primary" size="lg">Get involved</Button>
                  </div>
                </div>
                
                <div className="relative">
                   <div className="absolute inset-0 bg-marker-pink/20 rounded-full blur-2xl"></div>
                   <svg viewBox="0 0 200 200" className="w-full h-full stroke-ink fill-none" strokeWidth="4" strokeLinecap="round">
                     <path d="M50,100 A50,50 0 1,1 150,100 A50,50 0 1,1 50,100" strokeDasharray="10,10" />
                     <path d="M80,90 L100,110 L140,70" stroke="var(--ink-red)" strokeWidth="8" />
                   </svg>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. SAFE SUPPORT CTA - Emergency Note */}
      <section className="py-24 bg-graph-paper relative z-10 border-t-2 border-dashed border-ink/20">
        <ScrollReveal direction="up" className="container max-w-3xl text-center space-y-8">
          <WobblyCard variant="sticky-pink" tape className="inline-block p-4 mb-8 rotate-[-2deg]">
            <span className="font-accent text-5xl">♥</span>
          </WobblyCard>
          <h2 className="text-5xl sm:text-6xl font-heading text-ink leading-tight">
            You deserve care, understanding, and respect.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-8">
            <Button href="/emergency-help" variant="red" size="lg">
              Emergency help
            </Button>
            <Button href="/contact" variant="ghost" size="lg">Contact us</Button>
          </div>
          <p className="text-xl font-body text-ink-faded font-medium pt-8">
            All communication is confidential and judgment-free.
          </p>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
ct" variant="ghost" size="lg">Contact us</Button>
          </div>
          <p className="text-xl font-body text-ink-faded font-medium pt-8">
            All communication is confidential and judgment-free.
          </p>
        </ScrollReveal>
      </section>

      <Footer />
    </main>
  );
}
