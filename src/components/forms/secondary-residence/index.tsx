import { useSecondaryResidenceStore } from "./store";

export function SecondaryResidence({
  goToPreviousStep,
  goToNextStep,
}: {
  goToPreviousStep: () => void;
  goToNextStep: () => void;
}) {
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
          <h3>Hast du schon eine andere Wohnung gemeldet?</h3>
          {options.map((option) => (
            <div key={option} className="flex gap-2">
              <input
                type="radio"
                name="radio-1"
                onChange={() => setIsSecondaryResidence(option === "Ja")}
                checked={
                  (option === "Ja" && isSecondaryResidence === true) ||
                  (option === "Nein" && isSecondaryResidence === false)
                }
                className="radio"
              />
              <label>{option}</label>
            </div>
          ))}
        </div>

        {isSecondaryResidence && (
          <>
            <div className="flex flex-col gap-1">
              <h3>Wohnst du im Ausland?</h3>
              {options.map((option) => (
                <div key={option} className="flex gap-2">
                  <input
                    type="radio"
                    name="radio-2"
                    onChange={() => setHasMainResidenceAbroad(option === "Ja")}
                    checked={
                      (option === "Ja" && hasMainResidenceAbroad === true) ||
                      (option === "Nein" && hasMainResidenceAbroad === false)
                    }
                    className="radio"
                  />
                  <label>{option}</label>
                </div>
              ))}
            </div>

            {hasMainResidenceAbroad && (
              <div className="flex flex-col gap-1">
                <h3>Möchtest du für mehr als drei Monate in Berlin bleiben?</h3>
                {options.map((option) => (
                  <div key={option} className="flex gap-2">
                    <input
                      type="radio"
                      name="radio-3"
                      onChange={() =>
                        setIsRegisteringForMoreThanThreeMonths(option === "Ja")
                      }
                      checked={
                        (option === "Ja" &&
                          isRegisteringForMoreThanThreeMonths === true) ||
                        (option === "Nein" &&
                          isRegisteringForMoreThanThreeMonths === false)
                      }
                      className="radio"
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}

            {hasMainResidenceAbroad === false && (
              <div className="flex flex-col gap-1">
                <h3>
                  Möchtest du für mehr als sechs Monate in Berlin bleiben?
                </h3>
                {options.map((option) => (
                  <div key={option} className="flex gap-2">
                    <input
                      type="radio"
                      name="radio-3"
                      onChange={() =>
                        setIsRegisteringForMoreThanSixMonths(option === "Ja")
                      }
                      checked={
                        (option === "Ja" &&
                          isRegisteringForMoreThanSixMonths === true) ||
                        (option === "Nein" &&
                          isRegisteringForMoreThanSixMonths === false)
                      }
                      className="radio"
                    />
                    <label>{option}</label>
                  </div>
                ))}
              </div>
            )}
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
