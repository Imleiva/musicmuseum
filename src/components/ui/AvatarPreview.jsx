/*
 * Renderiza imágenes de avatares con estilos específicos
 * • Mapea keys de avatares a sus rutas de imágenes
 * • Aplica clases CSS específicas para ciertos avatares
 * • Maneja errores de carga mostrando logo como fallback
 * • Componente simple para mostrar preview de personajes
 */
import React, { useState } from "react";
import { bands } from "../../data/bands.js";

const avatarImages = {
  tete: "/images/avatars/tete.png",
  angusacdc: "/images/avatars/angusacdc.png",
  thewarning: "/images/avatars/thewarning.png",
  ghost: "/images/avatars/ghost.png",
  aerosmith: "/images/avatars/aerosmith.png",
  metallica: "/images/avatars/metallica.png",
  megadeth: "/images/avatars/megadeth.png",
  gnr: "/images/avatars/gnr.png",
  bonjovi: "/images/avatars/bonjovi.png",
  defleppard: "/images/avatars/defleppard.png",
  poison: "/images/avatars/poison.png",
  motleycrue: "/images/avatars/motleycrue.png",
  alicecooper: "/images/avatars/alicecooper.png",
  whitesnake: "/images/avatars/whitesnake.png",
  vanhalen: "/images/avatars/vanhalen.png",
  extreme: "/images/avatars/extreme.png",
  jimihendrix: "/images/avatars/jimihendrix.png",
  prince: "/images/avatars/prince.png",
  therollingstones: "/images/avatars/therollingstones.png",
  thebeatles: "/images/avatars/thebeatles.png",
  thecure: "/images/avatars/thecure.png",
  theverve: "/images/avatars/theverve.png",
  thebaboonshow: "/images/avatars/thebaboonshow.png",
  pinkfloyd: "/images/avatars/pinkfloyd.png",
  queen: "/images/avatars/queen.png",
  davidbowie: "/images/avatars/davidbowie.png",
  nirvana: "/images/avatars/nirvana.png",
  ironmaiden: "/images/avatars/ironmaiden.png",
  ozzy: "/images/avatars/ozzy.png",
  brucespringsteen: "/images/avatars/brucespringsteen.png",
  kiss: "/images/avatars/kiss.png",
  oasis: "/images/avatars/oasis.png",
  jinjer: "/images/avatars/jinjer.png",
  archenemy: "/images/avatars/archenemy.png",
  blondie: "/images/avatars/blondie.png",
  slash: "/images/avatars/slash.png",
  eltonjohn: "/images/avatars/eltonjohn.png",
  motorhead: "/images/avatars/motorhead.png",
  pantera: "/images/avatars/pantera.png",
  radiohead: "/images/avatars/radiohead.png",
  ratm: "/images/avatars/ratm.png",
  gretavanfleet: "/images/avatars/gretavanfleet.png",
  manowar: "/images/avatars/manowar.png",
  judaspriest: "/images/avatars/judaspriest.png",
  scorpions: "/images/avatars/scorpions.png",
  u2: "/images/avatars/u2.png",
  blueoystercult: "/images/avatars/blueoystercult.png",
  jeffscottsoto: "/images/avatars/jeffscottsoto.png",
  opeth: "/images/avatars/opeth.png",
  stevenwilson: "/images/avatars/stevenwilson.png",
  michaeljackson: "/images/avatars/michaeljackson.png",
};

export default function AvatarPreview({ avatarKey }) {
  const [hasError, setHasError] = useState(false);
  const src = avatarImages[avatarKey];

  // Si no hay imagen o ha fallado la carga, mostrar logo
  if (!src || hasError) {
    const band = bands.find((b) => b.key === avatarKey);
    if (band?.logo) {
      return (
        <img src={band.logo} alt={band.name} className="avatar-preview-img" />
      );
    }
    return null;
  }

  const className =
    avatarKey === "thewarning"
      ? "avatar-img-thewarning"
      : avatarKey === "ironmaiden"
      ? "avatar-img-ironmaiden"
      : avatarKey === "ghost"
      ? "avatar-img-ghost"
      : avatarKey === "pinkfloyd"
      ? "avatar-img-pinkfloyd"
      : avatarKey === "ozzy"
      ? "avatar-img-ozzy"
      : avatarKey === "eltonjohn"
      ? "avatar-img-eltonjohn"
      : avatarKey === "judaspriest"
      ? "avatar-img-judaspriest"
      : avatarKey === "queen"
      ? "avatar-img-queen"
      : avatarKey === "blondie"
      ? "avatar-img-blondie"
      : avatarKey === "thebaboonshow"
      ? "avatar-img-thebaboonshow"
      : avatarKey === "oasis"
      ? "avatar-img-oasis"
      : avatarKey === "jeffscottsoto"
      ? "avatar-img-jeffscottsoto"
      : "avatar-preview-img";

  return (
    <img
      src={src}
      alt={avatarKey}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
