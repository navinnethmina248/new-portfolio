import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          subtitle="A selection of projects that show how I design, build and finish software."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
        <a
          href="https://github.com/navinnethmina248/DecodeLabs-Internship"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-ink transition-colors hover:text-accent"
        >
          All three projects on GitHub <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
