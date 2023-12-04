import { useProgressStore } from "../../daisyui-progress/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";

export function Intro() {
  const goToNextStep = useProgressStore((state) => state.incrementCurrentStep);
  const language = useI18nStore((state) => state.language);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          goToNextStep();
        }}
        className="flex flex-col gap-3"
      >
        <h1 className="text-xl font-semibold">{t("intro.title", language)}</h1>
        <p>{t("intro.text", language)}</p>
        <div className="flex h-full w-full items-end justify-end">
          <button className="btn" type="submit">
            {t("button.next", language)}
          </button>
        </div>
      </form>
    </>
  );
}
