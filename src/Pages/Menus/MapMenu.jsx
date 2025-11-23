import { Link } from "react-router-dom";
import SubMenuCard from "../../Components/SubMenuCard";

export default function MapMenu() {
  return (
    <div style={styles.container}>
      <h1>Interactive Map – Options</h1>

      <div style={styles.grid}>
        <Link to="/map/view" style={styles.link}>
          <SubMenuCard
            title="Map Visualisation"
            description="View the interactive UK tick map"
          />
        </Link>

        <Link to="/map/markers" style={styles.link}>
          <SubMenuCard
            title="Marker System"
            description="Severity, species & activity indicators"
          />
        </Link>

        <Link to="/map/filters" style={styles.link}>
          <SubMenuCard
            title="Filters"
            description="Filter sightings by species, severity & date"
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
