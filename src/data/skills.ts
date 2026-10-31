// TODO: Keep only skills you can confidently discuss in an interview.

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Java", "Python", "SQL"],
  },
  {
    category: "Front-end",
    items: ["React", "Angular", "Tailwind CSS", "HTML5", "CSS3", "Vite"],
  },
  {
    category: "Back-end & Data",
    items: ["Node.js", "REST APIs", "MySQL", "MongoDB"],
  },
  {
    category: "Tools & Practices",
    items: ["Git & GitHub", "ESLint", "Responsive design", "Agile / Scrum"],
  },
];
