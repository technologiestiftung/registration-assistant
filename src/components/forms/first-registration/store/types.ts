import { z } from "zod";

const FirstRegistrationDocsSchema = z.object({
  birthCertificate: z.boolean(),
  marriageCertificate: z.boolean(),
});

export const FirstRegistrationSchema = z.object({
  requiredDocs: FirstRegistrationDocsSchema,
  isFirstRegistration: z.boolean().nullable(),
  isMarried: z.boolean().nullable(),
});

export type FirstRegistration = z.infer<typeof FirstRegistrationSchema>;

const FirstRegistrationStoreSchema = FirstRegistrationSchema.extend({
  setIsFirstRegistration: z.function().args(z.boolean()).returns(z.void()),
  setIsMarried: z.function().args(z.boolean().nullable()).returns(z.void()),
  isValid: z.function().args(z.void()).returns(z.boolean()),
});

export type FirstRegistrationStore = z.infer<
  typeof FirstRegistrationStoreSchema
>;
