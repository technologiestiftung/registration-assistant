// import { Intro } from "../forms/intro";
import { FirstRegistration } from "../forms/first-registration";
import { Nationality } from "../forms/nationality";
import { Family } from "../forms/family";
import { SecondaryResidence } from "../forms/secondary-residence";
import { Overview } from "../forms/overview";
import { useProgressStore } from "./store";

export function ProgressForm() {
  const currentStep = useProgressStore((state) => state.currentStep);

  const steps = [
    // <Intro />,
    <FirstRegistration />,
    <Nationality />,
    <Family />,
    <SecondaryResidence />,
    <Overview />,
  ];

  return (
    <div className="flex flex-col items-center gap-4 pb-12 pt-8">
      <progress
        className="progress progress-primary w-56"
        value={currentStep + 1}
        max={steps.length - 1}
      />
      <div className="flex w-full justify-center">
        <div className="flex min-h-[13rem] min-w-[22rem] max-w-[26rem] flex-col gap-2 rounded border p-4">
          {steps[currentStep]}
        </div>
      </div>
    </div>
  );
}
