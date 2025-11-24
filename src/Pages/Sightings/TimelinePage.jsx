import { useEffect, useState } from "react";

export default function TimelinePage() {
  const [sightings, setSightings] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dev-task.elancoapps.com/data/tick-sightings")
      .then((res) => res.json())
      .then((data) => {
        // Sort by date (newest first)
        const sorted = data.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        setSightings(sorted);
        setFiltered(sorted);

        // Extract unique locations
        const uniqueLocations = [
          "All",
          ...new Set(sorted.map((s) => s.location).filter(Boolean))
        ];

        setLocations(uniqueLocations);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Timeline error:", err);
        setLoading(false);
      });
  }, []);

  // Handle dropdown filter change
  const handleFilterChange = (e) => {
    const loc = e.target.value;
    setSelectedLocation(loc);

    if (loc === "All") {
      setFiltered(sightings);
    } else {
      const filteredList = sightings.filter(
        (s) => s.location === loc
      );
      setFiltered(filteredList);
    }
  };

  if (loading) return <p>Loading timeline...</p>;

  return (
    <div style={styles.container}>
      <h1>Sighting Timeline</h1>

      {/* LOCATION FILTER */}
      <div style={styles.filterBox}>
        <label style={styles.label}>Filter by Location:</label>
        <select
          value={selectedLocation}
          onChange={handleFilterChange}
          style={styles.dropdown}
        >
          {locations.map((loc, idx) => (
            <option key={idx} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* TIMELINE LIST */}
      <ul style={styles.list}>
        {filtered.length === 0 ? (
          <p>No data for this location.</p>
        ) : (
          filtered.map((s) => (
            <li key={s.id} style={styles.item}>
              <strong>{new Date(s.date).toLocaleDateString()}</strong>  
              <br />
              <strong>Species:</strong> {s.species}  
              <br />
              <strong>Location:</strong> {s.location}  
              <br />
              <strong>Severity:</strong> {s.severity}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    color: "white",
    paddingTop: "100px",
  },
  filterBox: {
    marginBottom: "20px",
  },
  label: {
    marginRight: "10px",
    fontSize: "18px",
  },
  dropdown: {
    padding: "8px 12px",
    fontSize: "16px",
    borderRadius: "5px",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  item: {
    background: "#333",
    padding: "15px",
    marginBottom: "10px",
    borderRadius: "8px",
  },
};
