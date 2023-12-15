import { z } from "zod";

const NationalityDocsSchema = z.object({
  germanIdOrPassportOrChildPassport: z.boolean(),
  germanIdOrPassport: z.boolean(),
  confirmationOfCustodian: z.boolean(),
  euIdOrPassportOrReplacement: z.boolean(),
  nonEuIdOrPassportOrReplacement: z.boolean(),
});

export const NationalitySchema = z.object({
  requiredDocs: NationalityDocsSchema,
  isGerman: z.boolean().nullable(),
  isGermanUnder16: z.boolean().nullable(),
  isEuropean: z.boolean().nullable(),
  isNonGermanUnder16: z.boolean().nullable(),
  isRefugee: z.boolean().nullable(),
});

export type Nationality = z.infer<typeof NationalitySchema>;

const Nationality = NationalitySchema.extend({
  setIsGerman: z.function().args(z.boolean()).returns(z.void()),
  setIsGermanUnder16: z.function().args(z.boolean()).returns(z.void()),
  setIsEuropean: z.function().args(z.boolean()).returns(z.void()),
  setIsNonGermanUnder16: z.function().args(z.boolean()).returns(z.void()),
  setIsRefugee: z.function().args(z.boolean()).returns(z.void()),
});

export type NationalityStore = z.infer<typeof Nationality>;
