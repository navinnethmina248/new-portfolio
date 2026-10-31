// Put screenshots in public/images/projects/ and reference them below.

export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  repo?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "To-Do List Web Application",
    description:
      "A user-friendly application that helps users organize and manage their day-to-day tasks with ease.",
    tech: ["Angular", "TypeScript", "HTML", "CSS"],
    image: "/images/projects/project-01.jpg",
    repo: "https://github.com/navinnethmina248/DecodeLabs-Internship",
    live: "", // TODO
    featured: true,
  },
  {
    title: "Expense Tracker Web Application",
    description:
      "An application for tracking income and expenses, helping users manage their finances and plan for future investments.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    image: "/images/projects/project-02.jpg",
    repo: "https://github.com/navinnethmina248/DecodeLabs-Internship",
    live: "",
  },
  {
    title: "General Knowledge Quiz Web Application",
    description:
      "A quiz application that generates general knowledge quizzes, evaluates answers, and awards users for their results.",
    tech: ["Node.js", "REST API", "SQL"],
    image: "/images/projects/project-03.jpg",
    repo: "https://github.com/navinnethmina248/DecodeLabs-Internship",
    live: "",
  },
];
