import { FirstRegistration } from "../forms/first-registration";
import { Nationality } from "../forms/nationality";
import { Overview } from "../forms/overview";
import { Family } from "../forms/family";
import { SecondaryResidence } from "../forms/secondary-residence";
import { useProgressStore } from "../daisyui-progress/store";

export function StepperForm() {
  const currentStep = useProgressStore((state) => state.currentStep);
  const incrementCurrentStep = useProgressStore(
    (state) => state.incrementCurrentStep,
  );
  const decrementCurrentStep = useProgressStore(
    (state) => state.decrementCurrentStep,
  );

  const steps = [
    {
      key: "first-registration",
      form: <FirstRegistration goToNextStep={incrementCurrentStep} />,
    },
    {
      key: "nationality",
      form: (
        <Nationality
          goToPreviousStep={decrementCurrentStep}
          goToNextStep={incrementCurrentStep}
        />
      ),
    },
    {
      key: "family",
      form: (
        <Family
          goToPreviousStep={decrementCurrentStep}
          goToNextStep={incrementCurrentStep}
        />
      ),
    },
    {
      key: "secondary-residence",
      form: (
        <SecondaryResidence
          goToPreviousStep={decrementCurrentStep}
          goToNextStep={incrementCurrentStep}
        />
      ),
    },
    {
      key: "overview",
      form: <Overview goToPreviousStep={decrementCurrentStep} />,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-lg font-bold">DaisyUI Stepper</h2>
      <div className="flex w-full justify-center">
        <div className="flex min-h-[13rem] w-96 flex-col gap-2 rounded border p-4">
          {steps[currentStep].form}
        </div>
      </div>
      <ul className="steps">
        {steps.map(({ key }, index) => (
          <li
            key={key}
            className={`step ${currentStep >= index ? "step-primary" : ""}`}
          />
        ))}
      </ul>
    </div>
  );
}
