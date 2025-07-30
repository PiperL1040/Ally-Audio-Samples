import React from "react";
import { Link } from "react-router-dom";

const audioTitles = [
  "Restaurant",
  "Plumbing",
  "Med Spa",
  "Salon Assistant"
];

export default function HomePage() {
  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Audio Demo Links</h1>
      <ul style={{ listStyle: "none", paddingLeft: 0 }}>
        {audioTitles.map((title, index) => (
          <li key={index} style={{ marginBottom: "16px" }}>
            <Link
              to={`/audio/${index}`}
              style={{ color: "#3b82f6", textDecoration: "underline" }}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
