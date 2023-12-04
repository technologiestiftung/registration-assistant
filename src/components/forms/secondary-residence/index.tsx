import { useSecondaryResidenceStore } from "./store";
import { useProgressStore } from "../../daisyui-progress/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";

export function SecondaryResidence() {
  const isSecondaryResidence = useSecondaryResidenceStore(
    (state) => state.isSecondaryResidence,
  );
  const setIsSecondaryResidence = useSecondaryResidenceStore(
    (state) => state.setIsSecondaryResidence,
  );

  const hasMainResidenceAbroad = useSecondaryResidenceStore(
    (state) => state.hasMainResidenceAbroad,
  );
  const setHasMainResidenceAbroad = useSecondaryResidenceStore(
    (state) => state.setHasMainResidenceAbroad,
  );

  const isRegisteringForMoreThanThreeMonths = useSecondaryResidenceStore(
    (state) => state.isRegisteringForMoreThanThreeMonths,
  );
  const setIsRegisteringForMoreThanThreeMonths = useSecondaryResidenceStore(
    (state) => state.setIsRegisteringForMoreThanThreeMonths,
  );

  const isRegisteringForMoreThanSixMonths = useSecondaryResidenceStore(
    (state) => state.isRegisteringForMoreThanSixMonths,
  );
  const setIsRegisteringForMoreThanSixMonths = useSecondaryResidenceStore(
    (state) => state.setIsRegisteringForMoreThanSixMonths,
  );

  const isValid = useSecondaryResidenceStore((state) => state.isValid);

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
          <h3>{t("second-registration.q1", language)}</h3>
          {options.map((option) => (
            <div key={option} className="flex gap-2">
              <input
                type="radio"
                name="radio-1"
                onChange={() => setIsSecondaryResidence(option === "yes")}
                checked={
                  (option === "yes" && isSecondaryResidence === true) ||
                  (option === "no" && isSecondaryResidence === false)
                }
                className="radio"
              />
              <label>{t(option, language)}</label>
            </div>
          ))}
        </div>

        {isSecondaryResidence && (
          <>
            <div className="flex flex-col gap-1">
              <h3>{t("second-registration.q2", language)}</h3>
              {options.map((option) => (
                <div key={option} className="flex gap-2">
                  <input
                    type="radio"
                    name="radio-2"
                    onChange={() => setHasMainResidenceAbroad(option === "yes")}
                    checked={
                      (option === "yes" && hasMainResidenceAbroad === true) ||
                      (option === "no" && hasMainResidenceAbroad === false)
                    }
                    className="radio"
                  />
                  <label>{t(option, language)}</label>
                </div>
              ))}
            </div>

            {hasMainResidenceAbroad && (
              <div className="flex flex-col gap-1">
                <h3>{t("second-registration.q3", language)}</h3>
                {options.map((option) => (
                  <div key={option} className="flex gap-2">
                    <input
                      type="radio"
                      name="radio-3"
                      onChange={() =>
                        setIsRegisteringForMoreThanThreeMonths(option === "yes")
                      }
                      checked={
                        (option === "yes" &&
                          isRegisteringForMoreThanThreeMonths === true) ||
                        (option === "no" &&
                          isRegisteringForMoreThanThreeMonths === false)
                      }
                      className="radio"
                    />
                    <label>{t(option, language)}</label>
                  </div>
                ))}
              </div>
            )}

            {hasMainResidenceAbroad === false && (
              <div className="flex flex-col gap-1">
                <h3>{t("second-registration.q4", language)}</h3>
                {options.map((option) => (
                  <div key={option} className="flex gap-2">
                    <input
                      type="radio"
                      name="radio-3"
                      onChange={() =>
                        setIsRegisteringForMoreThanSixMonths(option === "yes")
                      }
                      checked={
                        (option === "yes" &&
                          isRegisteringForMoreThanSixMonths === true) ||
                        (option === "no" &&
                          isRegisteringForMoreThanSixMonths === false)
                      }
                      className="radio"
                    />
                    <label>{t(option, language)}</label>
                  </div>
                ))}
              </div>
            )}
          </>
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
