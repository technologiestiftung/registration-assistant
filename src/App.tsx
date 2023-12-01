import { ProgressForm } from "./components/daisyui-progress";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const modal = document.getElementById("my_modal_1") as HTMLDialogElement;
    modal?.showModal();
  }, []);

  return (
    <>
      <main className="flex flex-col items-center gap-6 px-5">
        <dialog id="my_modal_1" className="modal backdrop-blur">
          <div className="modal-box">
            <h3 className="text-lg font-bold">
              Willkommen beim Anmeldungs-Assistent!
            </h3>
            <p className="py-4">
              Wir möchten dir vorab ein paar Fragen stellen. Die Informationen
              benötigen wir, um eine spezielle Liste mit Dokumenten für deinen
              Anmelde-Termin zu erstellen.
            </p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Los geht's!</button>
              </form>
            </div>
          </div>
        </dialog>
        <ProgressForm />
      </main>
    </>
  );
}

export default App;
