import { Github } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center w-44">
            <img src="/novtiq.svg" alt="Logo Novtiq" />
          </div>
          <div className="flex items-center space-x-4">
            <a
              href="https://github.com/rody-huancas/novtiq-modal"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github size={20} />
              <span>{t("nav.github")}</span>
            </a>
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
