import { SecondaryResidence, SecondaryResidenceSchema } from "./types.ts";

const SECONDARY_RESIDENCE_KEY = "secondary-residence";

export function getLocalStorage(): SecondaryResidence {
  const foundItemJson = localStorage.getItem(SECONDARY_RESIDENCE_KEY);

  if (!foundItemJson) {
    return {
      isSecondaryResidence: null,
      hasMainResidenceAbroad: null,
      isRegisteringForMoreThanThreeMonths: null,
      isRegisteringForMoreThanSixMonths: null,
      requiredDocs: {
        supplement: false,
      },
    };
  }

  try {
    const foundItemObject = JSON.parse(foundItemJson);

    return SecondaryResidenceSchema.parse(foundItemObject);
  } catch (e) {
    console.error(e);
  }

  return {
    isSecondaryResidence: null,
    hasMainResidenceAbroad: null,
    isRegisteringForMoreThanThreeMonths: null,
    isRegisteringForMoreThanSixMonths: null,
    requiredDocs: {
      supplement: false,
    },
  };
}

export function setLocalStorage(value: SecondaryResidence) {
  localStorage.setItem(SECONDARY_RESIDENCE_KEY, JSON.stringify(value));
}
