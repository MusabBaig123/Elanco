import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav style={styles.nav}>
      <div style={styles.left}>
        <Link to="/" style={styles.logo}>Tick Tracker UK</Link>
      </div>

      <div style={styles.right}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
 nav: {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",        // ⭐ allows contact to drop to next line if needed
  padding: "20px 20px",
  background: "#1a1a1a",
  boxShadow: "0 4px 10px rgba(0,0,0,0.25)",
  position: "sticky",
  top: 0,
  zIndex: 10,
},

  left: {},
  logo: {
    fontSize: "20px",
    fontWeight: "700",
    color: "white",
    textDecoration: "none",
  },
right: {
  display: "flex",
  gap: "16px",
  paddingRight: "30px",     // ⭐ shifts links inward so they stop touching window edge
},
  link: {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    fontSize: "16px",
  }
};
