import type { SkillGroup } from "../data/skills";

export default function SkillCard({ category, items }: SkillGroup) {
  return (
    <div className="rounded-xl border border-line bg-surface p-6 transition-colors duration-200 hover:border-accent/50">
      <h3 className="mb-4 font-display text-lg font-semibold text-ink">
        {category}
      </h3>
      <ul className="flex flex-wrap gap-2">
        {items.map((item) => (
          <li key={item} className="chip">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
