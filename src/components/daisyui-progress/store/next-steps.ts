import { useFirstRegistrationStore } from "../../forms/first-registration/store";
import { useNationalityStore } from "../../forms/nationality/store";
import { useOtherResidenceStore } from "../../forms/other-residence/store";
import { useProgressStore } from "./index.ts";

export function handleIsMarriedNextStep() {
  if (useFirstRegistrationStore.getState().isMarried === false) {
    useProgressStore
      .getState()
      .setCurrentStep(useProgressStore.getState().currentStep + 2);
    return;
  }

  useProgressStore
    .getState()
    .setCurrentStep(useProgressStore.getState().currentStep + 1);
}

export function handleHasChildNextStep() {
  if (useFirstRegistrationStore.getState().hasChild === false) {
    useProgressStore
      .getState()
      .setCurrentStep(useProgressStore.getState().currentStep + 3);
    return;
  }

  useProgressStore
    .getState()
    .setCurrentStep(useProgressStore.getState().currentStep + 1);
}

export function handleIsRegisteringChildNextStep() {
  if (
    (useFirstRegistrationStore.getState().isMarried === false ||
      useFirstRegistrationStore.getState().isRegisteringSpouse === false) &&
    useFirstRegistrationStore.getState().isRegisteringChild === true
  ) {
    useProgressStore
      .getState()
      .setCurrentStep(useProgressStore.getState().currentStep + 1);
    return;
  }

  useProgressStore
    .getState()
    .setCurrentStep(useProgressStore.getState().currentStep + 2);
}

export function handleIsGermanNextStep() {
  if (useNationalityStore.getState().isGerman === false) {
    useProgressStore
      .getState()
      .setCurrentStep(useProgressStore.getState().currentStep + 2);
    return;
  }

  useProgressStore
    .getState()
    .setCurrentStep(useProgressStore.getState().currentStep + 1);
}

export function handleIsGermanUnder16NextStep() {
  useProgressStore
    .getState()
    .setCurrentStep(useProgressStore.getState().currentStep + 4);
}

export function handleHasOtherResidenceNextStep() {
  if (useOtherResidenceStore.getState().hasOtherResidence === false) {
    useProgressStore
      .getState()
      .setCurrentStep(useProgressStore.getState().currentStep + 4);
    return;
  }

  useProgressStore
    .getState()
    .setCurrentStep(useProgressStore.getState().currentStep + 1);
}

export function handleIsOtherResidenceAbroadNextStep() {
  if (useOtherResidenceStore.getState().isOtherResidenceAbroad === true) {
    useProgressStore
      .getState()
      .setCurrentStep(useProgressStore.getState().currentStep + 2);
    return;
  }

  useProgressStore
    .getState()
    .setCurrentStep(useProgressStore.getState().currentStep + 1);
}

export function handleIsRegisteringForMoreThanThreeMonthsNextStep() {
  useProgressStore
    .getState()
    .setCurrentStep(useProgressStore.getState().currentStep + 2);
}
