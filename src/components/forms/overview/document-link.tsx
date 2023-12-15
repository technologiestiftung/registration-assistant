import { t } from "../../../i18n/translations";
import { useI18nStore } from "../../../i18n/store";

export function DocumentLink({ id }: { id: string }) {
  const language = useI18nStore((state) => state.language);

  let url = "";

  switch (id) {
    case "registrationForm":
      url =
        "https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/anmeldung_bei_der_meldebehoerde.pdf";
      break;

    case "movingInConfirmation":
      url =
        "https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/mdb-f402544-20161102_wohnungsgeberbestaetigung.pdf";
      break;

    case "additionalRegistrationForm":
      url =
        "https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/anmeldung_bei_der_meldebehoerde.pdf";
      break;

    case "guardianConsent":
      url =
        "https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/20190125_einverstaendniserklaerung_der_sorgeberechtigten.pdf";
      break;

    case "confirmationOfCustodian":
      url =
        "https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/20190125_einverstaendniserklaerung_der_sorgeberechtigten.pdf";
      break;

    case "supplement":
      url =
        "https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/mdb-f402610-beiblatt_zur_anmeldung_blanko.pdf";
      break;
  }

  if (url === "") {
    return null;
  }

  return (
    <div className="bg-berlin-light-gray h-full w-full px-4 py-2">
      <a
        href={url}
        target="_blank"
        className="flex w-fit gap-1 text-blue-500 underline visited:text-purple-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
        {t("download", language)}
      </a>
    </div>
  );
}
