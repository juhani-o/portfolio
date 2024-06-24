import React from "react";
import Navbar from "./components/Navbar.tsx";
import InfoCard from "./components/InfoCard"; // Assuming InfoCard is a custom component
import Introduction from "./components/Introduction"; // Assuming Introduction is a custom component
import ProfileData from "./components/ProfileData"; // Assuming ProfileData is a custom component

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Navbar />
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <InfoCard/>
        <Introduction/>
        <ProfileData/>
      </div>
    </div>
  );
}

