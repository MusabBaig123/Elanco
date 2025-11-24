export default function SeasonalActivity() {
  const activity = [
    { month: "January", level: "Low" },
    { month: "February", level: "Low" },
    { month: "March", level: "Moderate" },
    { month: "April", level: "Moderate" },
    { month: "May", level: "High" },
    { month: "June", level: "High" },
    { month: "July", level: "High" },
    { month: "August", level: "High" },
    { month: "September", level: "Moderate" },
    { month: "October", level: "Moderate" },
    { month: "November", level: "Low" },
    { month: "December", level: "Low" },
  ];

  // Colors for activity levels
  const levelColors = {
    Low: "#77c3ff",
    Moderate: "#ffe176",
    High: "#ff7b7b",
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Seasonal Tick Activity</h1>
      <p style={styles.subtitle}>Average tick activity levels throughout the year</p>

      <div style={styles.list}>
        {activity.map((a, i) => (
          <div key={i} style={styles.row}>
            <span style={styles.month}>{a.month}</span>

            <span
              style={{
                ...styles.level,
                background: levelColors[a.level],
              }}
            >
              {a.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "600px",
    margin: "0 auto",
    color: "#796f6fff",
  },

  title: {
    textAlign: "center",
    marginBottom: "10px",
  },

  subtitle: {
    textAlign: "center",
    marginBottom: "25px",
    opacity: 1,
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  row: {
    display: "flex",
    justifyContent: "space-between",
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    alignItems: "center",
  },

  month: {
    fontSize: "20px",
    fontWeight: "700",
  },

  level: {
    padding: "6px 14px",
    borderRadius: "20px",
    fontWeight: "600",
    color: "#0e0808ff",
  },
};
