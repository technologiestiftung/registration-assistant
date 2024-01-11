import { Steps } from "./components/steps";
import { LanguageSelect } from "./components/language-select";
import { Progress } from "./components/progress";

function App() {
  return (
    <>
      <div className="flex w-full print:hidden md:hidden">
        <Progress id={"mobile-progress-bar"} />
      </div>

      <header className="flex w-full justify-end py-5 pr-5 print:hidden">
        <LanguageSelect />
      </header>

      <main className="flex h-full items-end justify-center px-5 pb-11 print:items-start">
        <Steps />
      </main>

      <div className="hidden w-full print:hidden md:flex">
        <Progress id={"desktop-progress-bar"} />
      </div>
    </>
  );
}

export default App;
