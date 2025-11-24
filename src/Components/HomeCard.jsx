import { useState } from "react";

export default function HomeCard({ title, description }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(hover ? styles.cardHover : {})
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.description}>{description}</p>
    </div>
  );
}

const styles = {
  card: {
    background: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    cursor: "pointer",
    transition: "all 0.25s ease",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
    minHeight: "150px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  cardHover: {
    transform: "translateY(-8px)",
    boxShadow: "0 12px 24px rgba(0,0,0,0.18)",
  },
  title: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#222",
  },
  description: {
    fontSize: "16px",
    color: "#444",
    opacity: 0.8,
  },
};
