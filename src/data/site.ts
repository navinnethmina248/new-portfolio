// TODO: Replace every placeholder in this file with your real details.
// This is the single place for your name, contact info and links.

export type NavItem = { id: string; label: string };

export const site = {
  name: "Navin",
  fullName: "Navin", // TODO: add your surname
  role: "Software Engineer",
  headline: "I build clean, reliable web software.",
  intro:
    "Information Technology undergraduate based in Kadawatha, Sri Lanka, focused on building clean, reliable web software.",
  location: "Kadawatha, Sri Lanka",
  availability: "Open to internships & full-time roles",
  email: "navinnethmina2001@gmail.com",
  cvPath: "/Navin-CV.pdf",
  socials: {
    github: "https://github.com/navinnethmina248",
    linkedin: "https://www.linkedin.com/in/navin-nethmina-9a3935366",
  },
  about: [
    "I'm an Information Technology undergraduate who enjoys the full journey from a rough idea to a polished, shipped interface.",
    "Most of my work centres on component-driven front ends, clean data flow and developer experience. I also take part in academic research, which keeps me curious about how things work under the hood.",
    "I'm looking for a team where I can contribute from day one, learn from experienced engineers and keep raising the bar on quality.",
  ],
  highlights: [
    { label: "Focus", value: "Front-end & full-stack web" },
    { label: "Education", value: "Information Technology undergraduate" },
    { label: "Also into", value: "Research & problem solving" },
  ],
  research: {
    title:
      "AI-Powered Knowledge Extraction & Content Generation Framework for Educational Videos and Podcasts",
    status: "Academic research project",
    summary:
      "The framework turns educational videos and podcasts into useful learning materials. My component takes the extracted JSON produced by Component 1, fuses the semantic knowledge, and generates summaries, short notes, and quizzes in multiple languages.",
    role:
      "Developed the second component: semantic knowledge fusion and multilingual content generation. Implemented the Python backend, worked with AI models and trained some models. The project uses a React frontend and MongoDB database.",
    topics: [
      "Semantic Knowledge Fusion",
      "Multilingual Content Generation",
      "Python",
      "AI Models",
      "React",
      "MongoDB",
      "Summaries, Notes & Quizzes",
    ],
    link: "",
  },
} as const;

export function createGmailComposeUrl({
  subject,
  body,
}: { subject?: string; body?: string } = {}) {
  const url = new URL("https://mail.google.com/mail/");
  url.searchParams.set("view", "cm");
  url.searchParams.set("fs", "1");
  url.searchParams.set("to", site.email);
  if (subject) url.searchParams.set("su", subject);
  if (body) url.searchParams.set("body", body);
  return url.toString();
}

export const navItems: NavItem[] = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];
