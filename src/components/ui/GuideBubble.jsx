import React from "react";

export default function GuideBubble({ text, title, onClick }) {
  return (
    <div
      className="museum-guide-bubble"
      title={title}
      onClick={onClick}
      style={{ cursor: "pointer" }}
    >
      {text}
    </div>
  );
}
