import { useI18nStore } from "../../i18n/store";
import { t } from "../../i18n/translations";
import { availableLanguages } from "../../i18n/store/types.ts";

export function LanguageSelect() {
  const language = useI18nStore((state) => state.language);
  const setLanguage = useI18nStore((state) => state.setLanguage);

  return (
    <div className="pointer-hand group flex cursor-pointer items-center border-2 border-black bg-white pl-4 hover:bg-gray-100">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
        />
      </svg>

      {/* DESKTOP */}
      <select
        className="select hidden w-full max-w-xs rounded-none bg-white text-lg group-hover:bg-gray-100 lg:block"
        id="language-select"
        aria-label={t("language-select", language)}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {availableLanguages.map((availableLanguage) => (
          <option key={availableLanguage} value={availableLanguage}>
            {t(`${availableLanguage}.desktop`, language)}
          </option>
        ))}
      </select>

      {/* MOBILE */}
      <select
        className="select block w-full max-w-xs rounded-none bg-white group-hover:bg-gray-100 lg:hidden"
        id="language-select"
        aria-label={t("language-select", language)}
        onChange={(e) => setLanguage(e.target.value)}
      >
        {availableLanguages.map((availableLanguage) => (
          <option key={availableLanguage} value={availableLanguage}>
            {t(`${availableLanguage}.mobile`, language)}
          </option>
        ))}
      </select>
    </div>
  );
}
