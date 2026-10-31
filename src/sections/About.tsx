import SectionHeading from "../components/SectionHeading";
import { site } from "../data/site";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading eyebrow="About" title="A bit about me" />

        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4 leading-relaxed text-muted">
            {site.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <dl className="space-y-4 rounded-xl border border-line bg-surface p-6">
            {site.highlights.map(({ label, value }) => (
              <div key={label}>
                <dt className="font-mono text-xs uppercase tracking-widest text-accent">
                  {label}
                </dt>
                <dd className="mt-1 text-ink">{value}</dd>
              </div>
            ))}
            <div>
              <dt className="font-mono text-xs uppercase tracking-widest text-accent">
                Based in
              </dt>
              <dd className="mt-1 text-ink">{site.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
