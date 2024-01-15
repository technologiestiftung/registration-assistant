import { useEffect } from "react";
import { trackInteraction } from "../../../feedback/matomo.ts";
import { useI18nStore } from "../../../../i18n/store";

export function useTrackIntroPageView() {
  const { language } = useI18nStore();

  useEffect(
    () =>
      trackInteraction({
        eventAction: "page render",
        eventName: `intro page rendered (language: ${language})`,
      }),
    [],
  );
}
