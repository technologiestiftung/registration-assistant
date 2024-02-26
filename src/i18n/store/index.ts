import { create } from "zustand";
import { AvailableLanguages, i18nStore } from "./types.ts";
import { getLocalStorage, setLocalStorage } from "./local-storage.ts";
import { t } from "../translations";

export const useI18nStore = create<i18nStore>((set, get) => ({
  language: getLocalStorage().language,

  async setLanguage(language: AvailableLanguages) {
    set({ language });
    setLocalStorage(get());
    document.documentElement.lang = language;
    document.documentElement.dir = t("dir", language);
  },
}));
