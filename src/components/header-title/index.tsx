import { t } from "../../i18n/translations";
import { useI18nStore } from "../../i18n/store";

export function HeaderTitle() {
  const language = useI18nStore((state) => state.language);

  return (
    <h1 className="text-xl font-bold md:text-2xl">{t("title", language)}</h1>
  );
}
