import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";
import { useScroll } from "../kooks/useScroll";
import { useLanguage } from "../contexts/LanguageContext";
/*Icons */
import { Github } from "lucide-react";

export default function Navbar() {
  const { t } = useLanguage();
  const { scrollToSection } = useScroll();

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <button className="w-44" onClick={() => scrollToSection("hero")}>
            <Logo />
          </button>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/rody-huancas/novtiq-modal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
              <span className="hidden sm:block">{t("nav.github")}</span>
            </a>
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
