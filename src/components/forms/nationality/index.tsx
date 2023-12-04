import { useNationalityStore } from "./store";
import { useProgressStore } from "../../daisyui-progress/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";

export function Nationality() {
  const isGerman = useNationalityStore((state) => state.isGerman);
  const setIsGerman = useNationalityStore((state) => state.setIsGerman);

  const isUnder13 = useNationalityStore((state) => state.isUnder13);
  const setIsUnder13 = useNationalityStore((state) => state.setIsUnder13);

  const isUkrainianRefugee = useNationalityStore(
    (state) => state.isUkrainianRefugee,
  );
  const setIsUkrainianRefugee = useNationalityStore(
    (state) => state.setIsUkrainianRefugee,
  );

  const isValid = useNationalityStore((state) => state.isValid);

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
          <h3>{t("nationality.q1", language)}</h3>
          {options.map((option) => (
            <div key={option} className="flex gap-2">
              <input
                type="radio"
                name="radio-1"
                onChange={() => setIsGerman(option === "yes")}
                checked={
                  (option === "yes" && isGerman === true) ||
                  (option === "no" && isGerman === false)
                }
                className="radio"
              />
              <label>{t(option, language)}</label>
            </div>
          ))}
        </div>

        {isGerman && (
          <div className="flex flex-col gap-1">
            <h3>{t("nationality.q2", language)}</h3>
            {options.map((option) => (
              <div key={option} className="flex gap-2">
                <input
                  type="radio"
                  name="radio-2"
                  onChange={() => setIsUnder13(option === "yes")}
                  checked={
                    (option === "yes" && isUnder13 === true) ||
                    (option === "no" && isUnder13 === false)
                  }
                  className="radio"
                />
                <label>{t(option, language)}</label>
              </div>
            ))}
          </div>
        )}

        {isGerman === false && (
          <div className="flex flex-col gap-1">
            <h3>{t("nationality.q3", language)}</h3>
            {options.map((option) => (
              <div key={option} className="flex gap-2">
                <input
                  type="radio"
                  name="radio-3"
                  onChange={() => setIsUkrainianRefugee(option === "yes")}
                  checked={
                    (option === "yes" && isUkrainianRefugee === true) ||
                    (option === "no" && isUkrainianRefugee === false)
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
