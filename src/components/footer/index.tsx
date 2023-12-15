export function Footer() {
  return (
    <div className="flex flex-wrap justify-center gap-20 px-5 text-sm">
      <div className="flex flex-col gap-4">
        Durchgeführt von
        <img
          src="https://logos.citylab-berlin.org/logo-citylab-berlin-outline.svg"
          alt="Logo von CityLab Berlin"
          className="w-32"
        />
      </div>
      <div className="flex flex-col gap-4">
        Ein Projekt der
        <img
          src="https://logos.citylab-berlin.org/logo-technologiestiftung-berlin-de.svg"
          alt="Logo von Technologiestiftung Berlin"
          className="w-32"
        />
      </div>
      <div className="flex flex-col gap-4">
        Mit Unterstützung von
        <img
          src="https://logos.citylab-berlin.org/logo-senatskanzlei-buergermeister-vertikal.svg"
          alt="Logo von Berlins Regierender Bürgermeister"
          className="w-28"
        />
      </div>
    </div>
  );
}
