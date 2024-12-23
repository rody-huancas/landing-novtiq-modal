import { Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' }
] as const;

export default function LanguageSwitch() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="relative inline-flex items-center gap-2">
      <Globe size={18} className="text-gray-500 dark:text-gray-400" />
      <div className="flex rounded-lg bg-gray-100 dark:bg-gray-800 p-1">
        {languages.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => setLocale(code)}
            className={`px-3 py-1 text-sm rounded-md transition-colors ${
              locale === code
                ? 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-400 shadow-sm'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}