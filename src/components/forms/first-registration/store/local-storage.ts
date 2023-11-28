import { FirstRegistration, FirstRegistrationSchema } from "./types";

const FIRST_REGISTRATION_KEY = "first-registration";

export function getLocalStorage(): FirstRegistration {
  const foundItemJson = localStorage.getItem(FIRST_REGISTRATION_KEY);

  if (!foundItemJson) {
    return {
      isMarried: null,
      isFirstRegistration: null,
      requiredDocs: {
        birthCertificate: false,
        marriageCertificate: false,
      },
    };
  }

  try {
    const foundItemObject = JSON.parse(foundItemJson);

    return FirstRegistrationSchema.parse(foundItemObject);
  } catch (e) {
    console.error(e);
  }

  return {
    isMarried: null,
    isFirstRegistration: null,
    requiredDocs: {
      birthCertificate: false,
      marriageCertificate: false,
    },
  };
}

export function setLocalStorage(value: FirstRegistration) {
  localStorage.setItem(FIRST_REGISTRATION_KEY, JSON.stringify(value));
}
