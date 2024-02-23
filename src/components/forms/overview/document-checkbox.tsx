import { DocumentLink } from "./document-link.tsx";
import { useOverviewStore } from "./store";
import { InfoButton } from "../../buttons/info-button";
import { useI18n } from "../../../i18n/hook/useI18n";

export function DocumentCheckbox({
  id,
  value,
}: {
  id: string;
  value: boolean | null;
}) {
  const setDocs = useOverviewStore((state) => state.setDocs);
  const t = useI18n();

  return (
    <li className="flex w-full flex-col items-center gap-2 border border-berlin-gray bg-berlin-lighter-gray">
      <label
        htmlFor={id}
        className="flex w-full cursor-pointer items-center justify-between gap-2 px-4 py-2"
      >
        <div className="flex items-center gap-2">
          <div className="flex h-5 w-5">
            <input
              type="checkbox"
              className="h-5 w-5"
              id={id}
              checked={value === true}
              onChange={() => {
                setDocs({ [id]: !value });

                if (matchMedia("(prefers-reduced-motion: reduce)").matches) {
                  return;
                }

                const docs = [
                  ...Array.from(
                    Object.entries(useOverviewStore.getState().docs).filter(
                      ([, value]) => value !== null,
                    ),
                  ),
                ];

                if (docs.some(([, value]) => value === false)) {
                  return;
                }

                useOverviewStore.getState().requestConfetti();
              }}
            />
          </div>
          <span
            className={
              value === true ? "text-gray-400 line-through" : undefined
            }
          >
            {t(id)}
          </span>
        </div>

        <div
          className="tooltip text-start sm:tooltip-top ltr:tooltip-left rtl:tooltip-right print:hidden"
          data-tip={t(`${id}.tooltip`)}
        >
          <InfoButton />
        </div>
      </label>
      <DocumentLink id={id} />
    </li>
  );
}
