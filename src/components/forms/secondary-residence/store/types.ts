import { z } from "zod";

const SecondaryResidenceDocsSchema = z.object({
  supplement: z.boolean(),
});

export const SecondaryResidenceSchema = z.object({
  requiredDocs: SecondaryResidenceDocsSchema,
  isSecondaryResidence: z.boolean().nullable(),
  hasMainResidenceAbroad: z.boolean().nullable(),
  isRegisteringForMoreThanThreeMonths: z.boolean().nullable(),
  isRegisteringForMoreThanSixMonths: z.boolean().nullable(),
});

export type SecondaryResidence = z.infer<typeof SecondaryResidenceSchema>;

const SecondaryResidenceStoreSchema = SecondaryResidenceSchema.extend({
  setIsSecondaryResidence: z.function().args(z.boolean()).returns(z.void()),
  setHasMainResidenceAbroad: z
    .function()
    .args(z.boolean().nullable())
    .returns(z.void()),
  setIsRegisteringForMoreThanThreeMonths: z
    .function()
    .args(z.boolean().nullable())
    .returns(z.void()),
  setIsRegisteringForMoreThanSixMonths: z
    .function()
    .args(z.boolean().nullable())
    .returns(z.void()),
  isValid: z.function().args(z.void()).returns(z.boolean()),
});

export type SecondaryResidenceStore = z.infer<
  typeof SecondaryResidenceStoreSchema
>;
