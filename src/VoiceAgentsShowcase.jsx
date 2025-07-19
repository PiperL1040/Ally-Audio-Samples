// import React from "react";

// export default function VoiceAgentsShowcase() {
//   const agents = [
//     {
//       industry: "Restaurant",
//       title: "Reservation Assistant · Restaurant",
//       tags: ["#Receptionist", "#Real-Time Booking"],
//       description:
//         "Meet Leo, an AI assistant for the Daily Dish, a fine dining restaurant. His primary role is to assist callers in scheduling reservations at the Daily Dish.",
//       audio: process.env.PUBLIC_URL + "/audio/Restaurant.mp3",
//     },
//     {
//       industry: "Home Services",
//       title: "Service Dispatcher · Plumbing",
//       tags: ["#Appointment Scheduling", "#Emergency Call Handling", "#Service Routing"],
//       description:
//         "Meet Tom, an AI assistant for Fix It Plumbing. His primary role is to handle emergency service requests, schedule appointments, and route calls to on-call technicians, ensuring no customer inquiry goes unanswered.",
//       audio: process.env.PUBLIC_URL + "/audio/Plumbing.mp3",
//     },
//     {
//       industry: "Cosmetic",
//       title: "Healthcare Receptionist · Appointment Coordinator",
//       tags: ["#Consultation Booking", "#Treatment FAQs", "#Voice Receptionist"],
//       description:
//         "Meet Brenda, an AI assistant for Radiance Med Spa. She helps clients book consultations for lip filler and other aesthetic treatments, answers common questions about procedures and aftercare, and ensures smooth scheduling without the wait.",
//       audio: process.env.PUBLIC_URL + "/audio/MedSpa.mp3",
//     },
//     {
//       industry: "Home Services",
//       title: "Salon Assistant",
//       tags: ["#Appointment", "#FAQs"],
//       description:
//         "Meet Clara, an AI assistant for the Hive Salon, designed to manage appointments and answer frequently asked questions.",
//       audio: process.env.PUBLIC_URL + "/audio/Salon.mp3",
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#f9f9fb] text-gray-900 p-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-10 text-center">
//           <h1 className="text-3xl font-semibold">Hear AI Voice Agents in Action</h1>
//           <p className="text-gray-600 mt-2">
//             Choose a call type to see how Synthflow AI agents handle real conversations.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {agents.map((agent, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between"
//             >
//               <div>
//                 <div className="mb-2">
//                   <span className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full">
//                     {agent.industry}
//                   </span>
//                 </div>
//                 <h3 className="font-semibold text-lg leading-tight">
//                   {agent.title}
//                 </h3>
//                 <div className="text-xs text-purple-700 mt-1 mb-2">
//                   {agent.tags.map((tag, i) => (
//                     <span key={i} className="mr-1">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//                 <p className="text-sm text-gray-600 mb-4 line-clamp-3">
//                   {agent.description}
//                 </p>
//               </div>

//               <div className="space-y-3 mt-auto">
//                 <p className="text-sm font-medium text-gray-700">Voice Demo</p>
//                 <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
//                   <audio controls className="w-full" aria-label={`Audio demo for ${agent.title}`}>
//                     <source src={agent.audio} type="audio/mpeg" />
//                     Your browser does not support the audio element.
//                   </audio>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function VoiceAgentsShowcase() {
  const agents = [
    {
      industry: "Restaurant",
      title: "Reservation Assistant · Restaurant",
      tags: ["#Receptionist", "#Real-Time Booking"],
      description:
        "Meet Leo, an AI assistant for the Daily Dish, a fine dining restaurant. His primary role is to assist callers in scheduling reservations at the Daily Dish.",
      audio: process.env.PUBLIC_URL + "/audio/Restaurant.mp3",
    },
    {
      industry: "Home Services",
      title: "Service Dispatcher · Plumbing",
      tags: ["#Appointment Scheduling", "#Emergency Call Handling", "#Service Routing"],
      description:
        "Meet Tom, an AI assistant for Fix It Plumbing. His primary role is to handle emergency service requests, schedule appointments, and route calls to on-call technicians, ensuring no customer inquiry goes unanswered.",
      audio: process.env.PUBLIC_URL + "/audio/Plumbing.mp3",
    },
    {
      industry: "Cosmetic",
      title: "Healthcare Receptionist · Appointment Coordinator",
      tags: ["#Consultation Booking", "#Treatment FAQs", "#Voice Receptionist"],
      description:
        "Meet Brenda, an AI assistant for Radiance Med Spa. She helps clients book consultations for lip filler and other aesthetic treatments, answers common questions about procedures and aftercare, and ensures smooth scheduling without the wait.",
      audio: process.env.PUBLIC_URL + "/audio/MedSpa.mp3",
    },
    {
      industry: "Home Services",
      title: "Salon Assistant",
      tags: ["#Appointment", "#FAQs"],
      description:
        "Meet Clara, an AI assistant for the Hive Salon, designed to manage appointments and answer frequently asked questions.",
      audio: process.env.PUBLIC_URL + "/audio/Salon.mp3",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9fb] text-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold">Hear AI Voice Agents in Action</h1>
          <p className="text-gray-600 mt-2">
            Choose a call type to see how Synthflow AI agents handle real conversations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between"
            >
              <div>
                <div className="mb-2">
                  <span className="bg-gray-100 text-sm text-gray-700 px-3 py-1 rounded-full">
                    {agent.industry}
                  </span>
                </div>
                <h3 className="font-semibold text-lg leading-tight">
                  {agent.title}
                </h3>
                <div className="text-xs text-purple-700 mt-1 mb-2">
                  {agent.tags.map((tag, i) => (
                    <span key={i} className="mr-1">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                  {agent.description}
                </p>
              </div>

              <div className="mt-auto">
                <p className="text-sm font-medium text-gray-700 mb-2">Voice Demo</p>
                <div className="bg-[#0a2540] text-white rounded-lg p-4 flex flex-wrap gap-4">
                  <audio
                    controls
                    className="w-48"
                    aria-label={`Audio demo for ${agent.title}`}
                  >
                    <source src={agent.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

