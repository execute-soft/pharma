import "@/App.css";
import { BackgroundBlobs } from "@/components/BackgroundBlobs";
import { MedCrossPattern } from "@/components/MedCrossPattern";
import { BrandPanel } from "@/components/BrandPanel";
import { LoginCard } from "@/components/LoginCard";

/**
 * Landing page that shows the marketing panel and the login card.
 * This used to be rendered directly by `App` before routing was added.
 */
export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-emerald-50 dark:from-cyan-950 dark:via-gray-950 dark:to-emerald-950">
      <BackgroundBlobs />
      <MedCrossPattern />
      <div className="relative z-10 grid min-h-screen items-stretch lg:grid-cols-2">
        <BrandPanel />
        <LoginCard />
        <button
          onClick={() => {
            window.location.href = "/pharma";
          }}
        >
          Switch
        </button>
      </div>
    </div>
  );
}
