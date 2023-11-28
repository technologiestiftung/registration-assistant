import { ProgressForm } from "./components/daisyui-progress";
// import { StepperForm } from "./components/daisyui-stepper";

function App() {
  return (
    <>
      <main className="flex flex-col gap-6 px-5">
        <h1 className="text-center text-2xl font-bold underline">Forms</h1>
        <ProgressForm />
        {/*<StepperForm />*/}
      </main>
    </>
  );
}

export default App;
