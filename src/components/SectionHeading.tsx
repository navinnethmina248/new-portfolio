type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-muted">{subtitle}</p>}
    </div>
  );
}
