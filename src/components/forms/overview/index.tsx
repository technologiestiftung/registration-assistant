import { labels } from "./labels.ts";
import { useOverviewStore } from "./store";

export function Overview({
  goToPreviousStep,
}: {
  goToPreviousStep: () => void;
}) {
  const requiredDocs = useOverviewStore((state) => state.docs);
  const setDocs = useOverviewStore((state) => state.setDocs);

  const items = [
    ...Array.from(
      Object.entries(requiredDocs).filter(([, value]) => value !== null),
    ),
  ];

  return (
    <div className="flex h-full flex-col gap-3">
      <h3 className="text-center">Übersicht</h3>
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
        <button className="btn" type="button" onClick={goToPreviousStep}>
          Zurück
        </button>
      </div>
    </div>
  );
}
