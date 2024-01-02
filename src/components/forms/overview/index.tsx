import { useOverviewStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";
import { DocumentCheckbox } from "./document-checkbox.tsx";
import { Appointment } from "../../appointment";

export function Overview() {
  const requiredDocs = useOverviewStore((state) => state.docs);
  const goToPreviousStep = useProgressStore((state) => state.goToPreviousStep);

  const language = useI18nStore((state) => state.language);

  const documents = [
    ...Array.from(
      Object.entries(requiredDocs).filter(([, value]) => value !== null),
    ),
  ];

  return (
    <div className="flex h-full flex-col gap-4">
      <Appointment />

      <h2 className="flex w-full items-center justify-between font-bold">
        {t("overview.title", language)}{" "}
        <button
          onClick={() => window.print()}
          className="border-2 border-black bg-white px-5 py-2 font-normal hover:border-berlin-red hover:bg-berlin-red hover:text-white print:hidden"
        >
          {t("print", language)}
        </button>
      </h2>

      <p dangerouslySetInnerHTML={{ __html: t("overview.text", language) }}></p>

      <ul className="flex flex-col gap-2">
        {documents.map(([key, value]) => (
          <DocumentCheckbox key={key} id={key} value={value} />
        ))}
      </ul>

      <div className="flex h-full w-full items-end justify-between print:hidden">
        <button
          className="border-2 border-black bg-white px-5 py-2 hover:border-berlin-red hover:bg-berlin-red hover:text-white"
          type="button"
          onClick={() => goToPreviousStep()}
        >
          {t("button.back", language)}
        </button>
      </div>
    </div>
  );
}
