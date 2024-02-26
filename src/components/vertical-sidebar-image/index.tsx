export function VerticalSidebarImage() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <img
        src="/images/fernsehturm.jpg"
        className="h-full object-cover saturate-150"
        alt="Bild des Berliner Fernsehturms"
        loading="lazy"
      />
    </div>
  );
}
