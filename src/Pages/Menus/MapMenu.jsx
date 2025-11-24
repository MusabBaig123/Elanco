import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubMenuCard from "../../Components/SubMenuCard";

export default function MapMenu() {
  const [sightings, setSightings] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [speciesFilter, setSpeciesFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(
          "https://api.allorigins.win/raw?url=https://dev-task.elancoapps.com/data/tick-sightings"
        );

        const text = await res.text();
        const data = JSON.parse(text);

        setSightings(data);
        setFiltered(data);
      } catch (err) {
        console.error("Error loading API", err);
      }
    }
    load();
  }, []);

  // FILTER LOGIC
  useEffect(() => {
    let f = sightings;

    if (speciesFilter) f = f.filter((s) => s.species === speciesFilter);
    if (locationFilter) f = f.filter((s) => s.location === locationFilter);
    if (dateFilter) f = f.filter((s) => s.date === dateFilter);

    if (search)
      f = f.filter((s) =>
        s.species?.toLowerCase().includes(search.toLowerCase())
      );

    setFiltered(f);
  }, [speciesFilter, locationFilter, dateFilter, search, sightings]);

  // Unique dropdown values
  const speciesOptions = [...new Set(sightings.map((s) => s.species))];
  const locationOptions = [...new Set(sightings.map((s) => s.location))];
  const dateOptions = [...new Set(sightings.map((s) => s.date))];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Interactive Map Menu</h1>

      {/* ---------- ORIGINAL 3 MENU CARDS RESTORED ---------- */}
      <div style={styles.grid}>
        <Link to="/map/view" style={styles.link}>
          <SubMenuCard
            title="View Map"
            description="Open the interactive map of the UK"
          />
        </Link>

<Link to="/sightings/list" style={styles.link}>
    <SubMenuCard
        title="View All Sightings"
        description="Browse all tick sighting records"
    />
</Link>

        <Link to="/report" style={styles.link}>
          <SubMenuCard
            title="Report a Tick"
            description="Submit your own tick sighting"
          />
        </Link>
      </div>

      {/* ---------- FILTERS ---------- */}
      <h2 style={{ marginTop: "40px" }}>Filter Sightings</h2>

      <div style={styles.filters}>
        <input
          type="text"
          placeholder="Search species..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />

        <select
          value={speciesFilter}
          onChange={(e) => setSpeciesFilter(e.target.value)}
          style={styles.input}
        >
          <option value="">All Species</option>
          {speciesOptions.map((sp, i) => (
            <option key={i} value={sp}>
              {sp}
            </option>
          ))}
        </select>

        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          style={styles.input}
        >
          <option value="">All Locations</option>
          {locationOptions.map((loc, i) => (
            <option key={i} value={loc}>
              {loc}
            </option>
          ))}
        </select>

        <select
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          style={styles.input}
        >
          <option value="">All Dates</option>
          {dateOptions.map((d, i) => (
            <option key={i} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      {/* ---------- RESULTS LIST ---------- */}
      <div style={styles.list}>
        {filtered.map((s, index) => (
          <div key={index} style={styles.card}>
            <h3>{s.species}</h3>
            <p><strong>Location:</strong> {s.location}</p>
            <p><strong>Date:</strong> {s.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---------- STYLES ----------
const styles = {
  container: { padding: "40px", textAlign: "center" },
  title: { fontSize: "32px", marginBottom: "20px" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginBottom: "30px",
  },

  link: { textDecoration: "none" },

  filters: {
    marginTop: "25px",
    marginBottom: "25px",
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
  },

  list: {
    marginTop: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px",
  },

  card: {
    background: "white",
    padding: "16px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "left",
  },
};
