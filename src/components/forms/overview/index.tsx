import { useOverviewStore } from "./store";
import { useProgressStore } from "../../steps/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";
import { DocumentCheckbox } from "./document-checkbox.tsx";

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
      <p>
        <b>Dein Termin:</b> 15. Dezember 2023, 15 Uhr
        <br />
        <b>Adresse</b>: Schlesische Straße 27A, 10997 Berlin (
        <a
          href="https://www.google.de/maps/place/Schlesische+Str.+27A,+10997+Berlin/@52.4984664,13.4448928,17z/data=!3m1!4b1!4m6!3m5!1s0x47a84e53becc02e7:0x39bee44340592b1!8m2!3d52.4984664!4d13.4474677!16s%2Fg%2F11b_242msd?entry=ttu"
          target="_blank"
          className="text-blue-700 underline visited:text-purple-500"
        >
          Route planen
        </a>
        )
      </p>

      <h2 className="font-bold">{t("overview.title", language)}</h2>

      <p dangerouslySetInnerHTML={{ __html: t("overview.text", language) }}></p>

      <ul className="flex flex-col gap-2">
        {documents.map(([key, value]) => (
          <DocumentCheckbox key={key} id={key} value={value} />
        ))}
      </ul>

      <div className="flex h-full w-full items-end justify-between">
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
