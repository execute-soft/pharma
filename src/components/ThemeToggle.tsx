import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/use-theme";

type Props = {
  className?: string;
};

/**
 * Small button to toggle between light and dark themes.
 */
export function ThemeToggle({ className }: Props) {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";
  return (
    <Button type="button" variant="outline" size="icon" aria-label="Toggle theme" onClick={toggleTheme} className={className}>
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}
