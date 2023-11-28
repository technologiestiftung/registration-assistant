import { Family, FamilySchema } from "./types.ts";

const FAMILY_KEY = "family";

export function getLocalStorage(): Family {
  const foundItemJson = localStorage.getItem(FAMILY_KEY);

  if (!foundItemJson) {
    return {
      isRegisteringWholeFamily: null,
      isRegisteringMoreThanTwo: null,
      hasChild: null,
      requiredDocs: {
        additionalRegistrationForm: false,
        childPassport: false,
        guardianConsent: false,
      },
    };
  }

  try {
    const foundItemObject = JSON.parse(foundItemJson);

    return FamilySchema.parse(foundItemObject);
  } catch (e) {
    console.error(e);
  }

  return {
    isRegisteringWholeFamily: null,
    isRegisteringMoreThanTwo: null,
    hasChild: null,
    requiredDocs: {
      additionalRegistrationForm: false,
      childPassport: false,
      guardianConsent: false,
    },
  };
}

export function setLocalStorage(value: Family) {
  localStorage.setItem(FAMILY_KEY, JSON.stringify(value));
}
