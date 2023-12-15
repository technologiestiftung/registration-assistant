import { z } from "zod";

export const ProgressSchema = z.object({
  currentStep: z.number(),
});

export type Progress = z.infer<typeof ProgressSchema>;

const ProgressStoreSchema = ProgressSchema.extend({
  maxSteps: z.number(),
  setCurrentStep: z.function().args(z.number()).returns(z.void()),
  goToNextStep: z.function().args(z.void()).returns(z.void()),
  goToPreviousStep: z.function().args(z.void()).returns(z.void()),
});

export type ProgressStore = z.infer<typeof ProgressStoreSchema>;
