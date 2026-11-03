import { skillIcon, techIcons } from "./techIcons";

// Small colored logo for a skill. Renders nothing if the skill has no icon,
// so concept skills (e.g. "RAG", "REST APIs") stay as plain text.
export default function TechIcon({
  name,
  className = "size-4",
}: {
  name: string;
  className?: string;
}) {
  const icon = techIcons[skillIcon[name]];
  if (!icon) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill={icon.color}
      aria-hidden
      className={`shrink-0 ${className}`}
    >
      <path d={icon.path} />
    </svg>
  );
}
