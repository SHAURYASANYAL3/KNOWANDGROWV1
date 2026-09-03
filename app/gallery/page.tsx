import fs from 'fs';
import path from 'path';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';
import ScrollReveal from '../../components/ui/ScrollReveal';
import GalleryGrid from '../../components/GalleryGrid';
import { walterPrimaryCaptions } from '../../lib/content';

export default function GalleryPage() {
  const imagesDir = path.join(process.cwd(), 'public', 'pic', 'Walter_primary_school_workshop');
  let imagesData: { url: string; caption: string }[] = [];
  try {
    const files = fs.readdirSync(imagesDir);
    const sortedFiles = files
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .sort((a, b) => {
        // Extract numbers from "walter-primary-workshop-X.jpeg"
        const numA = parseInt(a.replace(/\D/g, '')) || 0;
        const numB = parseInt(b.replace(/\D/g, '')) || 0;
        return numA - numB;
      });

    imagesData = sortedFiles.map((file, index) => ({
      url: `/pic/Walter_primary_school_workshop/${file}`,
      caption: walterPrimaryCaptions[index] || 'Walter Primary Workshop'
    }));
  } catch (error) {
    console.error('Error reading gallery directory:', error);
  }

  return (
    <main className="min-h-screen bg-paper text-ink overflow-hidden selection:bg-marker-yellow">
      <Header />

      <section className="relative pt-20 pb-24 bg-graph-paper border-b-4 border-dashed border-ink/20">
        <div className="container relative z-10">
          <ScrollReveal direction="up" className="text-center">
            <SectionHeading 
              eyebrow="Gallery" 
              title="Walter Primary School Workshop" 
              description="A glimpse into our recent workshop and activities."
              center 
              highlightColor="pink"
            />
          </ScrollReveal>
        </div>
      </section>

      <section className="container py-24 bg-paper">
        <GalleryGrid images={imagesData} />
      </section>

      <Footer />
    </main>
  );
}
