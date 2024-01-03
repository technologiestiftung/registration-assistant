import { create } from "zustand";
import { OverviewDocs, OverviewStore } from "./types.ts";
import { getLocalStorage, setLocalStorage } from "./local-storage.ts";
import { fireConfetti } from "../confetti.ts";

export const useOverviewStore = create<OverviewStore>((set, get) => ({
  docs: getLocalStorage(),

  isParticlesReady: false,
  isParticlesRequested: false,
  loadParticles() {
    if (get().isParticlesRequested) {
      return;
    }

    set({ isParticlesRequested: true });

    var confettiScript = document.createElement("script");
    confettiScript.setAttribute(
      "src",
      "/js/ts.particles.confetti.bundle.min.js",
    );
    document.body.appendChild(confettiScript);

    confettiScript.onload = () => {
      set({ isParticlesReady: true });
    };
  },
  requestConfetti() {
    if (!get().isParticlesRequested) {
      get().loadParticles();
    }

    const intervalId = setInterval(() => {
      if (!get().isParticlesReady) {
        return;
      }

      clearInterval(intervalId);
      fireConfetti();
    }, 100);
  },

  setRequiredDocs(requiredDocs: Partial<OverviewDocs>) {
    const docs = {
      ...get().docs,
    };

    for (const key in requiredDocs) {
      // @ts-ignore
      if (!requiredDocs[key]) {
        // @ts-ignore
        docs[key] = null;
        continue;
      }

      // @ts-ignore
      docs[key] = false;
    }

    get().setDocs(docs);
  },

  setDocs(docs: Partial<OverviewDocs>) {
    set({
      docs: {
        ...get().docs,
        ...docs,
      },
    });
    setLocalStorage(get().docs);
  },
}));
