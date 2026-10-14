"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, m } from "framer-motion";
import { useLenis } from "lenis/react";
import { navItems, site } from "@content/index";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollToId } from "@/hooks/useScrollToId";
import Container from "./Container";

const ids = ["top", ...navItems.map((n) => n.id)];

export default function Nav() {
  const active = useActiveSection(ids);
  const scrollTo = useScrollToId();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Frosted background once the page has scrolled a little
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open; close on Escape
  useEffect(() => {
    if (!open) return;
    lenis?.stop();
    document.documentElement.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      lenis?.start();
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, lenis]);

  const go = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    setOpen(false);
    // let the menu release the scroll lock first
    setTimeout(() => scrollTo(id), open ? 60 : 0);
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${
          scrolled || open
            ? "border-b border-line bg-bg/80 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <Container className="flex h-16 items-center justify-between">
          <a
            href="#"
            onClick={go("top")}
            className="group flex items-center gap-2.5"
            >
            <Image
            src={site.avatar.src}
            alt=""
            width={64}
            height={64}
            className="size-8 rounded-full border border-line-strong object-cover transition-colors group-hover:border-accent/60"
          />
            <span className="font-display text-xl text-fg">
              {site.name}
            </span>
          </a>

          {/* Desktop links */}
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={go(item.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative block rounded-full px-3.5 py-2 text-sm transition-colors ${
                        isActive ? "text-fg" : "text-muted hover:text-fg"
                      }`}
                    >
                      {isActive && (
                        <m.span
                          layoutId="nav-active"
                          className="absolute inset-0 -z-10 rounded-full border border-line-strong bg-surface-2"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 32,
                          }}
                        />
                      )}
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.resume.href}
              download={site.resume.downloadName}
              className="hidden rounded-full border border-line-strong px-4 py-2 text-sm text-fg transition-colors hover:border-accent/60 hover:text-accent sm:inline-block"
            >
              Resume
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative grid size-10 place-items-center rounded-full border border-line-strong md:hidden"
            >
              <span
                className={`absolute h-px w-4 bg-fg transition-transform duration-300 ${
                  open ? "rotate-45" : "-translate-y-[3px]"
                }`}
              />
              <span
                className={`absolute h-px w-4 bg-fg transition-transform duration-300 ${
                  open ? "-rotate-45" : "translate-y-[3px]"
                }`}
              />
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open && (
          <m.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed z-40 inset-x-0 top-16 bottom-0 bg-bg md:hidden"
          >
            <nav aria-label="Mobile" className="px-5 pt-6">
              <ul className="flex flex-col">
                {navItems.map((item, i) => (
                  <m.li
                    key={item.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.35 }}
                    className="border-b border-line"
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={go(item.id)}
                      aria-current={active === item.id ? "true" : undefined}
                      className={`flex items-baseline justify-between py-5 font-display text-3xl ${
                        active === item.id ? "text-accent" : "text-fg"
                      }`}
                    >
                      {item.label}
                      <span className="font-mono text-xs text-subtle">
                        0{i + 1}
                      </span>
                    </a>
                  </m.li>
                ))}
              </ul>
              <a
                href={site.resume.href}
                download={site.resume.downloadName}
                className="mt-8 inline-block rounded-full border border-line-strong px-5 py-3 text-sm text-fg"
              >
                Download resume
              </a>
            </nav>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
