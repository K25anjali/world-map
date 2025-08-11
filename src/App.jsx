import React, { useState } from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { countries, markersData } from "./Countries";
import { ChartLine } from "lucide-react";

const MarkerTooltip = ({ marker }) => {
  if (!marker) return null;

  return (
    <div className="fixed right-[2%] top-[20%] h-auto w-[380px] bg-white rounded-xl shadow-lg font-sans overflow-y-auto z-50">
      {/* Header */}
      <div className="p-4 pb-1">
        <div className="flex items-center gap-2">
          {marker.flagUrl && (
            <img src={marker.flagUrl} alt="flag" className="w-8 h-6 rounded-sm" />
          )}
          <span className="font-semibold text-lg">{marker.name || marker.code}</span>
        </div>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold">Total GHG Emissions Reductions</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" fill="none"></circle>
            <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2"></line>
            <circle cx="12" cy="16" r="1" fill="currentColor"></circle>
          </svg>
        </div>
        <p className="text-sm text-gray-500">via CGS High Ambition Pathways</p>
      </div>

      {/* Including LULUCF */}
      <div className="px-4 pt-0 pb-4">
        <div className="mb-2 border-b border-gray-200">
          <span className="bg-[#297cbb] text-white text-xs font-medium px-2 py-0.5 rounded">
            Including LULUCF
          </span>
          <div className="flex items-center justify-between mt-1">
            <div className="text-5xl font-bold text-black flex items-center gap-1">
              {marker.totalReduction || "-74%"}
              <span className="ml-1 text-2xl text-green-600"><ChartLine /></span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-1 mb-2">
            <p className="text-xs text-gray-500">
              NDC Base Year or Estimated Peak Year
            </p>
            <p className="text-base font-semibold">{marker.baseYear || "2005"}</p>
          </div>
        </div>

        {/* Excluding LULUCF */}
        <div className="pt-1 pb-3 border-b border-gray-200 mt-2">
          <span className="bg-[#eccf2e] text-black text-xs font-medium px-2 py-0.5 rounded">
            Excluding LULUCF
          </span>
          <div className="grid grid-cols-2 text-sm mt-2">
            <p className="text-gray-700">Relative to 2005</p>
            <p className="font-semibold text-right">{marker.relTo2005 || "-34%"}</p>
            <p className="text-gray-700">Relative to 2023</p>
            <p className="font-semibold text-right">{marker.relTo2023 || "-44%"}</p>
          </div>
        </div>

        {/* Button */}
        <button className="w-full mt-3 bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition">
          View Details →
        </button>
      </div>
    </div>
  );
};

function App() {
  const [hoveredMarker, setHoveredMarker] = useState(null);

  return (
    <div className="w-full h-screen overflow-hidden bg-[#d2ebf2] relative">
      <h1 className="text-6xl font-semibold mt-10 mb-8 pl-10">
        Country Climate Ambition
      </h1>
      <div className="mx-auto w-full h-[80vh]">
        <VectorMap
          map={worldMill}
          containerStyle={{
            width: "100%",
            height: "100%",
          }}
          backgroundColor="#d2ebf2"
          markers={markersData}
          markerStyle={{
            initial: { fill: "#000", stroke: "#000", "stroke-width": 0, r: 8 },
          }}
          series={{
            regions: [
              {
                scale: ["#a7d8f0", "#006b9f"],
                values: countries,
                min: 0,
                max: 100,
              },
            ],
          }}
          onMarkerOver={(e, index) => setHoveredMarker(markersData[index])}
          onMarkerOut={() => setHoveredMarker(null)}
        />
      </div>

      {/* Fixed Tooltip */}
      <MarkerTooltip marker={hoveredMarker} />
    </div>
  );
}

export default App;
