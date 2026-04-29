export function SectionHeading({
  eyebrow,
  title,
  description,
}: { eyebrow?: string; title: string; description?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14 animate-fade-up">
      {eyebrow && (
        <p className="font-display text-xs tracking-[0.3em] text-primary mb-3 uppercase">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        <span className="text-gradient">{title}</span>
      </h2>
      {description && (
        <p className="text-muted-foreground mt-4 leading-relaxed">{description}</p>
      )}
    </div>
  );
}
