import { create } from "zustand";
import { FirstRegistrationStore } from "./types";
import { getLocalStorage, setLocalStorage } from "./local-storage";
import { useOverviewStore } from "../../overview/store";

export const useFirstRegistrationStore = create<FirstRegistrationStore>(
  (set, get) => ({
    requiredDocs: getLocalStorage().requiredDocs,

    isFirstRegistration: getLocalStorage().isFirstRegistration,
    setIsFirstRegistration(isFirstRegistration) {
      const requiredDocs = {
        ...get().requiredDocs,
        birthCertificate: isFirstRegistration,
      };

      set({
        isFirstRegistration,
        isMarried: null,
        requiredDocs,
      });

      setLocalStorage(get());
      useOverviewStore.getState().setRequiredDocs(requiredDocs);
    },

    isMarried: getLocalStorage().isFirstRegistration,
    setIsMarried(isMarried) {
      const requiredDocs = {
        ...get().requiredDocs,
        marriageCertificate: !!isMarried,
      };

      set({
        isMarried,
        requiredDocs,
      });

      setLocalStorage(get());
      useOverviewStore.getState().setRequiredDocs(requiredDocs);
    },

    isValid() {
      const { isFirstRegistration, isMarried } = get();
      return isFirstRegistration === false || typeof isMarried === "boolean";
    },
  }),
);
