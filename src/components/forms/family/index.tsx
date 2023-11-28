import { useFamilyStore } from "./store";

export function Family({
  goToPreviousStep,
  goToNextStep,
}: {
  goToPreviousStep: () => void;
  goToNextStep: () => void;
}) {
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
          <h3>Möchtest du deine ganze Familie anmelden?</h3>
          {options.map((option) => (
            <div key={option} className="flex gap-2">
              <input
                type="radio"
                name="radio-1"
                onChange={() => setIsRegisteringWholeFamily(option === "Ja")}
                checked={
                  (option === "Ja" && isRegisteringWholeFamily === true) ||
                  (option === "Nein" && isRegisteringWholeFamily === false)
                }
                className="radio"
              />
              <label>{option}</label>
            </div>
          ))}
        </div>

        {isRegisteringWholeFamily && (
          <>
            <div className="flex flex-col gap-1">
              <h3>Möchtest du mehr als 2 Personen anmelden?</h3>
              {options.map((option) => (
                <div key={option} className="flex gap-2">
                  <input
                    type="radio"
                    name="radio-2"
                    onChange={() =>
                      setIsRegisteringMoreThanTwo(option === "Ja")
                    }
                    checked={
                      (option === "Ja" && isRegisteringMoreThanTwo === true) ||
                      (option === "Nein" && isRegisteringMoreThanTwo === false)
                    }
                    className="radio"
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-1">
              <h3>Zieht ein Kind mit dir um?</h3>
              {options.map((option) => (
                <div key={option} className="flex gap-2">
                  <input
                    type="radio"
                    name="radio-3"
                    onChange={() => setHasChild(option === "Ja")}
                    checked={
                      (option === "Ja" && hasChild === true) ||
                      (option === "Nein" && hasChild === false)
                    }
                    className="radio"
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="flex h-full w-full items-end justify-between">
          <button className="btn" type="button" onClick={goToPreviousStep}>
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
