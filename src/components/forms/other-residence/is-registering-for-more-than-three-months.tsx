import { useOtherResidenceStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";
import { RadioInput } from "../../radio-input";
import { InfoButton } from "../../buttons/info-button";
import { PrimaryButton } from "../../buttons/primary-button";
import { SecondaryButton } from "../../buttons/secondary-button";
import { useTimeout } from "../../../hooks/useTimeout.tsx";

export function IsRegisteringForMoreThanThreeMonths() {
  const isRegisteringForMoreThanThreeMonths = useOtherResidenceStore(
    (state) => state.isRegisteringForMoreThanThreeMonths,
  );
  const setIsRegisteringForMoreThanThreeMonths = useOtherResidenceStore(
    (state) => state.setIsRegisteringForMoreThanThreeMonths,
  );

  const isValid = isRegisteringForMoreThanThreeMonths !== null;
  const needsRegistration = isRegisteringForMoreThanThreeMonths === true;
  const showHint = isValid && !needsRegistration;

  const goToPreviousStep = useProgressStore((state) => state.goToPreviousStep);
  const goToNextStep = useProgressStore((state) => state.goToNextStep);

  const language = useI18nStore((state) => state.language);

  const options = ["yes", "no"];

  const { isOver } = useTimeout();

  const arePointerEventsDisabled = !isOver;

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
          {t("other-residence.q3", language)}
          <div
            className="tooltip tooltip-left text-start sm:tooltip-top"
            data-tip={t("other-residence.q3.tooltip", language)}
          >
            <InfoButton />
          </div>
        </h3>
        <div className="flex flex-col gap-1">
          {options.map((option) => {
            const name = "other-residence.q3.radio";
            const isChecked =
              (option === "yes" &&
                isRegisteringForMoreThanThreeMonths === true) ||
              (option === "no" &&
                isRegisteringForMoreThanThreeMonths === false);
            const onChange = () =>
              setIsRegisteringForMoreThanThreeMonths(option === "yes");
            const label = t(option, language);

            return (
              <RadioInput
                key={option}
                name={`${name}.${option}`}
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
          {t("other-residence.q3.hint.link.label", language)}{" "}
        </a>
      </p>

      <div className="flex h-full w-full flex-row-reverse items-end justify-between pt-10">
        <div
          className={`${
            !isValid
              ? `tooltip tooltip-left text-start sm:tooltip-top ${arePointerEventsDisabled ? "pointer-events-none" : ""}`
              : undefined
          }`}
          data-tip={
            !isValid || !needsRegistration
              ? t(
                  showHint ? "other-residence.q3.hint" : "button.next.tooltip",
                  language,
                )
              : undefined
          }
        >
          <PrimaryButton
            label={t("button.next", language)}
            type="submit"
            disabled={!isValid || !needsRegistration}
          />
        </div>

        <SecondaryButton
          label={t("button.back", language)}
          onClick={goToPreviousStep}
        />
      </div>
    </form>
  );
}
