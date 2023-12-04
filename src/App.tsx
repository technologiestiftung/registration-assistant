import { ProgressForm } from "./components/daisyui-progress";
import { LanguageSelect } from "./components/language-select";

function App() {
  return (
    <>
      <main className="flex flex-col items-center px-5">
        <ProgressForm />

        <LanguageSelect />
      </main>
    </>
  );
}

export default App;
