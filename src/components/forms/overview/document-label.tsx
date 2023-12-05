import { t } from "../../../i18n/translations";
import { useI18nStore } from "../../../i18n/store";

export function DocumentLabel({ id }: { id: string }) {
  const language = useI18nStore((state) => state.language);

  switch (id) {
    case "registrationForm":
      return (
        <label>
          {t("registrationForm.label", language)}{" "}
          <a
            href="https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/anmeldung_bei_der_meldebehoerde.pdf"
            target="_blank"
            className="text-blue-500 underline"
          >
            {t("registrationForm.link", language)}
          </a>
        </label>
      );
    case "additionalRegistrationForm":
      return (
        <label>
          {t("additionalRegistrationForm.label", language)}{" "}
          <a
            href="https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/anmeldung_bei_der_meldebehoerde.pdf"
            target="_blank"
            className="text-blue-500 underline"
          >
            {t("additionalRegistrationForm.link", language)}
          </a>
        </label>
      );
    case "movingInConfirmation":
      return (
        <label>
          {t("movingInConfirmation.label", language)}{" "}
          <a
            href="https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/mdb-f402544-20161102_wohnungsgeberbestaetigung.pdf"
            target="_blank"
            className="text-blue-500 underline"
          >
            {t("movingInConfirmation.link", language)}
          </a>
        </label>
      );
    case "guardianConsent":
      return (
        <label>
          {t("guardianConsent.label", language)}{" "}
          <a
            href="https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/20190125_einverstaendniserklaerung_der_sorgeberechtigten.pdf"
            target="_blank"
            className="text-blue-500 underline"
          >
            {t("guardianConsent.link", language)}
          </a>
        </label>
      );
    case "supplement":
      return (
        <label>
          {t("supplement.label", language)}{" "}
          <a
            href="https://www.berlin.de/formularverzeichnis/?formular=/labo/zentrale-einwohnerangelegenheiten/_assets/mdb-f402610-beiblatt_zur_anmeldung_blanko.pdf"
            target="_blank"
            className="text-blue-500 underline"
          >
            {t("supplement.link", language)}
          </a>
        </label>
      );
    case "confirmationOfPermanentAccommodationForUkrainianRefugees":
      return (
        <label>
          {t(
            "confirmationOfPermanentAccommodationForUkrainianRefugees.label",
            language,
          )}{" "}
          <a
            href="https://www.berlin.de/formularverzeichnis/?formular=/labo/zuwanderung/_assets/bestatigung_uber_dauerhafte_gewahrung_einer_unterkunft_fur_ukrainische_gefluchtete.pdf"
            target="_blank"
            className="text-blue-500 underline"
          >
            {t(
              "confirmationOfPermanentAccommodationForUkrainianRefugees.link",
              language,
            )}
          </a>
        </label>
      );
    default:
      return <label>{t(id, language)}</label>;
  }
}
