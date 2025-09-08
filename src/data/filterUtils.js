import { avatars } from "./avatars.js";
import { bands } from "./bands.js";

export const allOptions = [...avatars, ...bands];

export const genres = [
  "Todos",
  ...Array.from(new Set(bands.map((b) => b.genre))),
];

export const decades = [
  "Todas",
  ...Array.from(new Set(allOptions.map((b) => b.decade))),
];
