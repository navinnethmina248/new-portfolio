import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: Variant;
  href?: string;
  download?: boolean;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-colors duration-200 cursor-pointer";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-surface hover:bg-accent hover:text-white",
  secondary:
    "border border-line bg-surface text-ink hover:border-accent hover:text-accent",
  ghost: "text-muted hover:text-ink",
};

export default function Button({
  children,
  variant = "primary",
  href,
  download,
  external,
  type = "button",
  onClick,
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        download={download}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : undefined)}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
