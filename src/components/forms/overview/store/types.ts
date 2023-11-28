import { z } from "zod";

export const OverviewDocsSchema = z.object({
  registrationForm: z.boolean(),
  movingInConfirmation: z.boolean(),

  birthCertificate: z.boolean().nullable(),
  marriageCertificate: z.boolean().nullable(),

  germanChildPassport: z.boolean().nullable(),
  germanIdOrPassport: z.boolean().nullable(),
  foreignIdOrPassport: z.boolean().nullable(),
  confirmationOfPermanentAccommodationForUkrainianRefugees: z
    .boolean()
    .nullable(),

  additionalRegistrationForm: z.boolean().nullable(),
  childPassport: z.boolean().nullable(),
  guardianConsent: z.boolean().nullable(),

  supplement: z.boolean().nullable(),
});

export type OverviewDocs = z.infer<typeof OverviewDocsSchema>;

const OverviewStoreSchema = z.object({
  docs: OverviewDocsSchema,
  setRequiredDocs: z
    .function()
    .args(OverviewDocsSchema.partial())
    .returns(z.void()),
  setDocs: z.function().args(OverviewDocsSchema.partial()).returns(z.void()),
});

export type OverviewStore = z.infer<typeof OverviewStoreSchema>;
