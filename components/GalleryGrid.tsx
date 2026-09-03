'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';
import WobblyCard from './ui/WobblyCard';

export default function GalleryGrid({ images }: { images: { url: string; caption: string }[] }) {
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null);

  // Lock body scroll when modal is open
  if (typeof window !== 'undefined') {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }

  return (
    <>
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((img, index) => {
          const rotations = ['rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-3', '-rotate-3'];
          const rotation = rotations[index % rotations.length];
          
          return (
            <ScrollReveal key={img.url} direction="up" delay={(index % 4) + 1}>
              <div 
                className="cursor-pointer group" 
                onClick={() => setSelectedImage(img)}
              >
                <WobblyCard 
                  variant="polaroid" 
                  tape 
                  className={`h-full ${rotation} group-hover:rotate-0 transition-all duration-300 group-hover:scale-105 group-hover:z-10`}
                >
                  <div className="relative aspect-square w-full bg-ink/5 border-2 border-dashed border-ink/20 rounded overflow-hidden">
                    <Image
                      src={img.url}
                      alt={img.caption}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <p className="font-accent text-2xl text-ink">{img.caption}</p>
                  </div>
                </WobblyCard>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/80 backdrop-blur-sm p-4 sm:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 bg-paper rounded-full text-ink hover:bg-marker-pink transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={24} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, y: 20, rotate: -2 }}
              animate={{ scale: 1, y: 0, rotate: 0 }}
              exit={{ scale: 0.9, y: 20, rotate: 2 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] aspect-auto bg-paper p-4 sm:p-6 rounded-wobbly-2 border-4 border-ink shadow-[12px_12px_0px_0px_var(--ink-charcoal)]"
              onClick={(e) => e.stopPropagation()} // Prevent clicks on image from closing
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-12 bg-marker-yellow/50 -rotate-2 -z-10 blur-sm"></div>
              
              <div className="relative w-full h-[70vh] sm:h-[75vh]">
                <Image
                  src={selectedImage.url}
                  alt={selectedImage.caption}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  quality={100}
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-accent text-3xl text-ink">{selectedImage.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
