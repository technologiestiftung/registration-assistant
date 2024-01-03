import { useFirstRegistrationStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";
import { RadioInput } from "../../radio-input";

export function IsRegisteringMoreThanTwo() {
  const isRegisteringMoreThanTwo = useFirstRegistrationStore(
    (state) => state.isRegisteringMoreThanTwo,
  );
  const setIsRegisteringMoreThanTwo = useFirstRegistrationStore(
    (state) => state.setIsRegisteringMoreThanTwo,
  );

  const goToPreviousStep = useProgressStore((state) => state.goToPreviousStep);
  const goToNextStep = useProgressStore((state) => state.goToNextStep);

  const language = useI18nStore((state) => state.language);

  const options = ["yes", "no"];

  const isValid = isRegisteringMoreThanTwo !== null;

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
          {t("first-registration.q6", language)}
          <div
            className="tooltip tooltip-left text-start sm:tooltip-top"
            data-tip={t("first-registration.q6.tooltip", language)}
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
            const name = "first-registration.q6.radio";
            const label = t(option, language);
            const isChecked =
              (option === "yes" && isRegisteringMoreThanTwo === true) ||
              (option === "no" && isRegisteringMoreThanTwo === false);
            const onChange = () =>
              setIsRegisteringMoreThanTwo(option === "yes");

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

      <div className="flex h-full w-full flex-row-reverse items-end justify-between pt-10">
        <div
          className={`${
            !isValid
              ? "tooltip tooltip-left text-start sm:tooltip-top"
              : undefined
          }`}
          data-tip={!isValid ? t("button.next.tooltip", language) : undefined}
        >
          <button
            className={`
              border-2 border-black bg-white 
              px-5 py-2 hover:border-berlin-red
              hover:bg-berlin-red hover:text-white disabled:border-berlin-black-40 
              disabled:bg-berlin-black-10 disabled:text-berlin-black-40`}
            disabled={!isValid}
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
