import { useProgressStore } from "../../steps/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";
import { Appointment } from "../../appointment";

export function Intro() {
  const goToNextStep = useProgressStore((state) => state.goToNextStep);
  const language = useI18nStore((state) => state.language);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          goToNextStep();
        }}
        className="flex h-full flex-col justify-end gap-10"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">
            {t("intro.title", language)}
          </h1>

          <p>{t("intro.p1", language)}</p>

          <Appointment />
        </div>
        <div className="flex h-full w-full items-end justify-end">
          <button
            className="border-2 border-black bg-white px-5 py-2 hover:border-berlin-red hover:bg-berlin-red hover:text-white"
            type="submit"
          >
            {t("button.next", language)}
          </button>
        </div>
      </form>
    </>
  );
}
