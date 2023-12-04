import { useNationalityStore } from "./store";
import { useProgressStore } from "../../daisyui-progress/store";

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
          <h3>Bist du Deutsche:r?</h3>
          {options.map((option) => (
            <div key={option} className="flex gap-2">
              <input
                type="radio"
                name="radio-1"
                onChange={() => setIsGerman(option === "Ja")}
                checked={
                  (option === "Ja" && isGerman === true) ||
                  (option === "Nein" && isGerman === false)
                }
                className="radio"
              />
              <label>{option}</label>
            </div>
          ))}
        </div>

        {isGerman && (
          <div className="flex flex-col gap-1">
            <h3>Bist du unter 13?</h3>
            {options.map((option) => (
              <div key={option} className="flex gap-2">
                <input
                  type="radio"
                  name="radio-2"
                  onChange={() => setIsUnder13(option === "Ja")}
                  checked={
                    (option === "Ja" && isUnder13 === true) ||
                    (option === "Nein" && isUnder13 === false)
                  }
                  className="radio"
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        )}

        {isGerman === false && (
          <div className="flex flex-col gap-1">
            <h3>Bist du Geflüchtete:r aus der Ukraine?</h3>
            {options.map((option) => (
              <div key={option} className="flex gap-2">
                <input
                  type="radio"
                  name="radio-3"
                  onChange={() => setIsUkrainianRefugee(option === "Ja")}
                  checked={
                    (option === "Ja" && isUkrainianRefugee === true) ||
                    (option === "Nein" && isUkrainianRefugee === false)
                  }
                  className="radio"
                />
                <label>{option}</label>
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
