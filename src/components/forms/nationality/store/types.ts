import { z } from "zod";

const NationalityDocsSchema = z.object({
  germanChildPassport: z.boolean(),
  germanIdOrPassport: z.boolean(),
  foreignIdOrPassport: z.boolean(),
  confirmationOfPermanentAccommodationForUkrainianRefugees: z.boolean(),
});

export const NationalitySchema = z.object({
  requiredDocs: NationalityDocsSchema,
  isGerman: z.boolean().nullable(),
  isUnder13: z.boolean().nullable(),
  isUkrainianRefugee: z.boolean().nullable(),
});

export type Nationality = z.infer<typeof NationalitySchema>;

const Nationality = NationalitySchema.extend({
  setIsGerman: z.function().args(z.boolean()).returns(z.void()),
  setIsUnder13: z.function().args(z.boolean().nullable()).returns(z.void()),
  setIsUkrainianRefugee: z
    .function()
    .args(z.boolean().nullable())
    .returns(z.void()),
  isValid: z.function().args(z.void()).returns(z.boolean()),
});

export type NationalityStore = z.infer<typeof Nationality>;
