import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import React from "react";
import { countries } from "./countries";
import { markersData } from "./countries";

function App() {

  return (
    <div className="w-full h-screen overflow-hidden bg-[#d2ebf2] px-10 ">
      <h1 className="text-6xl font-semibold mt-10 mb-8">Country Climate Ambiton</h1>
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
            initial: {
              fill: '#000',
              stroke: '#000',
              'stroke-width': 0,
              r: 8, // hide circle radius
              marker: {
                tagName: 'path',
                attrs: {
                  d: 'M4 0 L4 8 M0 4 L8 4', // plus sign lines
                  stroke: '#000',
                  'stroke-width': 2,
                },
              },
            },
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
          onRegionTipShow={function reginalTip(event, label, code) {
            return label.html(`
                  <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 125px; color: white"; padding-left: 10px>
                    <p>
                    <b>
                    ${label.html()}
                    </b>
                    </p>
                    <p>
                    ${countries[code]}
                    </p>
                    </div>`);
          }}
          onMarkerTipShow={(event, label, index) => {
            const marker = markersData[index]; // get marker data by index

            if (!marker) return;

            label.html(`
              <div style="
                background-color: white; 
                border-radius: 6px; 
                min-height: 150px; 
                width: 300px; 
                color: black; 
                padding: 12px; 
                font-family: Arial, sans-serif;
                box-shadow: 0 2px 8px rgba(0,0,0,0.15);
              ">
                <div style="display: flex; align-items: center; margin-bottom: 10px;">
                  ${marker.flagUrl
                ? `<img src="${marker.flagUrl}" alt="flag" style="width:24px; height:16px; border-radius:2px; margin-right:8px;" />`
                : ''
              }
                  <span style="font-weight: 700; font-size: 16px;">${marker.name || marker.code}</span>
                </div>
                
                <div style="font-weight: 700; font-size: 14px; margin-bottom: 4px;">
                  Total GHG Emissions Reductions
                </div>
                <div style="font-size: 12px; color: #555; margin-bottom: 10px;">
                  via CGS High Ambition Pathways
                </div>
        
                <div style="
                  background-color: 'white'; 
                  color: white; 
                  padding: 2px 6px; 
                  border-radius: 3px; 
                  font-size: 12px; 
                  display: inline-block; 
                  margin-bottom: 10px;
                  font-weight: 600;
                ">
                  Including LULUCF
                </div>
        
                <div style="font-size: 28px; font-weight: 900; color: #000; display: flex; align-items: center; margin-bottom: 8px;">
                  ${marker.totalReduction || '-74%'}
                  <span style="color: #16a34a; margin-left: 6px; font-size: 18px;">⬆️</span>
                </div>
        
                <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 8px;">
                  <div><strong>NDC Base Year or Estimated Peak Year</strong></div>
                  <div>${marker.baseYear || '2005'}</div>
                </div>
        
                <hr style="border: none; border-top: 1px solid #eee; margin: 8px 0;" />
        
                <div style="
                  background-color: 'white'; 
                  color: #000; 
                  padding: 2px 6px; 
                  border-radius: 3px; 
                  font-size: 12px; 
                  display: inline-block; 
                  margin-bottom: 8px;
                  font-weight: 600;
                ">
                  Excluding LULUCF
                </div>
        
                <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 4px;">
                  <div>Relative to 2005</div>
                  <div><strong>${marker.relTo2005 || '-34%'}</strong></div>
                </div>
        
                <div style="display: flex; justify-content: space-between; font-size: 12px; margin-bottom: 12px;">
                  <div>Relative to 2023</div>
                  <div><strong>${marker.relTo2023 || '-44%'}</strong></div>
                </div>
        
                <button style="
                  width: 100%; 
                  background-color: #000; 
                  color: #fff; 
                  padding: 8px 0; 
                  border: none; 
                  border-radius: 4px; 
                  font-weight: 600; 
                  cursor: pointer;
                  font-size: 14px;
                ">
                  View Details →
                </button>
              </div>
            `);
          }}
        />
      </div>
    </div>
  );
}

export default App;
