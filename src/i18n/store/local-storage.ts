import { i18n, i18nSchema } from "./types.ts";

const I18N_KEY = "i18n";

export function getLocalStorage(): i18n {
  const foundItemJson = localStorage.getItem(I18N_KEY);

  if (!foundItemJson) {
    return {
      language: "de-DE",
    };
  }

  try {
    const foundItemObject = JSON.parse(foundItemJson);

    return i18nSchema.parse(foundItemObject);
  } catch (e) {
    console.error(e);
  }

  return {
    language: "de-DE",
  };
}

export function setLocalStorage(value: i18n) {
  localStorage.setItem(I18N_KEY, JSON.stringify(value));
}
