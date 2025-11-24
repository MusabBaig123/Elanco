import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import SightingDetailsSidebar from "../Sighting/SightingDetailsSidebar";

export default function MapView() {
  const [sightings, setSightings] = useState([]);
  const [selectedSighting, setSelectedSighting] = useState(null);

  useEffect(() => {
    fetch("https://dev-task.elancoapps.com/api/sightings")
      .then(res => res.json())
      .then(data => setSightings(data));
  }, []);

  return (
    <>
      <MapContainer 
        center={[54.5, -3]} 
        zoom={6} 
        style={{ height: "100vh", width: "100vw" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {sightings.map((item, i) => (
          <Marker
            key={i}
            position={[item.latitude, item.longitude]}
            eventHandlers={{
              click: () => setSelectedSighting(item)
            }}
          />
        ))}
      </MapContainer>

      <SightingDetailsSidebar
        sighting={selectedSighting}
        onClose={() => setSelectedSighting(null)}
      />
    </>
  );
  
}
