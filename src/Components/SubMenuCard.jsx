export default function SubMenuCard({ title, description }) {
  return (
    <div style={styles.card}>
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.desc}>{description}</p>
    </div>
  );
}

const styles = {
 card: {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  cursor: "pointer",
  transition: "0.25s",
  textAlign: "center",
  minHeight: "160px",  // ⭐ FIX: all cards same height
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
},

  title: {
    fontSize: "20px",
    marginBottom: "10px",
    fontWeight: "600",
  },
  desc: {
    opacity: 0.7,
  }
};
