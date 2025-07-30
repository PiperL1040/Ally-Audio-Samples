import React from "react";
import { useParams, Link } from "react-router-dom";

const audios = [
  {
    file: process.env.PUBLIC_URL + "/audio/Resturante.mp3",
  },
  {
    file: process.env.PUBLIC_URL + "/audio/Plumping.mp3",
  },
  {
    file: process.env.PUBLIC_URL + "/audio/MedSpa.mp3",
  },
  {
    file: process.env.PUBLIC_URL + "/audio/Salon.mp3",
  },
];

export default function AudioPage() {
  const { id } = useParams();
  const agent = audios[id];

  if (!agent) return <p>Audio not found</p>;

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <Link to="/" style={{ marginBottom: "20px", display: "inline-block", color: "#3b82f6" }}>
        ← Back to Homepage
      </Link>
      <h2>{agent.title}</h2>
      <audio controls style={{ width: "100%", marginTop: "20px" }}>
        <source src={agent.file} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
