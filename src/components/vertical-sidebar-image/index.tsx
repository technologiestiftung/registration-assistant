export function VerticalSidebarImage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <picture>
        <source
          className="h-full object-cover"
          media="(min-width: 1080px)"
          srcSet="/images/fernsehturm_alpha_paperplane.png"
        />
        <source srcSet="/images/fernsehturm_alpha_paperplane_slim.png" />
        {/* <img
          className="h-full object-cover"
          src="/images/fernsehturm_alpha_paperplane.png"
          alt="Bild des Berliner Fernsehturms"
          loading="lazy"
        /> */}
      </picture>

      {/* <img
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
      /> */}
    </div>
  );
}
