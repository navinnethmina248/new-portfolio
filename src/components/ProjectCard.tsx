import { useState } from "react";
import { FaArrowUpRightFromSquare, FaCode, FaGithub } from "react-icons/fa6";
import type { Project } from "../data/projects";

type ProjectCardProps = Project & { index: number };

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  repo,
  live,
  featured,
  index,
}: ProjectCardProps) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-[0_8px_30px_#25231f08] transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/60 hover:shadow-[0_20px_45px_#25231f14] ${featured ? "md:col-span-2" : ""}`}>
      <div className={`relative overflow-hidden bg-raised ${featured ? "aspect-[2.4/1]" : "aspect-video"}`}>
        {imageFailed ? (
          <div
            className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/20 via-raised to-mint/10 text-accent"
            aria-hidden="true"
          >
            <FaCode className="text-4xl" />
          </div>
        ) : (
          <img
            src={image}
            alt={`Screenshot of ${title}`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        )}
        <span className="absolute left-4 top-4 rounded-full border border-white/60 bg-surface/90 px-3 py-1 font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-ink backdrop-blur-sm">
          {String(index + 1).padStart(2, "0")} / {featured ? "Featured work" : "Selected work"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li key={t} className="chip">
              {t}
            </li>
          ))}
        </ul>

        {(repo || live) && (
          <div className="mt-5 flex items-center gap-4 text-sm">
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <FaGithub aria-hidden="true" /> Code
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <FaArrowUpRightFromSquare aria-hidden="true" /> Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
