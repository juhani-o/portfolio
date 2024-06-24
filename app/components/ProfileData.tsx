import React from "react";

export default function ProfileData() {
  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col items-start gap-4">
        <h2 className="font-bold text-xl text-gray-900">Profiilitietosi</h2>
        <div className="flex flex-col gap-2">
          <p className="text-gray-600">Nimi: [Nimi]</p>
          <p className="text-gray-600">Ammatti: [Ammatti]</p>
          <p className="text-gray-600">Sähköposti: [Sähköposti]</p>
          <p className="text-gray-600">Verkkosivusto: [Verkkosivusto]</p>
        </div>
      </div>
    </div>
  );
}

