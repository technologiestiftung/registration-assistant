import { Steps } from "./components/steps";
import { LanguageSelect } from "./components/language-select";
import { Progress } from "./components/progress";
import { HomeButton } from "./components/buttons/home-button";
import { HeaderTitle } from "./components/header-title";
import { useProgressStore } from "./components/steps/store";

function App() {
  const currentStep = useProgressStore((state) => state.currentStep);

  return (
    <>
      <div className="flex w-full print:hidden md:hidden">
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

      <div className="hidden w-full print:hidden md:flex">
        <Progress id={"desktop-progress-bar"} />
      </div>

      <div
        className={`w-full border-b border-b-berlin-black-40 ${
          currentStep === 0 || currentStep === 16 ? "flex" : "hidden md:flex"
        } `}
      ></div>

      <footer
        className={`flex py-5
        ${currentStep === 0 || currentStep === 16 ? "flex" : "hidden md:flex"}
      `}
        id="footer"
      >
        <div className="flex w-full flex-wrap justify-start gap-x-10 gap-y-8 px-8 text-sm sm:justify-center md:gap-x-20 md:px-5">
          <div className="flex flex-col gap-4">
            Durchgeführt von
            <img
              src="/images/logo-citylab-berlin-outline.svg"
              alt="Logo von CityLab Berlin"
              className="w-32"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4">
            Ein Projekt der
            <img
              src="/images/logo-technologiestiftung-berlin-de.svg"
              alt="Logo von Technologiestiftung Berlin"
              className="w-32"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4">
            Mit Unterstützung von
            <img
              src="/images/logo-senatskanzlei-buergermeister-vertikal.svg"
              alt="Logo von Berlins Regierender Bürgermeister"
              className="w-28"
              loading="lazy"
            />
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
