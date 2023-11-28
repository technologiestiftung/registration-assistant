import { create } from "zustand";
import { FamilyStore } from "./types.ts";
import { getLocalStorage, setLocalStorage } from "./local-storage.ts";
import { useOverviewStore } from "../../overview/store";

export const useFamilyStore = create<FamilyStore>((set, get) => ({
  requiredDocs: getLocalStorage().requiredDocs,

  isRegisteringWholeFamily: getLocalStorage().isRegisteringWholeFamily,
  setIsRegisteringWholeFamily(isRegisteringWholeFamily) {
    const requiredDocs = {
      additionalRegistrationForm: false,
      childPassport: false,
      guardianConsent: false,
    };

    set({
      isRegisteringWholeFamily,
      isRegisteringMoreThanTwo: null,
      hasChild: null,
      requiredDocs,
    });

    setLocalStorage(get());
    useOverviewStore.getState().setRequiredDocs(requiredDocs);
  },

  isRegisteringMoreThanTwo: getLocalStorage().isRegisteringMoreThanTwo,
  setIsRegisteringMoreThanTwo(isRegisteringMoreThanTwo) {
    const requiredDocs = {
      ...get().requiredDocs,
      additionalRegistrationForm: !!isRegisteringMoreThanTwo,
    };

    set({
      isRegisteringMoreThanTwo: isRegisteringMoreThanTwo,
      requiredDocs,
    });

    setLocalStorage(get());
    useOverviewStore.getState().setRequiredDocs(requiredDocs);
  },

  hasChild: getLocalStorage().hasChild,
  setHasChild(hasChild) {
    const requiredDocs = {
      ...get().requiredDocs,
      childPassport: !!hasChild,
      guardianConsent: !!hasChild,
    };

    set({
      hasChild,
      requiredDocs,
    });

    setLocalStorage(get());
    useOverviewStore.getState().setRequiredDocs(requiredDocs);
  },

  isValid: () => {
    const { isRegisteringWholeFamily, isRegisteringMoreThanTwo, hasChild } =
      get();
    return (
      isRegisteringWholeFamily === false ||
      (typeof isRegisteringMoreThanTwo === "boolean" &&
        typeof hasChild === "boolean")
    );
  },
}));
