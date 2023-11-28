import { create } from "zustand";
import { OverviewDocs, OverviewStore } from "./types.ts";
import { getLocalStorage, setLocalStorage } from "./local-storage.ts";

export const useOverviewStore = create<OverviewStore>((set, get) => ({
  docs: getLocalStorage(),

  setRequiredDocs(requiredDocs: Partial<OverviewDocs>) {
    console.log(requiredDocs);

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
