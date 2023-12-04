import { z } from "zod";

export const availableLanguages: readonly [string, ...string[]] = ["de", "en"];

const availableLanguagesSchema = z.enum(availableLanguages);

export type AvailableLanguages = z.infer<typeof availableLanguagesSchema>;

export const i18nSchema = z.object({
  language: availableLanguagesSchema,
});

export type i18n = z.infer<typeof i18nSchema>;

const i18nStoreSchema = i18nSchema.extend({
  setLanguage: z.function().args(availableLanguagesSchema).returns(z.void()),
});

export type i18nStore = z.infer<typeof i18nStoreSchema>;
