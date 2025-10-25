/*
 * Renderiza imágenes de avatares con estilos específicos
 * • Mapea keys de avatares a sus rutas de imágenes
 * • Aplica clases CSS específicas para ciertos avatares
 * • Maneja errores de carga mostrando logo como fallback
 * • Componente simple para mostrar preview de personajes
 */
import React, { useState } from "react";
import { bands } from "../../data/bands.js";
import { getImagePath } from "../../utils/assetPaths";

const avatarImages = {
  tete: getImagePath("/images/avatars/tete.png"),
  angusacdc: getImagePath("/images/avatars/angusacdc.png"),
  thewarning: getImagePath("/images/avatars/thewarning.png"),
  ghost: getImagePath("/images/avatars/ghost.png"),
  aerosmith: getImagePath("/images/avatars/aerosmith.png"),
  metallica: getImagePath("/images/avatars/metallica.png"),
  gnr: getImagePath("/images/avatars/gnr.png"),
  bonjovi: getImagePath("/images/avatars/bonjovi.png"),
  defleppard: getImagePath("/images/avatars/.png"),
  poison: getImagePath("/images/avatars/poison.png"),
  motleycrue: getImagePath("/images/avatars/motleycrue.png"),
  alicecooper: getImagePath("/images/avatars/alicecooper.png"),
  whitesnake: getImagePath("/images/avatars/whitesnake.png"),
  vanhalen: getImagePath("/images/avatars/vanhalen.png"),
  extreme: getImagePath("/images/avatars/extreme.png"),
  jimihendrix: getImagePath("/images/avatars/jimihendrix.png"),
  prince: getImagePath("/images/avatars/prince.png"),
  thebaboonshow: getImagePath("/images/avatars/thebaboonshow.png"),
  pinkfloyd: getImagePath("/images/avatars/pinkfloyd.png"),
  queen: getImagePath("/images/avatars/queen.png"),
  davidbowie: getImagePath("/images/avatars/davidbowie.png"),
  nirvana: getImagePath("/images/avatars/nirvana.png"),
  ironmaiden: getImagePath("/images/avatars/ironmaiden.png"),
  ozzy: getImagePath("/images/avatars/ozzy.png"),
  brucespringsteen: getImagePath("/images/avatars/brucespringsteen.png"),
  kiss: getImagePath("/images/avatars/kiss.png"),
  oasis: getImagePath("/images/avatars/oasis.png"),
  jinjer: getImagePath("/images/avatars/jinjer.png"),
  archenemy: getImagePath("/images/avatars/archenemy.png"),
  blondie: getImagePath("/images/avatars/blondie.png"),
  slash: getImagePath("/images/avatars/slash.png"),
  eltonjohn: getImagePath("/images/avatars/eltonjohn.png"),
  motorhead: getImagePath("/images/avatars/motorhead.png"),
  pantera: getImagePath("/images/avatars/pantera.png"),
  radiohead: getImagePath("/images/avatars/radiohead.png"),
  ratm: getImagePath("/images/avatars/ratm.png"),
  gretavanfleet: getImagePath("/images/avatars/gretavanfleet.png"),
  manowar: getImagePath("/images/avatars/manowar.png"),
  judaspriest: getImagePath("/images/avatars/judaspriest.png"),
  scorpions: getImagePath("/images/avatars/scorpions.png"),
  blueoystercult: getImagePath("/images/avatars/blueoystercult.png"),
  jeffscottsoto: getImagePath("/images/avatars/jeffscottsoto.png"),
  opeth: getImagePath("/images/avatars/opeth.png"),
  stevenwilson: getImagePath("/images/avatars/stevenwilson.png"),
  stevevai: getImagePath("/images/avatars/stevevai.png"),
  michaeljackson: getImagePath("/images/avatars/michaeljackson.png"),
  bryanadams: getImagePath("/images/avatars/bryanadams.png"),
  johnmayer: getImagePath("/images/avatars/johnmayer.png"),
  aliceinchains: getImagePath("/images/avatars/aliceinchains.png"),
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
