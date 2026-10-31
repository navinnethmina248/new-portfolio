import SectionHeading from "../components/SectionHeading";
import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
        />

        <ol className="relative ml-2 space-y-10 border-l border-line">
          {experience.map(({ role, org, period, points }) => (
            <li key={`${role}-${org}`} className="relative pl-8">
              <span
                aria-hidden="true"
                className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-accent"
              />
              <p className="font-mono text-xs uppercase tracking-widest text-muted">
                {period}
              </p>
              <h3 className="mt-1 font-display text-lg font-semibold text-ink">
                {role} <span className="text-muted">· {org}</span>
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
