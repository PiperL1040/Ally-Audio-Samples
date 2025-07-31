import React from "react";
import { useParams } from "react-router-dom";

const agents = [
  {
    audio: process.env.PUBLIC_URL + "/audio/Resturante.mp3",
  },
  {
    audio: process.env.PUBLIC_URL + "/audio/Plumping.mp3",
  },
  {
    audio: process.env.PUBLIC_URL + "/audio/MedSpa.mp3",
  },
  {
    audio: process.env.PUBLIC_URL + "/audio/Salon.mp3",
  },
];

export default function AudioPage() {
  const { id } = useParams();
  const agent = agents[id];

  if (!agent) return <p>Audio not found</p>;

  return (
    <div style={{ padding: "40px", maxWidth: "600px", margin: "0 auto" }}>
      <h2>{agent.title}</h2>
      <audio controls style={{ width: "100%" }}>
        <source src={agent.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
