import translationsJson from "./translations.json" assert { type: "json" };
import { AvailableLanguages } from "../store/types.ts";

const translations = translationsJson as Record<string, Record<string, string>>;

export function t(key: string, language: AvailableLanguages): string {
  return translations[language][key];
}
