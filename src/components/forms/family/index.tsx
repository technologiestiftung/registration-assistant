import { useFamilyStore } from "./store";
import { useProgressStore } from "../../daisyui-progress/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";

export function Family() {
  const isRegisteringWholeFamily = useFamilyStore(
    (state) => state.isRegisteringWholeFamily,
  );
  const setIsRegisteringWholeFamily = useFamilyStore(
    (state) => state.setIsRegisteringWholeFamily,
  );
  const isRegisteringMoreThanTwo = useFamilyStore(
    (state) => state.isRegisteringMoreThanTwo,
  );
  const setIsRegisteringMoreThanTwo = useFamilyStore(
    (state) => state.setIsRegisteringMoreThanTwo,
  );
  const hasChild = useFamilyStore((state) => state.hasChild);
  const setHasChild = useFamilyStore((state) => state.setHasChild);

  const isValid = useFamilyStore((state) => state.isValid);

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
          <h3>{t("family.q1", language)}</h3>
          {options.map((option) => (
            <div key={option} className="flex gap-2">
              <input
                type="radio"
                name="radio-1"
                onChange={() => setIsRegisteringWholeFamily(option === "yes")}
                checked={
                  (option === "yes" && isRegisteringWholeFamily === true) ||
                  (option === "no" && isRegisteringWholeFamily === false)
                }
                className="radio"
              />
              <label>{t(option, language)}</label>
            </div>
          ))}
        </div>

        {isRegisteringWholeFamily && (
          <>
            <div className="flex flex-col gap-1">
              <h3>{t("family.q2", language)}</h3>
              {options.map((option) => (
                <div key={option} className="flex gap-2">
                  <input
                    type="radio"
                    name="radio-2"
                    onChange={() =>
                      setIsRegisteringMoreThanTwo(option === "yes")
                    }
                    checked={
                      (option === "yes" && isRegisteringMoreThanTwo === true) ||
                      (option === "no" && isRegisteringMoreThanTwo === false)
                    }
                    className="radio"
                  />
                  <label>{t(option, language)}</label>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <h3>{t("family.q3", language)}</h3>
              {options.map((option) => (
                <div key={option} className="flex gap-2">
                  <input
                    type="radio"
                    name="radio-3"
                    onChange={() => setHasChild(option === "yes")}
                    checked={
                      (option === "yes" && hasChild === true) ||
                      (option === "no" && hasChild === false)
                    }
                    className="radio"
                  />
                  <label>{t(option, language)}</label>
                </div>
              ))}
            </div>
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
