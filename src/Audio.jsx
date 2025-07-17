import React, { useEffect, useRef } from "react";

const audioData = [
  {
    label: "Restaurant Services",
    base64: process.env.PUBLIC_URL + "/audio/resturante.mp3",
  },
  {
    label: "Plumbing Services",
    base64: process.env.PUBLIC_URL + "/audio/plumping.mp3",
  },
  {
    label: "Salon Services",
    base64: process.env.PUBLIC_URL + "/audio/salon.mp3",
  },
  {
    label: "Med Spa Services",
    base64: process.env.PUBLIC_URL + "/audio/medspa.mp3",
  },
];

const AudioCard = ({ label, base64, audioRefs, index }) => (
  <div className="bg-[#1a1a2e] rounded-2xl p-6 shadow-lg">
    <div className="text-xl font-semibold text-gray-100 mb-4">{label}</div>
    <audio
      controls
      ref={(el) => (audioRefs.current[index] = el)}
      className="w-full h-10 rounded-lg bg-[#2b2b44] text-white"
      title={label}
    >
      <source src={base64} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  </div>
);

const AudioServices = () => {
  const audioRefs = useRef([]);

  useEffect(() => {
    const handlePlay = (event) => {
      audioRefs.current.forEach((audio) => {
        if (audio && audio !== event.target) {
          audio.pause();
        }
      });
    };

    audioRefs.current.forEach((audio) => {
      if (audio) audio.addEventListener("play", handlePlay);
    });

    return () => {
      audioRefs.current.forEach((audio) => {
        if (audio) audio.removeEventListener("play", handlePlay);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d15] p-10 font-sans text-white">
      <div className="max-w-4xl mx-auto flex flex-col gap-8">
        {audioData.map((data, i) => (
          <AudioCard
            key={i}
            label={data.label}
            base64={data.base64}
            audioRefs={audioRefs}
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default AudioServices;

