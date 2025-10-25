import React from "react";

export default function GuideAvatar({ src, alt, className, onClick }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`${className ? className : ""} clickable`}
      onClick={onClick}
    />
  );
}
