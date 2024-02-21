import { useI18nStore } from "../../i18n/store";
import { t } from "../../i18n/translations";
import { availableLanguages } from "../../i18n/store/types.ts";

export function LanguageSelect() {
  const language = useI18nStore((state) => state.language);
  const setLanguage = useI18nStore((state) => state.setLanguage);

  return (
    <div className="grid">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="pointer-events-none relative left-3 z-10 col-start-1 row-start-1 h-5 w-5 self-center justify-self-start forced-colors:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
        />
      </svg>

      <svg
        className="pointer-events-none relative right-2 z-10 col-start-1 row-start-1 h-4 w-4 self-center justify-self-end forced-colors:hidden"
        viewBox="0 0 16 16"
        fill="currentColor"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        ></path>
      </svg>

      {/* DESKTOP */}
      <select
        className="col-start-1 row-start-1 hidden w-32 cursor-pointer appearance-none rounded-none border-2 border-black bg-white py-2.5 pl-4 pr-2 text-center text-lg hover:bg-gray-100 lg:block"
        aria-label={t("language-select", language)}
        onChange={(e) => setLanguage(e.target.value)}
        defaultValue={language}
      >
        {availableLanguages.map((availableLanguage) => (
          <option key={availableLanguage} value={availableLanguage}>
            {t(`${availableLanguage}.desktop`, language)}
          </option>
        ))}
      </select>

      {/* MOBILE */}
      <select
        className="col-start-1 row-start-1 block w-[5.5rem] cursor-pointer appearance-none rounded-none border-2 border-black bg-white py-2.5 pl-4 pr-2 text-center hover:bg-gray-100 lg:hidden"
        aria-label={t("language-select", language)}
        onChange={(e) => setLanguage(e.target.value)}
        defaultValue={language}
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
