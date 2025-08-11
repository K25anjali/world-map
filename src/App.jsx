import React, { useState } from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { countries, markersData } from "./Countries";
import { ChartLine } from "lucide-react";

const MarkerTooltip = ({ marker }) => {
  if (!marker) return null;

  return (
    <div className="fixed right-2 top-24 sm:right-[2%] sm:top-[20%] w-[90%] sm:w-[380px] max-h-[80vh] bg-white rounded-xl shadow-lg font-sans overflow-y-auto z-50 p-4">
      {/* Header */}
      <div className="pb-2">
        <div className="flex items-center gap-2 flex-wrap">
          {marker.flagUrl && (
            <img
              src={marker.flagUrl}
              alt="flag"
              className="w-8 h-6 rounded-sm flex-shrink-0"
            />
          )}
          <span className="font-semibold text-lg">{marker.name || marker.code}</span>
        </div>
        <div className="flex items-center justify-between mt-2 flex-wrap gap-2">
          <span className="text-lg sm:text-xl font-bold leading-tight">
            Total GHG Emissions Reductions
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-gray-500 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="10" strokeWidth="2" fill="none"></circle>
            <line x1="12" y1="8" x2="12" y2="12" strokeWidth="2"></line>
            <circle cx="12" cy="16" r="1" fill="currentColor"></circle>
          </svg>
        </div>
        <p className="text-xs sm:text-sm text-gray-500">
          via CGS High Ambition Pathways
        </p>
      </div>

      {/* Including LULUCF */}
      <div className="mb-4 border-b border-gray-200 pb-4">
        <span className="bg-[#297cbb] text-white text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded">
          Including LULUCF
        </span>
        <div className="flex items-center justify-between mt-2 flex-wrap gap-2">
          <div className="text-4xl sm:text-5xl font-bold text-black flex items-center gap-1">
            {marker.totalReduction || "-74%"}
            <span className="ml-1 text-xl sm:text-2xl text-green-600">
              <ChartLine />
            </span>
          </div>
        </div>
        <div className="flex items-center justify-between mt-1">
          <p className="text-xs text-gray-500">
            NDC Base Year or Estimated Peak Year
          </p>
          <p className="text-sm sm:text-base font-semibold">
            {marker.baseYear || "2005"}
          </p>
        </div>
      </div>

      {/* Excluding LULUCF */}
      <div className="pb-3 border-b border-gray-200 mb-3">
        <span className="bg-[#eccf2e] text-black text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded">
          Excluding LULUCF
        </span>
        <div className="grid grid-cols-2 text-xs sm:text-sm mt-2 gap-y-1">
          <p className="text-gray-700">Relative to 2005</p>
          <p className="font-semibold text-right">{marker.relTo2005 || "-34%"}</p>
          <p className="text-gray-700">Relative to 2023</p>
          <p className="font-semibold text-right">{marker.relTo2023 || "-44%"}</p>
        </div>
      </div>

      {/* Button */}
      <button className="w-full mt-2 bg-black text-white py-2 rounded-md font-semibold hover:bg-gray-900 transition text-sm sm:text-base">
        View Details →
      </button>
    </div>
  );
};

function App() {
  const [hoveredMarker, setHoveredMarker] = useState(null);

  return (
    <div className="w-full h-screen overflow-hidden bg-[#d2ebf2] relative">
      <h1 className="text-3xl sm:text-4xl md:text-6xl font-semibold mt-6 sm:mt-10 mb-6 sm:mb-8 pl-4 sm:pl-10">
        Country Climate Ambition
      </h1>
      <div className="mx-auto w-full h-[70vh] sm:h-[80vh]">
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

      {/* Tooltip */}
      <MarkerTooltip marker={hoveredMarker} />
    </div>
  );
}

export default App;
