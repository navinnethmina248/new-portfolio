import { site } from "../data/site";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.fullName}. Built with React, TypeScript &amp; Tailwind CSS.
        </p>
        <SocialLinks />
      </div>
    </footer>
  );
}
