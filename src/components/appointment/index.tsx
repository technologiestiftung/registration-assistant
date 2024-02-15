import { t } from "../../i18n/translations";
import { useI18nStore } from "../../i18n/store";

export function Appointment() {
  const language = useI18nStore((state) => state.language);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const appointmentQuery = new URL(document.URL).searchParams.get(
    "appointment",
  );
  const appointment = appointmentQuery ? Date.parse(appointmentQuery) : null;

  const dateTimeFormat = new Intl.DateTimeFormat(language, options);

  return (
    <>
      {appointment ? (
        <p>
          <b>{t("your-appointment", language)}:</b>
          <br />
          {dateTimeFormat.format(appointment!)}
          <br className="py-1" />
          <b>{t("address", language)}</b>:
          <br />
          Schlesische Straße 27A, 10997 Berlin (
          <a
            href="https://www.google.de/maps/place/Schlesische+Str.+27A,+10997+Berlin/@52.4984664,13.4448928,17z/data=!3m1!4b1!4m6!3m5!1s0x47a84e53becc02e7:0x39bee44340592b1!8m2!3d52.4984664!4d13.4474677!16s%2Fg%2F11b_242msd?entry=ttu"
            target="_blank"
            className="text-blue-700 underline visited:text-purple-500"
          >
            {t("plan-route", language)}
          </a>
          )
        </p>
      ) : (
        <p className="print:hidden">
          {t("intro.p2", language)}{" "}
          <a
            href="https://service.berlin.de/dienstleistung/120686/"
            target="_blank"
            className="text-blue-700 underline visited:text-purple-500"
          >
            {t("intro.p2.link", language)}
          </a>
        </p>
      )}
    </>
  );
}
