import React from "react";
import TimelineChart from "./TimelineChart";

export default function SightingDetailsSidebar({ sighting, onClose }) {
  if (!sighting) return null;

  return (
    <div className="sidebar">
      <button className="close-btn" onClick={onClose}>×</button>

      <h2>Tick Sighting Details</h2>

      <p><strong>Species:</strong> {sighting.species}</p>
      <p><strong>Date:</strong> {new Date(sighting.date).toLocaleDateString()}</p>
      <p><strong>Severity:</strong> {sighting.severity}</p>
      <p><strong>Location:</strong> {sighting.locationName}</p>

      <h3>Activity Timeline</h3>
      <TimelineChart data={sighting.timeline || []} />

      <h3>Actions</h3>
      <button onClick={() => window.location.href = "/report"}>Report a Sight­ing</button>

      <button onClick={() => window.open(
        `https://www.google.com/maps?q=${sighting.latitude},${sighting.longitude}`,
        "_blank"
      )}>
        Get Directions
      </button>

      <button onClick={() => {
        if (navigator.share) {
          navigator.share({
            title: "Tick Sighting",
            url: window.location.href,
          });
        } else {
          alert("Sharing not supported");
        }
      }}>
        Share
      </button>
    </div>
  );
}
