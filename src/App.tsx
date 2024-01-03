import { Steps } from "./components/steps";
import { LanguageSelect } from "./components/language-select";
import { Progress } from "./components/progress";

function App() {
  return (
    <>
      <div className="flex w-full md:hidden">
        <Progress id={"mobile-progress-bar"} />
      </div>

      <header className="flex w-full justify-end py-5 pr-5">
        <LanguageSelect />
      </header>

      <main className="flex h-full items-end justify-center px-5 pb-11">
        <Steps />
      </main>

      <div className="hidden w-full md:flex">
        <Progress id={"desktop-progress-bar"} />
      </div>
    </>
  );
}

export default App;
