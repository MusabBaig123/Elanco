export default function SpeciesGuide() {
  const species = [
    {
      name: "Sheep Tick (Ixodes ricinus)",
      description:
        "The most common UK tick. Lives in woodland, grassland and rural areas.",
    },
    {
      name: "Hedgehog Tick (Ixodes hexagonus)",
      description:
        "Common on hedgehogs and pets. Prefers suburban and garden areas.",
    },
    {
      name: "Dog Tick (Dermacentor reticulatus)",
      description:
        "Can transmit disease to pets. Found in grassland, meadows and parks.",
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tick Species Identification Guide</h1>

      <div style={styles.grid}>
        {species.map((s, i) => (
          <div style={styles.card} key={i}>
            <h2 style={styles.name}>{s.name}</h2>
            <p style={styles.description}>{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    textAlign: "center",
    color: "#000",
  },

  title: {
    marginBottom: "30px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
  },

  card: {
    background: "white",
    borderRadius: "12px",
    padding: "18px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    color: "#000",
  },

  name: {
    fontSize: "48px",
    fontWeight: "700",
    marginBottom: "10px",
  },

  description: {
    fontSize: "15px",
    opacity: 0.8,
  },
};
