import { useOverviewStore } from "./store";
import { useProgressStore } from "../../daisyui-progress/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";
import { DocumentLabel } from "./document-label.tsx";

export function Overview() {
  const requiredDocs = useOverviewStore((state) => state.docs);
  const setDocs = useOverviewStore((state) => state.setDocs);
  const goToPreviousStep = useProgressStore(
    (state) => state.decrementCurrentStep,
  );

  const language = useI18nStore((state) => state.language);

  const documents = [
    ...Array.from(
      Object.entries(requiredDocs).filter(([, value]) => value !== null),
    ),
  ];

  return (
    <div className="flex h-full flex-col gap-4">
      <h2 className="text-lg font-semibold">{t("overview.title", language)}</h2>

      <p>{t("overview.text", language)}</p>

      <ul>
        {documents.map(([key, value], index) => (
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
            <DocumentLabel id={key} />
          </li>
        ))}
      </ul>

      <div className="flex h-full w-full items-end justify-between">
        <button
          className="btn"
          type="button"
          onClick={() => goToPreviousStep()}
        >
          {t("button.back", language)}
        </button>
      </div>
    </div>
  );
}
