import { t } from "../../i18n/translations";
import { useI18nStore } from "../../i18n/store";

export function HeaderTitle() {
  const language = useI18nStore((state) => state.language);

  return (
    <h1 className="text-xl font-bold md:text-2xl">
      {t("title", language)}{" "}
      <img
        src="/images/icon-checked-document.svg"
        alt=""
        className="mb-2 inline ltr:ml-2 rtl:mr-2"
      />
    </h1>
  );
}
