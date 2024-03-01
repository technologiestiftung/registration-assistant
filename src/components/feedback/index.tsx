import { t } from "../../i18n/translations";
import { useI18nStore } from "../../i18n/store";

export function Feedback() {
  const language = useI18nStore((state) => state.language);

  return (
    <>
      <div className="flex w-full flex-wrap justify-center gap-x-2 px-4 py-4 text-sm">
        <p>
          {t("feedback.intro", language)} <br className="hidden md:inline" />{" "}
          {t("feedback.question", language)}{" "}
          <a
            className="text-blue-700 underline"
            href={t("feedback.link", language)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("feedback.link.label", language)}
          </a>
        </p>
      </div>
    </>
  );
}
