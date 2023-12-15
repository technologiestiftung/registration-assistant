import { useProgressStore } from "../../daisyui-progress/store";
import { useI18nStore } from "../../../i18n/store";
import { t } from "../../../i18n/translations";

export function Intro() {
  const goToNextStep = useProgressStore((state) => state.goToNextStep);
  const language = useI18nStore((state) => state.language);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          goToNextStep();
        }}
        className="flex h-full flex-col justify-end gap-10"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold">
            {t("intro.title", language)}
          </h1>

          <p>{t("intro.p1", language)}</p>

          <p>
            <b>Dein Termin:</b> 15. Dezember 2023, 15 Uhr
            <br />
            <b>Adresse</b>: Schlesische Straße 27A, 10997 Berlin (
            <a
              href="https://www.google.de/maps/place/Schlesische+Str.+27A,+10997+Berlin/@52.4984664,13.4448928,17z/data=!3m1!4b1!4m6!3m5!1s0x47a84e53becc02e7:0x39bee44340592b1!8m2!3d52.4984664!4d13.4474677!16s%2Fg%2F11b_242msd?entry=ttu"
              target="_blank"
              className="text-blue-500 underline visited:text-purple-500"
            >
              Route planen
            </a>
            )
          </p>

          {/*<p>*/}
          {/*  {t("intro.p2", language)}{" "}*/}
          {/*  <a*/}
          {/*    href="https://service.berlin.de/dienstleistung/120686/"*/}
          {/*    target="_blank"*/}
          {/*    className="text-blue-500 underline visited:text-purple-500"*/}
          {/*  >*/}
          {/*    {t("intro.p2.link", language)}*/}
          {/*  </a>*/}
          {/*</p>*/}
        </div>
        <div className="flex h-full w-full items-end justify-end">
          <button
            className="border-2 border-black bg-white px-5 py-2 hover:border-berlin-red hover:bg-berlin-red hover:text-white"
            type="submit"
          >
            {t("button.next", language)}
          </button>
        </div>
      </form>
    </>
  );
}
