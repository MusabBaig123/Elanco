export default function Contact() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contact Us</h1>

      <p style={styles.description}>
        Have questions, feedback, or want to report an issue?  
        Fill out the form below.
      </p>

      <form style={styles.form}>
        <label style={styles.label}>Your Name</label>
        <input type="text" style={styles.input} placeholder="Enter your name" />

        <label style={styles.label}>Your Email</label>
        <input type="email" style={styles.input} placeholder="Enter your email" />

        <label style={styles.label}>Message</label>
        <textarea
          style={{ ...styles.input, height: "120px", resize: "vertical" }}
          placeholder="Write your message here..."
        ></textarea>

        <button type="submit" style={styles.button}>Send Message</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    paddingTop: "120px",
    color: "white",
    maxWidth: "800px",
    margin: "0 auto",
  },
  title: {
    fontSize: "36px",
    textAlign: "center",
    marginBottom: "15px",
  },
  description: {
    fontSize: "18px",
    textAlign: "center",
    opacity: 0.9,
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  label: {
    fontSize: "16px",
  },
  input: {
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  button: {
    marginTop: "10px",
    background: "#1a1a1a",
    color: "white",
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px",
  },
  infoBox: {
    marginTop: "40px",
    padding: "20px",
    background: "#2a2a2a",
    borderRadius: "10px",
  },
  infoTitle: {
    fontSize: "20px",
    marginBottom: "10px",
  },
};
