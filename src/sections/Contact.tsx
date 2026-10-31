import { useState } from "react";
import type { FormEvent } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import Button from "../components/Button";
import SectionHeading from "../components/SectionHeading";
import SocialLinks from "../components/SocialLinks";
import { createGmailComposeUrl, site } from "../data/site";

const fieldClasses =
  "w-full rounded-lg border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-muted/70 focus:border-accent focus:outline-none";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // No backend needed: the form opens a pre-filled Gmail compose page.
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = `Portfolio enquiry from ${name}`;
    const body = `${message}\n\n— ${name} (${email})`;
    window.location.href = createGmailComposeUrl({ subject, body });
  };

  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          subtitle="I'm open to internships and full-time software development roles. Send a message and I'll reply quickly."
        />

        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-sm text-muted">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  autoComplete="name"
                  className={fieldClasses}
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  autoComplete="email"
                  className={fieldClasses}
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about the role or project..."
                className={fieldClasses}
              />
            </div>
            <Button type="submit">
              Send message <FaPaperPlane aria-hidden="true" />
            </Button>
          </form>

          <aside className="rounded-xl border border-line bg-surface p-6">
            <h3 className="font-display text-lg font-semibold text-ink">
              Prefer a direct line?
            </h3>
            <p className="mt-2 text-sm text-muted">
              Email me at{" "}
              <a
                href={createGmailComposeUrl()}
                className="text-accent underline-offset-4 hover:underline"
              >
                {site.email}
              </a>{" "}
              or find me online.
            </p>
            <SocialLinks className="mt-5" />
          </aside>
        </div>
      </div>
    </section>
  );
}
