export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-[0.72rem] font-medium text-accent-strong">
      {children}
    </span>
  );
}
