import { FaArrowUpRightFromSquare, FaFlask } from "react-icons/fa6";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import { site } from "../data/site";

export default function Research() {
  const { title, status, summary, role, topics, link } = site.research;

  return (
    <section id="research" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Research"
          title="Academic research"
          subtitle="Alongside building products, I investigate open problems the way researchers do."
        />

        <article className="rounded-xl border border-line bg-surface p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent"
              aria-hidden="true"
            >
              <FaFlask />
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-1 text-sm text-mint">{status}</p>
            </div>
          </div>

          <p className="mt-5 leading-relaxed text-muted">{summary}</p>
          <p className="mt-3 text-sm text-muted">
            <span className="text-ink">My role: </span>
            {role}
          </p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <li key={topic} className="chip">
                {topic}
              </li>
            ))}
          </ul>

          {link && (
            <div className="mt-6">
              <Button href={link} variant="secondary" external>
                View research <FaArrowUpRightFromSquare aria-hidden="true" />
              </Button>
            </div>
          )}
        </article>
      </div>
    </section>
  );
}
