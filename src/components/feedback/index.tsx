import { t } from "../../i18n/translations";
import { useI18nStore } from "../../i18n/store";
import { availableLanguages } from "../../../src/i18n/store/types";

export function Feedback() {
  const language = useI18nStore((state) => state.language);

  return (
    <>
      {language === availableLanguages[0] && (
        <div className="flex w-full flex-wrap justify-center gap-x-2 px-8 py-4 text-sm">
          {t("feedback.question", language)}
          <a
            className="text-blue-500 underline"
            href={t("feedback.link", language)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("feedback.link.label", language)}
          </a>
        </div>
      )}
    </>
  );
}
