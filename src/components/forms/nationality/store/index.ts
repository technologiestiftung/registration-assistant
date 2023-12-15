import { create } from "zustand";
import { NationalityStore } from "./types.ts";
import { getLocalStorage, setLocalStorage } from "./local-storage.ts";
import { useOverviewStore } from "../../overview/store";

export const useNationalityStore = create<NationalityStore>((set, get) => ({
  requiredDocs: getLocalStorage().requiredDocs,

  isGerman: getLocalStorage().isGerman,
  setIsGerman(isGerman) {
    const requiredDocs = {
      germanIdOrPassportOrChildPassport: false,
      germanIdOrPassport: false,
      euIdOrPassportOrReplacement: false,
      nonEuIdOrPassportOrReplacement: false,
      confirmationOfCustodian: false,
    };

    set({
      isGerman,
      isGermanUnder16: null,
      isEuropean: null,
      isRefugee: null,
      isNonGermanUnder16: null,
      requiredDocs,
    });

    setLocalStorage(get());
    useOverviewStore.getState().setRequiredDocs(requiredDocs);
  },

  isGermanUnder16: getLocalStorage().isGermanUnder16,
  setIsGermanUnder16(isGermanUnder16) {
    const requiredDocs = {
      germanIdOrPassportOrChildPassport: isGermanUnder16,
      germanIdOrPassport: !isGermanUnder16,
      euIdOrPassportOrReplacement: false,
      nonEuIdOrPassportOrReplacement: false,
      confirmationOfCustodian: isGermanUnder16,
    };

    set({
      isGermanUnder16,
      requiredDocs,
    });

    setLocalStorage(get());
    useOverviewStore.getState().setRequiredDocs(requiredDocs);
  },

  isEuropean: getLocalStorage().isEuropean,
  setIsEuropean(isEuropean) {
    const requiredDocs = {
      ...get().requiredDocs,
      euIdOrPassportOrReplacement: isEuropean,
      nonEuIdOrPassportOrReplacement: !isEuropean,
    };

    set({
      isEuropean,
      requiredDocs,
    });

    setLocalStorage(get());
    useOverviewStore.getState().setRequiredDocs(requiredDocs);
  },

  isNonGermanUnder16: getLocalStorage().isNonGermanUnder16,
  setIsNonGermanUnder16(isNonGermanUnder16: boolean) {
    const requiredDocs = {
      ...get().requiredDocs,
      confirmationOfCustodian: isNonGermanUnder16,
    };

    set({
      isNonGermanUnder16,
      requiredDocs,
    });

    setLocalStorage(get());
    useOverviewStore.getState().setRequiredDocs(requiredDocs);
  },

  isRefugee: getLocalStorage().isRefugee,
  setIsRefugee(isRefugee) {
    set({ isRefugee });

    setLocalStorage(get());
  },
}));
