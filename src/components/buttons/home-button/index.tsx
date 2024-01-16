import { useProgressStore } from "../../steps/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";

export function HomeButton() {
  const goToStart = useProgressStore((state) => state.goToStart);
  const language = useI18nStore((state) => state.language);
  const currentStep = useProgressStore((state) => state.currentStep);

  return (
    <>
      {currentStep === 0 ? (
        <div className="w-40"></div>
      ) : (
        <button
          onClick={goToStart}
          className="flex items-center justify-center gap-2 border-2 border-black px-4 py-2.5 hover:bg-gray-200"
        >
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
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>

          <span className="block lg:hidden">{t("start.mobile", language)}</span>
          <span className="hidden text-lg lg:block">
            {t("start.desktop", language)}
          </span>
        </button>
      )}
    </>
  );
}
