import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { createGmailComposeUrl, site } from "../data/site";

const links = [
  { label: "GitHub", href: site.socials.github, Icon: FaGithub },
  { label: "LinkedIn", href: site.socials.linkedin, Icon: FaLinkedinIn },
  { label: "Email", href: createGmailComposeUrl(), Icon: FaEnvelope },
];

export default function SocialLinks({ className = "" }: { className?: string }) {
  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            {...(href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : undefined)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-line bg-surface text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            <Icon aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}
