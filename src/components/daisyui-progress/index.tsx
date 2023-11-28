import { FirstRegistration } from "../forms/first-registration";
import { Nationality } from "../forms/nationality";
import { Overview } from "../forms/overview";
import { Family } from "../forms/family";
import { SecondaryResidence } from "../forms/secondary-residence";
import { useProgressStore } from "./store";

export function ProgressForm() {
  const currentStep = useProgressStore((state) => state.currentStep);
  const incrementCurrentStep = useProgressStore(
    (state) => state.incrementCurrentStep,
  );
  const decrementCurrentStep = useProgressStore(
    (state) => state.decrementCurrentStep,
  );

  const steps = [
    <FirstRegistration goToNextStep={incrementCurrentStep} />,
    <Nationality
      goToPreviousStep={decrementCurrentStep}
      goToNextStep={incrementCurrentStep}
    />,
    <Family
      goToPreviousStep={decrementCurrentStep}
      goToNextStep={incrementCurrentStep}
    />,
    <SecondaryResidence
      goToPreviousStep={decrementCurrentStep}
      goToNextStep={incrementCurrentStep}
    />,
    <Overview goToPreviousStep={decrementCurrentStep} />,
  ];

  return (
    <div className="flex flex-col items-center gap-4 pb-12">
      <h2 className="text-lg font-bold">Progressbar</h2>
      <progress
        className="progress progress-primary w-56"
        value={currentStep + 1}
        max="5"
      />
      <div className="flex w-full justify-center">
        <div className="flex min-h-[13rem] w-96 flex-col gap-2 rounded border p-4">
          {steps[currentStep]}
        </div>
      </div>
    </div>
  );
}
