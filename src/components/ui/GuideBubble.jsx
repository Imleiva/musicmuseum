import React from "react";

export default function GuideBubble({ text, title, onClick }) {
  return (
    <div
      className="museum-guide-bubble clickable"
      title={title}
      onClick={onClick}
    >
      {text}
    </div>
  );
}
