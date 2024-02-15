import { t } from "../../i18n/translations";
import { useI18nStore } from "../../i18n/store";
import { useProgressStore } from "../steps/store";

export function Footer() {
  const language = useI18nStore((state) => state.language);
  const currentStep = useProgressStore((state) => state.currentStep);

  return (
    <footer
      className={`flex py-4
  ${currentStep === 0 || currentStep === 16 ? "flex" : "hidden md:flex"}
`}
      id="footer"
    >
      <div className="flex w-full flex-wrap justify-start gap-y-5">
        <div className="flex w-full flex-wrap justify-start gap-x-10 gap-y-5 px-8 py-2 text-sm sm:justify-center md:gap-x-20 md:px-5">
          <div className="flex flex-col gap-4">
            {t("logo.t1", language)}
            <img
              src="/images/logo-citylab-berlin-outline.svg"
              alt="Logo von CityLab Berlin"
              className="w-32"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4">
            {t("logo.t2", language)}
            <img
              src="/images/logo-technologiestiftung-berlin-de.svg"
              alt="Logo von Technologiestiftung Berlin"
              className="w-32"
              loading="lazy"
            />
          </div>
          <div className="flex flex-col gap-4">
            {t("logo.t3", language)}
            <img
              src="/images/logo-senatskanzlei-buergermeister-vertikal.svg"
              alt="Logo von Berlins Regierender Bürgermeister"
              className="w-28"
              loading="lazy"
            />
          </div>
        </div>

        <div className="flex w-full flex-wrap justify-center  gap-x-5 px-5 text-sm	">
          <a
            className="flex flex-col gap-4 text-gray-400 underline"
            href="https://www.technologiestiftung-berlin.de/datenschutz"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("dataPrivacy", language)}
          </a>
          <a
            className="flex flex-col gap-4 text-gray-400 underline"
            href={t("imprint.link", language)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("imprint", language)}
          </a>
        </div>
      </div>
    </footer>
  );
}
