
import { Sun } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "../context/LanguageContext";

const ThemeToggle = () => {
  const { t } = useLanguage();
  
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={t('navbar.toggleTheme')}
      className="rounded-full w-9 h-9 transition-all hover:bg-secondary"
    >
      <Sun size={18} className="transition-all text-foreground" />
    </Button>
  );
};

export default ThemeToggle;
