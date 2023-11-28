import { z } from "zod";

export const ProgressSchema = z.object({
  currentStep: z.number(),
});

export type Progress = z.infer<typeof ProgressSchema>;

const ProgressStoreSchema = ProgressSchema.extend({
  setCurrentStep: z.function().args(z.number()).returns(z.void()),
  incrementCurrentStep: z.function().args(z.void()).returns(z.void()),
  decrementCurrentStep: z.function().args(z.void()).returns(z.void()),
});

export type ProgressStore = z.infer<typeof ProgressStoreSchema>;
