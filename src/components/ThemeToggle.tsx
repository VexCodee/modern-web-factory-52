
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { Button } from "./ui/button";
import { useLanguage } from "../context/LanguageContext";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();
  
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label={t('navbar.toggleTheme')}
      className="rounded-full w-9 h-9 transition-all hover:bg-secondary"
    >
      {theme === "light" ? (
        <Moon size={18} className="transition-all text-foreground" />
      ) : (
        <Sun size={18} className="transition-all text-primary" />
      )}
    </Button>
  );
};

export default ThemeToggle;
