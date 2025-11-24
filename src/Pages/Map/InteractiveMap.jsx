import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function InteractiveMap() {
  const [sightings, setSightings] = useState([]);
  const [filtered, setFiltered] = useState([]);

  // ⭐ FIXED SPECIES LIST
  const fixedSpecies = [
    "All",
    "marsh Tick",
    "Southern Rodent Tick",
    "Passerine Tick",
    "Tree-hole Tick",
    "Fox/Badge Tick"
  ];

  // ⭐ FIXED SEVERITY LIST
  const fixedSeverity = [
    "All",
    "Low",
    "Medium",
    "High"
  ];

  const [speciesList, setSpeciesList] = useState(fixedSpecies);
  const [severityList, setSeverityList] = useState(fixedSeverity);

  const [selectedSpecies, setSelectedSpecies] = useState("All");
  const [selectedSeverity, setSelectedSeverity] = useState("All");

  useEffect(() => {
    fetch("https://dev-task.elancoapps.com/data/tick-sightings")
      .then((res) => res.json())
      .then((data) => {
        const valid = data.filter((s) => s.latitude && s.longitude);
        setSightings(valid);
        setFiltered(valid);
      });
  }, []);

  // Filter logic
  useEffect(() => {
    let result = [...sightings];

    if (selectedSpecies !== "All") {
      result = result.filter((s) => s.species === selectedSpecies);
    }

    if (selectedSeverity !== "All") {
      result = result.filter((s) => s.severity === selectedSeverity);
    }

    setFiltered(result);
  }, [selectedSpecies, selectedSeverity, sightings]);

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Interactive Tick Sightings Map</h1>

      {/* FILTER BAR */}
      <div style={styles.filterBar}>
        <div>
          <label style={styles.label}>Species:</label>
          <select
            style={styles.dropdown}
            value={selectedSpecies}
            onChange={(e) => setSelectedSpecies(e.target.value)}
          >
            {speciesList.map((sp, i) => (
              <option key={i} value={sp}>{sp}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={styles.label}>Severity:</label>
          <select
            style={styles.dropdown}
            value={selectedSeverity}
            onChange={(e) => setSelectedSeverity(e.target.value)}
          >
            {severityList.map((sev, i) => (
              <option key={i} value={sev}>{sev}</option>
            ))}
          </select>
        </div>
      </div>

      {/* MAP */}
      <MapContainer 
        center={[54, -2]} 
        zoom={6} 
        style={styles.map}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {filtered.map((s) => (
          <Marker 
            key={s.id} 
            position={[s.latitude, s.longitude]}
          >
            <Popup>
              <strong>{s.species}</strong> <br />
              <strong>Severity:</strong> {s.severity} <br />
              <strong>Date:</strong> {s.date} <br />
              {s.location} <br />
              <a href={`/sightings/modal/${s.id}`}>View Details</a>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

const styles = {
  page: {
    padding: "20px",
    paddingTop: "100px",
    textAlign: "center",
    color: "white",
  },
  title: {
    fontSize: "30px",
  },
  map: {
    width: "90%",
    height: "70vh",
    margin: "20px auto",
    borderRadius: "10px",
  },
  filterBar: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "15px",
  },
  dropdown: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "6px",
  },
  label: {
    marginRight: "10px",
  },
};
