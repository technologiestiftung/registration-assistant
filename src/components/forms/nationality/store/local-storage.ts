import { Nationality, NationalitySchema } from "./types.ts";

const NATIONALITY_KEY = "nationality";

export function getLocalStorage(): Nationality {
  const foundItemJson = localStorage.getItem(NATIONALITY_KEY);

  if (!foundItemJson) {
    return {
      isGerman: null,
      isUnder13: null,
      isUkrainianRefugee: null,
      requiredDocs: {
        germanChildPassport: false,
        germanIdOrPassport: false,
        foreignIdOrPassport: false,
        confirmationOfPermanentAccommodationForUkrainianRefugees: false,
      },
    };
  }

  try {
    const foundItemObject = JSON.parse(foundItemJson);

    return NationalitySchema.parse(foundItemObject);
  } catch (e) {
    console.error(e);
  }

  return {
    isGerman: null,
    isUnder13: null,
    isUkrainianRefugee: null,
    requiredDocs: {
      germanChildPassport: false,
      germanIdOrPassport: false,
      foreignIdOrPassport: false,
      confirmationOfPermanentAccommodationForUkrainianRefugees: false,
    },
  };
}

export function setLocalStorage(value: Nationality) {
  localStorage.setItem(NATIONALITY_KEY, JSON.stringify(value));
}
