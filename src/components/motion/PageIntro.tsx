import { site } from "@content/index";

// Short curtain shown when the page loads. Pure CSS (see .page-intro).
export default function PageIntro() {
  return (
    <div className="page-intro" aria-hidden="true">
      <span className="font-display text-3xl text-fg sm:text-4xl">
        {site.name}
        <span className="text-accent">.</span>
      </span>
    </div>
  );
}
