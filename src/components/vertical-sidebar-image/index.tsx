export function VerticalSidebarImage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <img
        src="/images/fernsehturm_alpha_paperplane.png"
        className="h-full object-cover md:hidden lg:flex"
        alt="Bild des Berliner Fernsehturms"
        loading="lazy"
      />
      <img
        src="/images/fernsehturm_alpha_paperplane_slim.png"
        className="h-full object-cover lg:hidden"
        alt="Bild des Berliner Fernsehturms"
        loading="lazy"
      />
    </div>
  );
}
