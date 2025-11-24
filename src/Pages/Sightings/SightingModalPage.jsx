import { useEffect, useState } from "react";

export default function SightingModalPage() {
  const [sighting, setSighting] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dev-task.elancoapps.com/data/tick-sightings")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load sightings");
        return res.json();
      })
      .then((data) => {
        if (data.length > 0) setSighting(data[0]); // show the first item
        setLoading(false);
      })
      .catch((err) => {
        console.error("Modal error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading sighting…</p>;
  if (error) return <p>Error: {error}</p>;
  if (!sighting) return <p>No sightings found.</p>;

  return (
    <div style={modalOverlay}>
      <div style={modalBox}>
        <h2>Sighting Details</h2>

        <p><strong>Date:</strong> {sighting.date}</p>
        <p><strong>Location:</strong> {sighting.location}</p>
        <p><strong>Species:</strong> {sighting.species}</p>
        <p><strong>Latin Name:</strong> {sighting.latinName}</p>

        <button style={buttonStyle} onClick={() => window.history.back()}>
          Close
        </button>
      </div>
    </div>
  );
}

// ====== Styles ======
const modalOverlay = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalBox = {
  background: "white",
  color: "black",
  padding: "25px",
  borderRadius: "10px",
  width: "350px",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
};

const buttonStyle = {
  marginTop: "15px",
  padding: "10px 20px",
  background: "black",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};
