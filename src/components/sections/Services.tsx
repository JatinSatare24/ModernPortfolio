import { services } from "@content/index";
import Container from "@/components/layout/Container";
import AnchorLink from "@/components/motion/AnchorLink";
import Reveal from "@/components/motion/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { primaryClass } from "@/components/ui/Buttons";
import { ArrowRight, Globe, Layout, Store } from "@/components/ui/Icons";

const icons = {
  website: <Globe className="size-6" />,
  store: <Store className="size-6" />,
  app: <Layout className="size-6" />,
};

export default function Services() {
  return (
    <section id="services" className="section-rule py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading eyebrow={services.eyebrow} heading={services.heading} />

        <ul className="grid gap-4 sm:gap-5 md:grid-cols-3">
          {services.items.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.08} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-surface p-6 shadow-card sm:p-7">
                  <span className="grid size-12 place-items-center rounded-xl bg-accent-soft text-accent-strong">
                    {icons[s.icon]}
                  </span>
                  <h3 className="mt-5 font-display text-xl text-fg">{s.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-8 sm:mt-10">
          <AnchorLink to="contact" className={primaryClass}>
            {services.cta}
            <ArrowRight />
          </AnchorLink>
        </Reveal>
      </Container>
    </section>
  );
}
