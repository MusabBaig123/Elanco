export default function SightingInfoPanel({ sighting, nearby, onClose }) {
  if (!sighting) return null;

  const shareUrl = `${window.location.origin}/sighting/${sighting.id}`;

  function copyLink() {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied!");
  }

  function directions() {
    window.open(`https://www.google.com/maps?q=${encodeURIComponent(sighting.location)}`);
  }

  return (
    <div style={styles.overlay}>
      <div style={styles.box}>
        <button style={styles.close} onClick={onClose}>✖</button>

        <h2>{sighting.species}</h2>
        <p><strong>Date:</strong> {sighting.date}</p>
        <p><strong>Location:</strong> {sighting.location}</p>
        <p><strong>Latin Name:</strong> {sighting.latinName}</p>

        <h3>Activity timeline (same location)</h3>
        {nearby.length === 0 ? (
          <p>No other sightings here</p>
        ) : (
          nearby.map(n => (
            <p key={n.id}>{n.date} — {n.species}</p>
          ))
        )}

        <div style={styles.buttons}>
          <a href="/report/form" style={styles.btn}>Report</a>
          <button style={styles.btn} onClick={directions}>Directions</button>
          <button style={styles.btn} onClick={copyLink}>Share</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999
  },
  box: {
    background: "#fff",
    padding: 20,
    width: 350,
    borderRadius: 10,
    color: "#000",
    position: "relative"
  },
  close: {
    position: "absolute",
    top: 10,
    right: 10,
    border: "none",
    background: "none",
    fontSize: 20,
    cursor: "pointer"
  },
  buttons: {
    marginTop: 20,
    display: "flex",
    gap: 10
  },
  btn: {
    background: "#1a1a1a",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: 6,
    border: "none",
    cursor: "pointer",
    textDecoration: "none"
  }
};
