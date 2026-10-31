import SectionHeading from "../components/SectionHeading";
import SkillCard from "../components/SkillCard";
import { skills } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          subtitle="The languages, frameworks and practices I use to build and ship software."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {skills.map((group) => (
            <SkillCard key={group.category} {...group} />
          ))}
        </div>
      </div>
    </section>
  );
}
