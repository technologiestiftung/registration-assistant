import { useFirstRegistrationStore } from "./store";
import {useProgressStore} from "../../daisyui-progress/store";

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
  const goToNextStep = useProgressStore(
    (state) => state.incrementCurrentStep,
  );

  const options = ["Ja", "Nein"];

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
          <h3>Meldest du dich zum ersten Mal in Berlin an?</h3>
          {options.map((option) => (
            <div key={option} className="flex gap-2">
              <input
                type="radio"
                name="radio-1"
                onChange={() => setIsFirstRegistration(option === "Ja")}
                checked={
                  (option === "Ja" && isFirstRegistration === true) ||
                  (option === "Nein" && isFirstRegistration === false)
                }
                className="radio"
              />
              <label>{option}</label>
            </div>
          ))}
        </div>

        {isFirstRegistration && (
          <div className="flex flex-col gap-1">
            <h3>Bist du verheiratet?</h3>
            {options.map((option) => (
              <div key={option} className="flex gap-2">
                <input
                  type="radio"
                  name="radio-2"
                  onChange={() => setIsMarried(option === "Ja")}
                  checked={
                    (option === "Ja" && isMarried === true) ||
                    (option === "Nein" && isMarried === false)
                  }
                  className="radio"
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        )}

        <div className="flex h-full w-full items-end justify-between">
          <button className="btn" type="button" onClick={() => goToPreviousStep()}>
            Zurück
          </button>
          <div title={!isValid() ? "Bitte wähle zuerst eine Option" : ""}>
            <button className="btn" disabled={!isValid()} type="submit">
              Weiter
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
