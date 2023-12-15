import { DocumentLink } from "./document-link.tsx";
import { useOverviewStore } from "./store";
import { t } from "../../../i18n/translations";
import { useI18nStore } from "../../../i18n/store";

export function DocumentCheckbox({
  id,
  value,
}: {
  id: string;
  value: boolean | null;
}) {
  const setDocs = useOverviewStore((state) => state.setDocs);
  const language = useI18nStore((state) => state.language);

  return (
    <li className="border-berlin-gray bg-berlin-lighter-gray flex w-full flex-col items-center gap-2 border">
      <label
        htmlFor={id}
        className="flex w-full cursor-pointer items-center justify-start gap-2 px-4 py-2"
      >
        <div className="flex h-5 w-5">
          <input
            type="checkbox"
            className="h-5 w-5"
            id={id}
            checked={value === true}
            onChange={() => setDocs({ [id]: !value })}
          />
        </div>
        {t(id, language)}
      </label>
      <DocumentLink id={id} />
    </li>
  );
}
