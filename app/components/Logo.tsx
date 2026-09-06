type LogoProps = {
  tone?: "light" | "brand";
  className?: string;
};

export function Logo({ tone = "light", className = "" }: LogoProps) {
  const files =
    tone === "light"
      ? ["desktop-group.svg", "desktop-group1.svg", "desktop-group2.svg", "desktop-group3.svg"]
      : ["desktop-group20.svg", "desktop-group21.svg", "desktop-group22.svg", "desktop-group23.svg"];

  return (
    <span className={`brand-logo brand-logo--${tone} ${className}`} aria-label="Carnero Schabauer Abogados & Asociados">
      <img className="brand-logo__mark-a" src={`/assets/figma/${files[0]}`} alt="" />
      <img className="brand-logo__mark-b" src={`/assets/figma/${files[1]}`} alt="" />
      <img className="brand-logo__word-a" src={`/assets/figma/${files[2]}`} alt="" />
      <img className="brand-logo__word-b" src={`/assets/figma/${files[3]}`} alt="" />
    </span>
  );
}
