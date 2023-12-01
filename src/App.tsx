import { ProgressForm } from "./components/daisyui-progress";

function App() {
  return (
    <>
      <main className="flex flex-col items-center gap-6 px-5">
        <div className="flex flex-col gap-2 pt-3">
          <h1 className="text-lg font-bold">
            Willkommen beim Anmeldungs-Assistent!
          </h1>
          <p>
            Wir möchten dir vorab ein paar Fragen stellen. Die Informationen
            benötigen wir, um eine spezielle Liste mit Dokumenten für deinen
            Anmelde-Termin zu erstellen.
          </p>
        </div>
        <ProgressForm />
      </main>
    </>
  );
}

export default App;
