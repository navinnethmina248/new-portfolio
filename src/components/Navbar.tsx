import { useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { navItems, site } from "../data/site";

type NavbarProps = {
  scrolled: boolean;
  activeSection: string;
};

export default function Navbar({ scrolled, activeSection }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-base/85 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        className="container-page flex h-16 items-center justify-between"
        aria-label="Primary"
      >
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-ink"
        >
          {site.name}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={activeSection === id ? "true" : undefined}
                className={`rounded-md px-3 py-2 text-sm transition-colors duration-200 ${
                  activeSection === id
                    ? "text-accent"
                    : "text-muted hover:text-ink"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line text-ink md:hidden"
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="container-page flex flex-col pb-4 md:hidden">
          {navItems.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-md px-3 py-3 text-base ${
                  activeSection === id ? "text-accent" : "text-muted"
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
