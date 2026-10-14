export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-line-strong bg-surface-2/60 px-3 py-1 font-mono text-[0.72rem] text-muted">
      {children}
    </span>
  );
}
