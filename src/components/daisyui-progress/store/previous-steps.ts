import { useFirstRegistrationStore } from "../../forms/first-registration/store";
import { useNationalityStore } from "../../forms/nationality/store";
import { useOtherResidenceStore } from "../../forms/other-residence/store";
import { useProgressStore } from "./index.ts";

export function handleHasChildPreviousStep() {
  if (useFirstRegistrationStore.getState().isMarried === false) {
    useProgressStore
      .getState()
      .setCurrentStep(useProgressStore.getState().currentStep - 2);
    return;
  }

  useProgressStore
    .getState()
    .setCurrentStep(useProgressStore.getState().currentStep - 1);
  return;
}

export function handleIsGermanPreviousStep() {
  if (
    useFirstRegistrationStore.getState().isRegisteringSpouse === false &&
    useFirstRegistrationStore.getState().isRegisteringChild === true
  ) {
    useProgressStore
      .getState()
      .setCurrentStep(useProgressStore.getState().currentStep - 1);
    return;
  }

  if (useFirstRegistrationStore.getState().hasChild === false) {
    useProgressStore
      .getState()
      .setCurrentStep(useProgressStore.getState().currentStep - 3);
    return;
  }

  useProgressStore
    .getState()
    .setCurrentStep(useProgressStore.getState().currentStep - 2);
}
export function handleIsEuropeanPreviousStep() {
  useProgressStore
    .getState()
    .setCurrentStep(useProgressStore.getState().currentStep - 2);
}
export function handleHasOtherResidencePreviousStep() {
  if (useNationalityStore.getState().isGerman === true) {
    useProgressStore
      .getState()
      .setCurrentStep(useProgressStore.getState().currentStep - 4);
    return;
  }

  useProgressStore
    .getState()
    .setCurrentStep(useProgressStore.getState().currentStep - 1);
}

export function handleIsRegisteringForMoreThanSixMonthsPreviousStep() {
  useProgressStore
    .getState()
    .setCurrentStep(useProgressStore.getState().currentStep - 2);
}

export function handleOverviewPreviousStep() {
  if (useOtherResidenceStore.getState().hasOtherResidence === false) {
    useProgressStore
      .getState()
      .setCurrentStep(useProgressStore.getState().currentStep - 4);
    return;
  }

  if (
    useOtherResidenceStore.getState().hasOtherResidence === true &&
    useOtherResidenceStore.getState().isOtherResidenceAbroad === false
  ) {
    useProgressStore
      .getState()
      .setCurrentStep(useProgressStore.getState().currentStep - 2);
    return;
  }

  useProgressStore
    .getState()
    .setCurrentStep(useProgressStore.getState().currentStep - 1);
}
