import { useEffect } from "react";

export function useSaveIntroPageViewInSessionStorage() {
  useEffect(saveIntroPageViewInSessionStorage, []);
}

function saveIntroPageViewInSessionStorage() {
  sessionStorage.setItem("has-seen-intro-page-view", "true");
}
