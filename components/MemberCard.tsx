interface MemberCardProps {
  name: string;
  role: string;
  description: string;
  image?: string;
}

export default function MemberCard({ name, role, description, image }: MemberCardProps) {
  return (
    <article className="paper-card overflow-hidden">
      <div className="aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-accent/10 to-accent2/10 flex items-center justify-center">
        {image ? (
          <img 
            src={image} 
            alt={name} 
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="text-accent/40 font-heading text-6xl select-none">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground">{name}</h3>
        <p className="text-sm font-medium text-accent uppercase tracking-wider">{role}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          {description}
        </p>
      </div>
    </article>
  );
}
