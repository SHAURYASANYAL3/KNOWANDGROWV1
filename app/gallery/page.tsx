import Link from 'next/link';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';
import WobblyCard from '../../components/ui/WobblyCard';
import { albums } from '../../lib/content';

export const metadata = {
  title: 'Gallery | KNOW & GROW',
  description: 'Explore photos and moments from our workshops, school visits, and community initiatives.'
};

export default function GalleryDirectoryPage() {
  return (
    <main className="min-h-screen bg-paper text-ink overflow-hidden selection:bg-marker-yellow">
      <Header />

      <section className="relative pt-20 pb-24 bg-graph-paper border-b-4 border-dashed border-ink/20">
        <div className="container relative z-10">
          <ScrollReveal direction="up" className="text-center">
            <SectionHeading 
              eyebrow="Gallery" 
              title="Our Moments & Memories" 
              description="A visual journey of our workshops, school visits, and community initiatives."
              center 
              highlightColor="pink"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="container py-24 bg-paper">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {albums.map((album, index) => {
            const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2'];
            const rotation = rotations[index % rotations.length];

            return (
              <ScrollReveal key={album.slug} direction="up" delay={(index % 4) + 1}>
                <Link href={`/gallery/${album.slug}`} className="block group">
                  <WobblyCard 
                    variant="sticky-yellow" 
                    tape 
                    className={`h-full ${rotation} group-hover:rotate-0 transition-transform duration-300 group-hover:scale-105`}
                  >
                    <div className="relative aspect-video w-full bg-ink/5 border-2 border-dashed border-ink/20 rounded overflow-hidden mb-6">
                      <Image
                        src={album.coverImage}
                        alt={`Cover photo for ${album.title}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="space-y-3">
                      <p className="font-accent text-xl text-ink-faded">{album.date}</p>
                      <h3 className="font-heading text-3xl text-ink leading-tight">{album.title}</h3>
                      <p className="font-body text-lg text-ink/80 line-clamp-3">{album.description}</p>
                    </div>
                  </WobblyCard>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      <Footer />
    </main>
  );
}
