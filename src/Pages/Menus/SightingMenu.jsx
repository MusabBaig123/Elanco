import { Link } from "react-router-dom";
import SubMenuCard from "../../Components/SubMenuCard";

export default function SightingMenu() {
  return (
    <div style={styles.container}>
      <h1>Sighting Information – Options</h1>

      <div style={styles.grid}>
        <Link to="/sightings/modal" style={styles.link}>
          <SubMenuCard
            title="Detail Modal"
            description="View full sighting info"
          />
        </Link>

        <Link to="/sightings/timeline" style={styles.link}>
          <SubMenuCard
            title="Timeline View"
            description="See activity trends over time"
          />
        </Link>

        <Link to="/sightings/actions" style={styles.link}>
          <SubMenuCard
            title="Quick Actions"
            description="Report, share or get directions"
          />
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    maxWidth: "900px",
    margin: "0 auto",
  },
  link: { textDecoration: "none" }
};
