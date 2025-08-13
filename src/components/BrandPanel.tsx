export function BrandPanel() {
  return (
    <div className="relative hidden items-center justify-center p-12 lg:flex">
      <div className="max-w-lg">
        <div className="mb-6 inline-flex items-center gap-3">
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/20">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M10 4h4a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h4V6a2 2 0 0 1 2-2Z" fill="currentColor" />
            </svg>
          </span>
          <span className="text-2xl font-semibold tracking-tight text-cyan-900 dark:text-cyan-50">Pharma</span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight text-cyan-900 dark:text-cyan-50">Your trusted pharmacy platform</h1>
        <p className="mt-3 text-cyan-900/70 dark:text-cyan-50/70">Manage prescriptions, inventory, and patient records with a secure and intuitive experience.</p>

        <div className="relative mt-10 h-40">
          <div className="absolute left-2 top-0 h-6 w-24 -rotate-6 rounded-full [background:linear-gradient(90deg,#06b6d4_0%,#06b6d4_50%,#10b981_50%,#10b981_100%)] shadow-md shadow-cyan-500/10" />
          <div className="absolute right-8 top-6 h-6 w-28 rotate-6 rounded-full [background:linear-gradient(90deg,#10b981_0%,#10b981_50%,#22d3ee_50%,#22d3ee_100%)] shadow-md shadow-emerald-500/10" />
          <div className="absolute left-24 bottom-2 h-6 w-20 -rotate-12 rounded-full [background:linear-gradient(90deg,#22d3ee_0%,#22d3ee_50%,#34d399_50%,#34d399_100%)] shadow-md shadow-teal-500/10" />
        </div>
      </div>
    </div>
  );
}
