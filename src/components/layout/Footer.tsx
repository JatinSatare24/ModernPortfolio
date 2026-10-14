import { site, socials } from "@content/index";
import Container from "./Container";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <footer className="section-rule">
      <Container className="flex flex-col items-start justify-between gap-4 py-8 sm:flex-row sm:py-10 sm:items-center">
        <p className="text-sm text-subtle">
          © {new Date().getFullYear()} {site.name}
        </p>

        <ul className="flex items-center gap-6">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-accent"
              >
                {s.label}
              </a>
            </li>
          ))}
          <li>
            <BackToTop />
          </li>
        </ul>
      </Container>
    </footer>
  );
}
