import { useOtherResidenceStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";
import { RadioInput } from "../../radio-input";
import { InfoButton } from "../../buttons/info-button";
import { PrimaryButton } from "../../buttons/primary-button";
import { SecondaryButton } from "../../buttons/secondary-button";
import { useTimeout } from "../../../hooks/useTimeout.tsx";

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

  const { isOver } = useTimeout();

  const arePointerEventsDisabled = !isOver;

  return (
    <form
      className="flex h-80 w-full flex-col gap-12 lg:h-96"
      onSubmit={(e) => {
        e.preventDefault();
        goToNextStep();
      }}
    >
      <div className="flex flex-col gap-4">
        <div className="flex w-full items-baseline justify-between gap-3">
          <p>{t("other-residence.q4", language)}</p>
          <div
            className="tooltip text-start sm:tooltip-top ltr:tooltip-left rtl:tooltip-right"
            data-tip={t("other-residence.q4.tooltip", language)}
          >
            <InfoButton />
          </div>
        </div>
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
        {t("other-residence.q4.hint", language)}{" "}
        <a
          href="https://service.berlin.de/terminvereinbarung/termin/manage/"
          target="_blank"
          className="text-blue-700 underline visited:text-purple-500"
        >
          {t("other-residence.q4.hint.link.label", language)}{" "}
        </a>
      </p>

      <div className="flex w-full flex-row-reverse items-end justify-between">
        <div
          className={`${
            !isValid
              ? `tooltip text-start sm:tooltip-top ltr:tooltip-left rtl:tooltip-right before:w-[9rem] ${arePointerEventsDisabled ? "pointer-events-none" : ""}`
              : undefined
          }`}
          data-tip={
            !isValid || !needsRegistration
              ? t(
                  showHint ? "other-residence.q4.hint" : "button.next.tooltip",
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
