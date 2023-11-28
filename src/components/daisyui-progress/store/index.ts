import { create } from "zustand";
import { ProgressStore } from "./types.ts";
import { getLocalStorage, setLocalStorage } from "./local-storage.ts";

export const useProgressStore = create<ProgressStore>((set, get) => ({
  currentStep: getLocalStorage().currentStep,
  setCurrentStep(currentStep: number) {
    set({ currentStep });
    setLocalStorage(get());
  },

  incrementCurrentStep() {
    const canIncrement = get().currentStep < 5;
    if (!canIncrement) {
      return;
    }

    get().setCurrentStep(get().currentStep + 1);
  },

  decrementCurrentStep() {
    const canDecrement = get().currentStep > 0;
    if (!canDecrement) {
      return;
    }

    get().setCurrentStep(get().currentStep - 1);
  },
}));
