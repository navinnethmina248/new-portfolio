// TODO: Replace with your real roles, internships, projects or volunteering.
// Newest first.

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "SAP Intern",
    org: "CBL Corporation",
    period: "17 Dec 2025 – 16 Jun 2026",
    points: [
      "Gained hands-on exposure to real-world project processes and business functions across different sections of the organization.",
    ],
  },
  {
    role: "Python Developer (Remote)",
    org: "DecodeLabs",
    period: "25 Jul 2026 – 25 Aug 2026",
    points: [
      "Completed three development projects as internship tasks, applying Python development skills to practical work.",
    ],
  },
];
