import { Intro } from "../forms/intro";
import { Overview } from "../forms/overview";
import { useProgressStore } from "./store";
import {
  IsFirstRegistration,
  HasChild,
  IsMarried,
  IsRegisteringSpouse,
  IsRegisteringChild,
  IsRegisteringMoreThanTwo,
} from "../forms/first-registration";
import {
  IsGerman,
  IsGermanUnder16,
  IsEuropean,
  IsNonGermanUnder16,
  IsRefugee,
} from "../forms/nationality";
import {
  HasOtherResidence,
  IsOtherResidenceAbroad,
  IsRegisteringForMoreThanThreeMonths,
  IsRegisteringForMoreThanSixMonths,
} from "../forms/other-residence";

export function Steps() {
  const currentStep = useProgressStore((state) => state.currentStep);

  const steps = [
    <Intro />,
    <IsFirstRegistration />,
    <IsMarried />,
    <IsRegisteringSpouse />,
    <HasChild />,
    <IsRegisteringChild />,
    <IsRegisteringMoreThanTwo />,
    <IsGerman />,
    <IsGermanUnder16 />,
    <IsEuropean />,
    <IsNonGermanUnder16 />,
    <IsRefugee />,
    <HasOtherResidence />,
    <IsOtherResidenceAbroad />,
    <IsRegisteringForMoreThanThreeMonths />,
    <IsRegisteringForMoreThanSixMonths />,
    <Overview />,
  ];

  return (
    <div className="flex w-[22rem] flex-col items-end gap-4">
      {steps[currentStep]}
    </div>
  );
}
