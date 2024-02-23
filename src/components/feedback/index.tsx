import { useI18n } from "../../i18n/hook/useI18n";

export function Feedback() {
  const t = useI18n();

  return (
    <>
      <div className="flex w-full flex-wrap justify-center gap-x-2 px-4 py-4 text-sm">
        <p>
          {t("feedback.intro")} <br className="hidden md:inline" />{" "}
          {t("feedback.question")}{" "}
          <a
            className="text-blue-700 underline"
            href={t("feedback.link")}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("feedback.link.label")}
          </a>
        </p>
      </div>
    </>
  );
}
