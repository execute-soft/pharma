import LoginForm from "@/forms/LoginForm";
import { ThemeToggle } from "@/components/ThemeToggle";

export function LoginCard() {
  return (
    <div className="flex items-center justify-center p-6 sm:p-10">
      <div className="w-full max-w-md rounded-2xl bg-white/80 p-6 shadow ring-1 ring-black/5 backdrop-blur-md sm:p-8 dark:bg-black/30 dark:ring-white/10">
        <div className="mb-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 text-white">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M10 4h4a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v0a2 2 0 0 1 2-2h4V6a2 2 0 0 1 2-2Z" fill="currentColor" />
              </svg>
            </span>
            <div>
              <p className="text-sm text-cyan-900/60 dark:text-cyan-100/60">Welcome back</p>
              <h2 className="text-xl font-semibold leading-6 text-cyan-900 dark:text-cyan-50">Sign in to Pharma</h2>
            </div>
          </div>
          <ThemeToggle />
        </div>

        <LoginForm />

        <div className="mt-4 flex items-center justify-between text-sm">
          <a className="text-cyan-700 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-200" href="#">
            Forgot password?
          </a>
          <a className="text-cyan-700 hover:text-cyan-900 dark:text-cyan-300 dark:hover:text-cyan-200" href="#">
            Create account
          </a>
        </div>
      </div>
    </div>
  );
}
