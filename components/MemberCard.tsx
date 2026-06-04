'use client';

import { motion } from 'framer-motion';

interface MemberCardProps {
  name: string;
  role: string;
  description: string;
  image?: string;
}

export default function MemberCard({ name, role, description, image }: MemberCardProps) {
  return (
    <motion.article 
      whileHover={{ y: -5 }}
      className="paper-card overflow-hidden group h-full flex flex-col"
    >
      <div className="aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-accent/10 to-accent2/10 flex items-center justify-center relative">
        {image ? (
          <motion.img 
            initial={{ scale: 1.1 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            src={image} 
            alt={name} 
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="text-accent/40 font-heading text-6xl select-none">
            {name.charAt(0)}
          </div>
        )}
        <div className="absolute inset-0 bg-ink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">{name}</h3>
        <p className="text-sm font-medium text-accent uppercase tracking-wider mt-1">{role}</p>
        <div className="mt-4 h-1 w-12 bg-accent/20 group-hover:w-full transition-all duration-500" />
        <p className="mt-4 text-sm leading-relaxed text-muted flex-grow">
          {description}
        </p>
      </div>
    </motion.article>
  );
}
