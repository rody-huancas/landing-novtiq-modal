import { useLanguage } from "../contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900">
      <div className="py-8 border-t border-gray-800 text-center text-gray-100">
        <p>
          {t("footer.copyright").replace(
            "{year}",
            new Date().getFullYear().toString()
          )}
        </p>
      </div>
    </footer>
  );
}
