import { create } from "zustand";
import { SecondaryResidenceStore } from "./types.ts";
import { getLocalStorage, setLocalStorage } from "./local-storage.ts";
import { useOverviewStore } from "../../overview/store";

export const useSecondaryResidenceStore = create<SecondaryResidenceStore>(
  (set, get) => ({
    requiredDocs: getLocalStorage().requiredDocs,

    isSecondaryResidence: getLocalStorage().isSecondaryResidence,
    setIsSecondaryResidence(isSecondaryResidence) {
      const requiredDocs = {
        supplement: false,
      };

      set({
        isSecondaryResidence,
        hasMainResidenceAbroad: null,
        isRegisteringForMoreThanThreeMonths: null,
        isRegisteringForMoreThanSixMonths: null,
        requiredDocs,
      });

      setLocalStorage(get());
      useOverviewStore.getState().setRequiredDocs(requiredDocs);
    },

    hasMainResidenceAbroad: getLocalStorage().hasMainResidenceAbroad,
    setHasMainResidenceAbroad(hasMainResidenceAbroad) {
      const requiredDocs = {
        supplement: false,
      };

      set({
        hasMainResidenceAbroad,
        isRegisteringForMoreThanThreeMonths: null,
        isRegisteringForMoreThanSixMonths: null,
        requiredDocs,
      });

      setLocalStorage(get());
      useOverviewStore.getState().setRequiredDocs(requiredDocs);
    },

    isRegisteringForMoreThanThreeMonths:
      getLocalStorage().isRegisteringForMoreThanThreeMonths,
    setIsRegisteringForMoreThanThreeMonths(
      isRegisteringForMoreThanThreeMonths,
    ) {
      const requiredDocs = {
        supplement:
          get().hasMainResidenceAbroad === true &&
          isRegisteringForMoreThanThreeMonths === true,
      };

      set({
        isRegisteringForMoreThanThreeMonths,
        requiredDocs,
      });

      setLocalStorage(get());
      useOverviewStore.getState().setRequiredDocs(requiredDocs);
    },

    isRegisteringForMoreThanSixMonths:
      getLocalStorage().isRegisteringForMoreThanSixMonths,
    setIsRegisteringForMoreThanSixMonths: (
      isRegisteringForMoreThanSixMonths,
    ) => {
      const requiredDocs = {
        supplement:
          get().hasMainResidenceAbroad === false &&
          isRegisteringForMoreThanSixMonths === true,
      };

      set({
        isRegisteringForMoreThanSixMonths,
        requiredDocs,
      });

      setLocalStorage(get());
      useOverviewStore.getState().setRequiredDocs(requiredDocs);
    },

    isValid: () => {
      const {
        isSecondaryResidence,
        isRegisteringForMoreThanThreeMonths,
        isRegisteringForMoreThanSixMonths,
      } = get();

      return (
        isSecondaryResidence === false ||
        typeof isRegisteringForMoreThanThreeMonths === "boolean" ||
        typeof isRegisteringForMoreThanSixMonths === "boolean"
      );
    },
  }),
);
