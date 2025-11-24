export default function SpeciesGuide() {
  const species = [
    {
      name: "Marsh Tick (Ixodes Apronophorus)",
      description:
        "A species of hard tick, also called the ornate dog or meadow tick. Found in moist environments such as grasslands, pastures, riverbanks, and marshy areas.",
    },
    {
      name: "Southern Rodent Tick (Ixodes Acuminatus)",
      description:
        "A species found in southern England that inhabits the burrows of small rodents. It is a known vector for various tick-borne diseases.",
    },
    {
      name: "Passerine Tick (Dermacentor Frontalis)",
      description:
        "A species of tick that commonly parasitizes passerine birds, like warblers, thrushes, and crows. These ticks are often picked up by birds while feeding on the ground.",
    },
    {
      name: "Tree-hole Tick (Ixodes arboricola)",
      description:
        "A species of tick that specifically parasitizes small birds, particularly those that nest in tree holes like the great tit and blue tit. It is a host-specific tick, meaning it does not infest humans or livestock. It lives for a significant portion of its life off-host, detaching to moult and for females to lay eggs.",
    },
    {
      name: "Fox/Badger Tick (Ixodes canisuga)",
      description:
        "primarily parasitizes burrow-inhabiting mammals, with the red fox (Vulpes vulpes) and the European badger (Meles meles) being key hosts. It is also a common parasite of domestic dogs and has been known to be found on cats, which can pick up the ticks from environments shared with wildlife.",
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
    padding: "20px",
    textAlign: "center",
    color: "#f8efefff",
  },

  title: {
    marginBottom: "60px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "25px",
  },

  card: {
    background: "white",
    borderRadius: "12px",
    padding: "28px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
    color: "#000",
  },

  name: {
    fontSize: "35px",
    fontWeight: "580",
    marginBottom: "10px",
  },

  description: {
    fontSize: "20px",
    opacity: 1,
  },
};
