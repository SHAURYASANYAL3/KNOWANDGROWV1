import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import SectionHeading from '../../../components/SectionHeading';
import ScrollReveal from '../../../components/ui/ScrollReveal';
import GalleryGrid from '../../../components/GalleryGrid';
import { albums } from '../../../lib/content';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export function generateStaticParams() {
  return albums.map((album) => ({
    slug: album.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const album = albums.find(a => a.slug === params.slug);
  if (!album) return { title: 'Not Found' };
  
  return {
    title: `${album.title} | Gallery | KNOW & GROW`,
    description: album.description
  };
}

export default function AlbumPage({ params }: { params: { slug: string } }) {
  const album = albums.find(a => a.slug === params.slug);
  
  if (!album) {
    notFound();
  }

  const imagesDir = path.join(process.cwd(), 'public', 'pic', album.folder);
  let imagesData: { url: string; caption: string }[] = [];
  
  try {
    if (fs.existsSync(imagesDir)) {
      const files = fs.readdirSync(imagesDir);
      const sortedFiles = files
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
        .sort((a, b) => {
          const numA = parseInt(a.replace(/\D/g, '')) || 0;
          const numB = parseInt(b.replace(/\D/g, '')) || 0;
          return numA - numB;
        });

      imagesData = sortedFiles.map((file, index) => ({
        url: `/pic/${album.folder}/${file}`,
        caption: album.captions[index] || album.title
      }));
    }
  } catch (error) {
    console.error(`Error reading gallery directory for ${album.slug}:`, error);
  }

  return (
    <main className="min-h-screen bg-paper text-ink overflow-hidden selection:bg-marker-yellow">
      <Header />

      <section className="relative pt-20 pb-24 bg-graph-paper border-b-4 border-dashed border-ink/20">
        <div className="container relative z-10">
          <div className="mb-12">
            <Link 
              href="/gallery" 
              className="inline-flex items-center gap-2 font-accent text-xl text-ink-navy hover:-translate-x-1 transition-transform"
            >
              <ArrowLeft size={20} />
              Back to all albums
            </Link>
          </div>
          <ScrollReveal direction="up" className="text-center">
            <SectionHeading 
              eyebrow={album.date} 
              title={album.title} 
              description={album.description}
              center 
              highlightColor="pink"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="container py-24 bg-paper">
        {imagesData.length > 0 ? (
          <GalleryGrid images={imagesData} />
        ) : (
          <div className="text-center py-12">
            <p className="font-body text-xl text-ink/70">No images found for this album.</p>
          </div>
        )}
      </section>

      <Footer />
    </main>
  );
}
