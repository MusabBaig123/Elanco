export default function QuickActionsPage() {
  const fakeSighting = {
    latitude: 54.5,
    longitude: -1.3,
    species: "Ixodes ricinus"
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Quick Action Buttons</h2>

      <button
        style={btn}
        onClick={() => window.location.href = "/report/form"}
      >
        Report a Sighting
      </button>

      <button
        style={btn}
        onClick={() =>
          window.open(
            `https://www.google.com/maps?q=${fakeSighting.latitude},${fakeSighting.longitude}`
          )
        }
      >
        Get Directions
      </button>

      <button
        style={btn}
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: "Tick Sighting",
              text: `Check out this ${fakeSighting.species} sighting.`,
              url: window.location.href
            });
          } else {
            alert("Sharing not supported.");
          }
        }}
      >
        Share
      </button>
    </div>
  );
}

const btn = {
  display: "block",
  width: "250px",
  margin: "20px auto",
  padding: "12px",
  background: "#4a90e2",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "16px"
};
