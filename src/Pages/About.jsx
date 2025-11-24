export default function About() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>About Tick Tracker UK</h1>

      <p style={styles.text}>
        Tick Tracker UK is a project designed to help monitor tick activity across
        the United Kingdom. By collecting sighting reports from the public, we aim
        to increase awareness, identify high-risk areas, and support education
        around tick-borne diseases.
      </p>

      <h2 style={styles.subtitle}>Our Mission</h2>
      <p style={styles.text}>
        • Provide an easy way for users to report tick sightings.<br />
        • Display real-time activity using an interactive map.<br />
        • Offer educational resources to help people stay safe outdoors.<br />
        • Build a dataset that supports public health research.
      </p>

      <h2 style={styles.subtitle}>Why It Matters</h2>
      <p style={styles.text}>
        Tick populations are rising across the UK. Combining community reports
        with visual tools helps identify hotspots, monitor trends, and reduce
        the spread of illnesses such as Lyme disease.
      </p>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    paddingTop: "120px",
    maxWidth: "800px",
    margin: "0 auto",
    color: "white",
  },
  title: {
    fontSize: "36px",
    textAlign: "center",
    marginBottom: "20px",
  },
  subtitle: {
    fontSize: "22px",
    marginTop: "25px",
    marginBottom: "10px",
  },
  text: {
    fontSize: "18px",
    lineHeight: 1.6,
    opacity: 0.9,
  },
};
