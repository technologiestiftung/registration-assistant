import { ProgressForm } from "./components/daisyui-progress";
import { LanguageSelect } from "./components/language-select";
import { Footer } from "./components/footer";
import { Progress } from "./components/progress";

function App() {
  return (
    <>
      <div className="flex min-h-screen w-screen">
        <div className="hidden w-2/5 md:flex">
          <div className="flex h-full w-full items-center justify-center">
            <img
              src={"/images/fernsehturm.jpg"}
              className="h-full object-cover saturate-150"
              alt={"Bild des Berliner Fernsehturms"}
            />
          </div>
        </div>
        <div className="font-berlin flex w-full flex-col items-center justify-between">
          <div className="flex w-full md:hidden">
            <Progress />
          </div>

          <header className="flex w-full justify-end py-5 pr-5">
            <LanguageSelect />
          </header>

          <main className="flex h-full items-end justify-center px-5 pb-11">
            <ProgressForm />
          </main>

          <div className="hidden w-full md:flex">
            <Progress />
          </div>
          <div className="w-full border-b border-b-berlin-black-40" />

          <footer className="flex py-5">
            <Footer />
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
