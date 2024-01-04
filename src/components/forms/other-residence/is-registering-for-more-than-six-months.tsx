import { useOtherResidenceStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";
import { RadioInput } from "../../radio-input";

export function IsRegisteringForMoreThanSixMonths() {
  const isRegisteringForMoreThanSixMonths = useOtherResidenceStore(
    (state) => state.isRegisteringForMoreThanSixMonths,
  );
  const setIsRegisteringForMoreThanSixMonths = useOtherResidenceStore(
    (state) => state.setIsRegisteringForMoreThanSixMonths,
  );

  const isValid = isRegisteringForMoreThanSixMonths !== null;
  const needsRegistration = isRegisteringForMoreThanSixMonths === true;
  const showHint = isValid && !needsRegistration;

  const goToPreviousStep = useProgressStore((state) => state.goToPreviousStep);
  const goToNextStep = useProgressStore((state) => state.goToNextStep);

  const language = useI18nStore((state) => state.language);

  const options = ["yes", "no"];

  return (
    <form
      className="flex h-full w-full flex-col gap-5"
      onSubmit={(e) => {
        e.preventDefault();
        goToNextStep();
      }}
    >
      <div className="flex flex-col gap-4">
        <h3 className="flex w-full items-baseline justify-between gap-3">
          {t("other-residence.q4", language)}
          <div
            className="tooltip tooltip-left text-start sm:tooltip-top"
            data-tip={t("other-residence.q4.tooltip", language)}
          >
            <button
              type="button"
              className="rounded-full border-2 border-black px-2.5 font-bold hover:border-berlin-red hover:bg-berlin-red hover:text-white"
            >
              i
            </button>
          </div>
        </h3>
        <div className="flex flex-col gap-1">
          {options.map((option) => {
            const name = "other-residence.q4.radio";
            const isChecked =
              (option === "yes" &&
                isRegisteringForMoreThanSixMonths === true) ||
              (option === "no" && isRegisteringForMoreThanSixMonths === false);
            const onChange = () =>
              setIsRegisteringForMoreThanSixMonths(option === "yes");
            const label = t(option, language);

            return (
              <RadioInput
                key={option}
                name={name}
                label={label}
                isChecked={isChecked}
                onChange={onChange}
              />
            );
          })}
        </div>
      </div>

      <p className={`${showHint ? "block" : "hidden"}`}>
        {t("other-residence.q3.hint", language)}{" "}
        <a
          href="https://service.berlin.de/terminvereinbarung/termin/manage/"
          target="_blank"
          className="text-blue-700 underline visited:text-purple-500"
        >
          {t("other-residence.q4.hint.link.label", language)}{" "}
        </a>
      </p>

      <div className="flex h-full w-full flex-row-reverse items-end justify-between pt-10">
        <div
          className={
            !isValid || !needsRegistration
              ? "tooltip tooltip-left text-start sm:tooltip-top"
              : undefined
          }
          data-tip={
            !isValid || !needsRegistration
              ? t(
                  showHint ? "other-residence.q4.hint" : "button.next.tooltip",
                  language,
                )
              : undefined
          }
        >
          <button
            className={`
              border-2 border-black bg-white 
              px-5 py-2 hover:border-berlin-red
              hover:bg-berlin-red hover:text-white disabled:border-berlin-black-40 
              disabled:bg-berlin-black-10 disabled:text-berlin-black-40`}
            disabled={!isValid || !needsRegistration}
            type="submit"
          >
            {t("button.next", language)}
          </button>
        </div>

        <button
          className="border-2 border-black bg-white px-5 py-2 hover:border-berlin-red hover:bg-berlin-red hover:text-white"
          type="button"
          onClick={() => goToPreviousStep()}
        >
          {t("button.back", language)}
        </button>
      </div>
    </form>
  );
}
