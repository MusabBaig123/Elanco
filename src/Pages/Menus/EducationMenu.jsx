import { Link } from "react-router-dom";
import SubMenuCard from "../../Components/SubMenuCard";

export default function EducationMenu() {
  return (
    <div style={styles.container}>
      <h1>Education – Options</h1>

      <div style={styles.grid}>
        <Link to="/education/species" style={styles.link}>
          <SubMenuCard
            title="Species Guide"
            description="Identify different tick types"
          />
        </Link>

        <Link to="/education/prevention" style={styles.link}>
          <SubMenuCard
            title="Prevention Tips"
            description="Learn how to avoid tick bites"
          />
        </Link>

        <Link to="/education/activity" style={styles.link}>
          <SubMenuCard
            title="Seasonal Activity Chart"
            description="View sighting activity by season"
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
