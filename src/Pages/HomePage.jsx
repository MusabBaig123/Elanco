import { Link } from "react-router-dom";
import HomeCard from "../Components/HomeCard";

export default function HomePage() {
  return (
    <div style={styles.page}>
      
      {/* HEADER */}
      <header style={styles.header}>
        <h1>Tick Tracker UK</h1>
      </header>

      {/* NAVIGATION */}
      <nav style={styles.nav}>
        <ul style={styles.navlist}>
          <li><Link to="/" style={styles.navLink}>Home</Link></li>
          <li><Link to="/about" style={styles.navLink}>About</Link></li>
          <li><Link to="/contact" style={styles.navLink}>Contact</Link></li>
        </ul>
      </nav>

      {/* MAIN CONTENT */}
      <main style={styles.main}>

        {/* LEFT COLUMN */}
        <aside style={styles.aside}>
          <input
            type="text"
            placeholder="Search..."
            style={styles.search}
          />
        </aside>

        {/* RIGHT COLUMN */}
        <section style={styles.section}>
          <p style={styles.subtitle}>Select a section to begin:</p>

          <div style={styles.grid}>
            <Link to="/map/view">
              <HomeCard
                title="Interactive Map"
                description="View live tick sightings across the UK"
              />
            </Link>

            <Link to="/sightings" style={styles.link}>
              <HomeCard
                title="Sighting Information"
                description="Detailed info for each reported sighting"
              />
            </Link>

            <Link to="/education" style={styles.link}>
              <HomeCard
                title="Education"
                description="Species guide, prevention tips & activity charts"
              />
            </Link>

            <Link to="/report" style={styles.link}>
              <HomeCard
                title="Report a Sighting"
                description="Submit your own tick sighting with image upload"
              />
            </Link>
          </div>
          
        </section>
      </main>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>Created by Musab Baig {new Date().getFullYear()}</p>
      </footer>

    </div>
  );
}

const styles = {
  page: {
    background: "#473f3fff",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  header: {
    background: "#1a1a1a",
    padding: "2px",
    textAlign: "center",
    color: "white",
    fontSize: "24px",
    fontWeight: "700",
  },

  nav: {
    background: "#333",
    padding: "12px",
  },
  navlist: {
    display: "flex",
    gap: "40px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    justifyContent: "center",
  },
  navLink: {
    color: "white",
    textDecoration: "none",
    fontWeight: "600",
  },

  main: {
    display: "flex",
    padding: "40px",
    gap: "40px",
    justifyContent: "center",
    width: "100%",
    flex: 1,
    boxSizing: "border-box",
  },

  aside: {
    width: "220px",
  },

  search: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  section: {
    flex: 1,
    minWidth: "650px",
    maxWidth: "850px",
  },

  subtitle: {
    fontSize: "20px",
    opacity: 0.8,
    marginBottom: "25px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "25px",
  },

  link: {
    textDecoration: "none",
  },

  footer: {
    textAlign: "center",
    padding: "15px",
    color: "white",
    opacity: 0.7,
    background: "#1a1a1a",
  },
};
