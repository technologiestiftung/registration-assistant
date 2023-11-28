import { create } from "zustand";
import { NationalityStore } from "./types.ts";
import { getLocalStorage, setLocalStorage } from "./local-storage.ts";
import { useOverviewStore } from "../../overview/store";

export const useNationalityStore = create<NationalityStore>((set, get) => ({
  requiredDocs: getLocalStorage().requiredDocs,

  isGerman: getLocalStorage().isGerman,
  setIsGerman(isGerman) {
    const requiredDocs = {
      germanChildPassport: false,
      germanIdOrPassport: isGerman,
      foreignIdOrPassport: !isGerman,
      confirmationOfPermanentAccommodationForUkrainianRefugees: false,
    };

    set({
      isGerman,
      isUnder13: null,
      isUkrainianRefugee: null,
      requiredDocs,
    });

    setLocalStorage(get());
    useOverviewStore.getState().setRequiredDocs(requiredDocs);
  },

  isUnder13: getLocalStorage().isUnder13,
  setIsUnder13(isUnder13) {
    const requiredDocs = {
      germanChildPassport: !!isUnder13,
      germanIdOrPassport: !isUnder13,
      foreignIdOrPassport: false,
      confirmationOfPermanentAccommodationForUkrainianRefugees: false,
    };

    set({
      isUnder13,
      requiredDocs,
    });

    setLocalStorage(get());
    useOverviewStore.getState().setRequiredDocs(requiredDocs);
  },

  isUkrainianRefugee: getLocalStorage().isUkrainianRefugee,
  setIsUkrainianRefugee(isUkrainianRefugee) {
    const requiredDocs = {
      germanChildPassport: false,
      germanIdOrPassport: false,
      foreignIdOrPassport: true,
      confirmationOfPermanentAccommodationForUkrainianRefugees:
        !!isUkrainianRefugee,
    };

    set({
      isUkrainianRefugee,
      requiredDocs,
    });

    setLocalStorage(get());
    useOverviewStore.getState().setRequiredDocs(requiredDocs);
  },

  isValid: () => {
    const { isUnder13, isUkrainianRefugee } = get();
    return (
      typeof isUnder13 === "boolean" || typeof isUkrainianRefugee === "boolean"
    );
  },
}));
