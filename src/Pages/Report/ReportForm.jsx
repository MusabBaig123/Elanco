import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ReportForm() {
  const navigate = useNavigate();

  // Form values stored in React state
  const [form, setForm] = useState({
    date: "",
    time: "",
    location: "",
    species: "",
    severity: "",
    notes: "",
  });

  const [error, setError] = useState("");

  // Handle input updates
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Submit handler
  function handleSubmit(e) {
    e.preventDefault();

    // Simple required validation like your uni template
    if (!form.date || !form.time || !form.location || !form.species) {
      setError("Please fill in all required fields.");
      return;
    }
  }

  return (
    <div style={styles.container}>
      <h1>Report a Sighting</h1>

      {error && <p style={styles.error}>{error}</p>}

      <form style={styles.form} onSubmit={handleSubmit}>

        <label>Date *</label>
        <input
          name="date"
          type="date"
          style={styles.input}
          onChange={handleChange}
        /><br />

        <label>Time *</label>
        <input
          name="time"
          type="time"
          style={styles.input}
          onChange={handleChange}
        /><br />

        <label>Location *</label>
        <input
          name="location"
          placeholder="Location of sighting"
          style={styles.input}
          onChange={handleChange}
        /><br />

        <label>Species *</label>
        <input
          name="species"
          placeholder="Tick species"
          style={styles.input}
          onChange={handleChange}
        /><br />

        <label>Severity</label>
        <select
          name="severity"
          style={styles.input}
          onChange={handleChange}
        >
          <option value="">Select severity</option>
          <option value="Low">Low</option>
          <option value="Moderate">Moderate</option>
          <option value="High">High</option>
        </select><br />

        <label>Notes</label>
        <textarea
          name="notes"
          rows="4"
          placeholder="Additional details (optional)"
          style={styles.textarea}
          onChange={handleChange}
        /><br /><br />

        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    padding: "40px",
    maxWidth: "600px",
    margin: "0 auto",
    color: "#796f6fff",
  },
  form: {
    fontSize: "18px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginTop: "5px",
    marginBottom: "20px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    marginTop: "5px",
  },
  button: {
    background: "#1a1a1a",
    color: "white",
    padding: "12px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    marginTop: "10px",
  },
  error: { 
    color: "red", 
    marginBottom: "15px",
    fontWeight: "600"
  },
};
