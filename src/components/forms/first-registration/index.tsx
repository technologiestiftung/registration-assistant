import { useFirstRegistrationStore } from "./store";
import { useProgressStore } from "../../daisyui-progress/store";
import { t } from "../../../i18n/translations";
import { useI18nStore } from "../../../i18n/store";

export function FirstRegistration() {
  const isFirstRegistration = useFirstRegistrationStore(
    (state) => state.isFirstRegistration,
  );
  const setIsFirstRegistration = useFirstRegistrationStore(
    (state) => state.setIsFirstRegistration,
  );

  const isMarried = useFirstRegistrationStore((state) => state.isMarried);
  const setIsMarried = useFirstRegistrationStore((state) => state.setIsMarried);

  const isValid = useFirstRegistrationStore((state) => state.isValid);

  const goToPreviousStep = useProgressStore(
    (state) => state.decrementCurrentStep,
  );
  const goToNextStep = useProgressStore((state) => state.incrementCurrentStep);

  const language = useI18nStore((state) => state.language);

  const options = ["yes", "no"];

  return (
    <div className="flex h-full flex-col gap-3">
      <form
        id="idForm"
        className="flex h-full flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          goToNextStep();
        }}
      >
        <div className="flex flex-col gap-1">
          <h3>{t("first-registration.q1", language)}</h3>
          {options.map((option) => (
            <div key={option} className="flex gap-2">
              <input
                type="radio"
                name="radio-1"
                onChange={() => setIsFirstRegistration(option === "yes")}
                checked={
                  (option === "yes" && isFirstRegistration === true) ||
                  (option === "no" && isFirstRegistration === false)
                }
                className="radio"
              />
              <label>{t(option, language)}</label>
            </div>
          ))}
        </div>

        {isFirstRegistration && (
          <div className="flex flex-col gap-1">
            <h3>{t("first-registration.q2", language)}</h3>
            {options.map((option) => (
              <div key={option} className="flex gap-2">
                <input
                  type="radio"
                  name="radio-2"
                  onChange={() => setIsMarried(option === "yes")}
                  checked={
                    (option === "yes" && isMarried === true) ||
                    (option === "no" && isMarried === false)
                  }
                  className="radio"
                />
                <label>{t(option, language)}</label>
              </div>
            ))}
          </div>
        )}

        <div className="flex h-full w-full items-end justify-between">
          <button
            className="btn"
            type="button"
            onClick={() => goToPreviousStep()}
          >
            {t("button.back", language)}
          </button>
          <div title={!isValid() ? t("button.next.tooltip", language) : ""}>
            <button className="btn" disabled={!isValid()} type="submit">
              {t("button.next", language)}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
