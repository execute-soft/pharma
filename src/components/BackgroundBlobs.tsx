export function BackgroundBlobs() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      <span className="absolute -top-16 -left-16 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl dark:bg-cyan-600/30" />
      <span className="absolute bottom-[-60px] right-[-60px] h-[28rem] w-[28rem] rounded-full bg-emerald-200/40 blur-3xl dark:bg-emerald-600/30" />
    </div>
  );
}
