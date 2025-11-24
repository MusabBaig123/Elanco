export default function PreventionTips() {
  const tips = [
    "Wear long sleeves and trousers when walking in grassy areas.",
    "Use tick repellent on skin and clothing.",
    "Avoid sitting directly on the ground in wooded or grassy areas.",
    "Check your pets and yourself for ticks after outdoor activities.",
    "Shower within 2 hours of being outdoors to reduce risk.",
    "Remove ticks safely using a tick removal tool.",
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Tick Bite Prevention Tips</h1>

      <ul style={styles.list}>
        {tips.map((t, i) => (
          <li key={i} style={styles.item}>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "800px",
    margin: "0 auto",
    color: "#000",   // 🔥 fix: text now visible
  },

  title: {
    textAlign: "center",
    marginBottom: "25px",
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: "18px",
    lineHeight: "1.6",
  },

  item: {
    background: "#fff",
    padding: "15px",
    borderRadius: "10px",
    marginBottom: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    color: "#000",   // 🔥 fix: visible on white background
  },
};
