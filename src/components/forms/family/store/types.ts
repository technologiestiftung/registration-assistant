import { z } from "zod";

const FamilyDocsSchema = z.object({
  additionalRegistrationForm: z.boolean(),
  childPassport: z.boolean(),
  guardianConsent: z.boolean(),
});

export const FamilySchema = z.object({
  requiredDocs: FamilyDocsSchema,
  isRegisteringWholeFamily: z.boolean().nullable(),
  isRegisteringMoreThanTwo: z.boolean().nullable(),
  hasChild: z.boolean().nullable(),
});

export type Family = z.infer<typeof FamilySchema>;

const FamilyStoreSchema = FamilySchema.extend({
  setIsRegisteringWholeFamily: z.function().args(z.boolean()).returns(z.void()),
  setIsRegisteringMoreThanTwo: z
    .function()
    .args(z.boolean().nullable())
    .returns(z.void()),
  setHasChild: z.function().args(z.boolean().nullable()).returns(z.void()),
  isValid: z.function().args(z.void()).returns(z.boolean()),
});

export type FamilyStore = z.infer<typeof FamilyStoreSchema>;
