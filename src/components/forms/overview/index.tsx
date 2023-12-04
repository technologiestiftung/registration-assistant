import { labels } from "./labels.ts";
import { useOverviewStore } from "./store";
import { useProgressStore } from "../../daisyui-progress/store";

export function Overview() {
  const requiredDocs = useOverviewStore((state) => state.docs);
  const setDocs = useOverviewStore((state) => state.setDocs);
  const goToPreviousStep = useProgressStore(
    (state) => state.decrementCurrentStep,
  );

  const items = [
    ...Array.from(
      Object.entries(requiredDocs).filter(([, value]) => value !== null),
    ),
  ];

  return (
    <div className="flex h-full flex-col gap-4">
      <h2 className="text-lg font-semibold">
        Dokumente für deinen Anmelde-Termin
      </h2>

      <p>
        Bitte bringe die Dokumente ausgefüllt, unterschrieben und gedruckt zu
        deinem Termin mit.
      </p>

      <ul>
        {items.map(([key, value], index) => (
          <li
            key={key}
            className={`flex w-full gap-2 rounded px-4 py-3 ${
              index % 2 === 0 ? "bg-gray-100" : ""
            }`}
          >
            <input
              type="checkbox"
              className="checkbox"
              checked={value === true}
              onChange={() => setDocs({ [key]: !value })}
            />
            {/* @ts-ignore */}
            {labels[key]}
          </li>
        ))}
      </ul>
      <div className="flex h-full w-full items-end justify-between">
        <button
          className="btn"
          type="button"
          onClick={() => goToPreviousStep()}
        >
          Zurück
        </button>
      </div>
    </div>
  );
}
