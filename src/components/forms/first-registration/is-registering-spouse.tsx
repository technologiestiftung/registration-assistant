import { useFirstRegistrationStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";
import { RadioInput } from "../../radio-input";
import { SecondaryButton } from "../../buttons/secondary-button";
import { PrimaryButton } from "../../buttons/primary-button";
import { InfoButton } from "../../buttons/info-button";

export function IsRegisteringSpouse() {
  const isRegisteringSpouse = useFirstRegistrationStore(
    (state) => state.isRegisteringSpouse,
  );
  const setIsRegisteringSpouse = useFirstRegistrationStore(
    (state) => state.setIsRegisteringSpouse,
  );

  const goToPreviousStep = useProgressStore((state) => state.goToPreviousStep);
  const goToNextStep = useProgressStore((state) => state.goToNextStep);

  const language = useI18nStore((state) => state.language);

  const options = ["yes", "no"];

  const isValid = isRegisteringSpouse !== null;

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
          {t("first-registration.q3", language)}
          <div
            className="tooltip tooltip-left text-start sm:tooltip-top"
            data-tip={t("first-registration.q3.tooltip", language)}
          >
            <InfoButton />
          </div>
        </h3>
        <div className="flex flex-col gap-1">
          {options.map((option) => {
            const name = "first-registration.q3.radio";
            const label = t(option, language);
            const isChecked =
              (option === "yes" && isRegisteringSpouse === true) ||
              (option === "no" && isRegisteringSpouse === false);
            const onChange = () => setIsRegisteringSpouse(option === "yes");

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

      <div className="flex h-full w-full flex-row-reverse items-end justify-between pt-10">
        <div
          className={`${
            !isValid
              ? "tooltip tooltip-left text-start sm:tooltip-top"
              : undefined
          }`}
          data-tip={!isValid ? t("button.next.tooltip", language) : undefined}
        >
          <PrimaryButton
            label={t("button.next", language)}
            type="submit"
            disabled={!isValid}
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
