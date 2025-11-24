import { Link } from "react-router-dom";
import SubMenuCard from "../../Components/SubMenuCard";

export default function ReportMenu() {
  return (
    <div style={styles.container}>
      <h1>Report A Sighting – Options</h1>

      <div style={styles.grid}>
        <Link to="/report/form" style={styles.link}>
          <SubMenuCard
            title="Report Form"
            description="Enter sighting details"
          />
        </Link>

        <Link to="/report/upload" style={styles.link}>
          <SubMenuCard
            title="Upload Image"
            description="Add a photo of the tick"
          />
        </Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "50px",
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
