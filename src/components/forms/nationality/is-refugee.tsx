import { t } from "../../../i18n/translations";
import { RadioInput } from "../../radio-input";
import { useNationalityStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { useI18nStore } from "../../../i18n/store";
import { InfoButton } from "../../buttons/info-button";
import { PrimaryButton } from "../../buttons/primary-button";
import { SecondaryButton } from "../../buttons/secondary-button";

export function IsRefugee() {
  const isRefugee = useNationalityStore((state) => state.isRefugee);
  const setIsRefugee = useNationalityStore((state) => state.setIsRefugee);

  const isValid = isRefugee !== null;

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
          {t("nationality.q5", language)}
          <div
            className="tooltip tooltip-left text-start sm:tooltip-top"
            data-tip={t("nationality.q5.tooltip", language)}
          >
            <InfoButton />
          </div>
        </h3>
        <div className="flex flex-col gap-1">
          {options.map((option) => {
            const name = "nationality.q5.radio";
            const isChecked =
              (option === "yes" && isRefugee === true) ||
              (option === "no" && isRefugee === false);
            const onChange = () => setIsRefugee(option === "yes");
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

      <p className={`${isRefugee ? "block" : "hidden"}`}>
        {t("nationality.q5.hint", language)}{" "}
        <a
          href="https://service.berlin.de/standort/327539/"
          target="_blank"
          className="text-blue-700 underline visited:text-purple-500"
        >
          https://service.berlin.de/standort/327539/
        </a>
      </p>

      <div className="flex h-full w-full flex-row-reverse items-end justify-between pt-10">
        <div
          className={
            !isValid
              ? "tooltip tooltip-left text-start sm:tooltip-top"
              : undefined
          }
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
