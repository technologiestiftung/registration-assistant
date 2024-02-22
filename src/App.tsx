import { Steps } from "./components/steps";
import { LanguageSelect } from "./components/language-select";
import { Progress } from "./components/progress";
import { HomeButton } from "./components/buttons/home-button";
import { HeaderTitle } from "./components/header-title";
import { useProgressStore } from "./components/steps/store";
import { Feedback } from "./components/feedback/index.tsx";
import { Footer } from "./components/footer/index.tsx";

function App() {
  const currentStep = useProgressStore((state) => state.currentStep);

  return (
    <>
      <div className="flex w-full md:hidden print:hidden">
        <Progress id={"mobile-progress-bar"} />
      </div>

      <header className="flex w-full flex-col px-5 py-5 print:hidden">
        <div className="flex w-full items-center justify-between">
          <HomeButton />
          <div className="hidden  justify-center sm:flex">
            <HeaderTitle />
          </div>
          <LanguageSelect />
        </div>
        <div className="flex justify-center pt-14 sm:hidden">
          <HeaderTitle />
        </div>
      </header>

      <main className="flex h-full items-end justify-center px-5 pb-11 print:items-start">
        <Steps />
      </main>

      <Feedback />

      <div className="hidden w-full md:flex print:hidden">
        <Progress id={"desktop-progress-bar"} />
      </div>

      <div
        className={`w-full border-b ${
          currentStep === 0 || currentStep === 16 ? "flex" : "hidden md:flex"
        } `}
      ></div>

      <Footer />
    </>
  );
}

export default App;
