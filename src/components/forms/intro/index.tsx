import { useProgressStore } from "../../daisyui-progress/store";

export function Intro() {
  const goToNextStep = useProgressStore((state) => state.incrementCurrentStep);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          goToNextStep();
        }}
        className="flex flex-col gap-3"
      >
        <h1 className="text-xl font-semibold">
          Willkommen beim Anmeldungs-Assistent!
        </h1>
        <p>
          Wir möchten dir vorab ein paar Fragen stellen. Die Informationen
          benötigen wir, um eine spezielle Liste mit Dokumenten für deinen
          Anmelde-Termin zu erstellen.
        </p>
        <div className="flex h-full w-full items-end justify-end">
          <button className="btn" type="submit">
            Weiter
          </button>
        </div>
      </form>
    </>
  );
}
