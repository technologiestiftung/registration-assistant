import { useProgressStore } from "../steps/store";

export function Progress() {
  const currentStep = useProgressStore((state) => state.currentStep);
  const maxStep = useProgressStore((state) => state.maxSteps);

  return (
    <>
      <label htmlFor="progress-bar" className="sr-only">
        Current progress: {currentStep} of {maxStep} steps
      </label>
      <progress
        className="h-1 w-full bg-transparent"
        id="progress-bar"
        value={currentStep}
        max={maxStep}
      />
    </>
  );
}
