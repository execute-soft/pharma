export function MedCrossPattern() {
  return (
    <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" aria-hidden xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="med-cross" width="36" height="36" patternUnits="userSpaceOnUse">
          <path d="M18 4v28M4 18h28" stroke="currentColor" strokeWidth="1" opacity="0.35" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#med-cross)" className="text-cyan-300 dark:text-emerald-400" />
    </svg>
  );
}
