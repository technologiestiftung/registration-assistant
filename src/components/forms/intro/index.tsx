import { useProgressStore } from "../../steps/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";
import { Appointment } from "../../appointment";
import { PrimaryButton } from "../../buttons/primary-button";

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
        className="flex w-full flex-col gap-9 lg:h-96"
      >
        <div className="flex flex-col gap-4">
          <p>{t("intro.p1", language)}</p>

          <Appointment />
        </div>
        <div className="flex w-full justify-end">
          <PrimaryButton label={t("button.next", language)} type="submit" />
        </div>
      </form>
    </>
  );
}
