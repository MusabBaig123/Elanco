import { useState } from "react";

export default function UploadImage() {
  const [image, setImage] = useState(null);

  function handleUpload(e) {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  }

  return (
    <div style={styles.container}>
      <h1>Upload Tick Image</h1>

      <input type="file" onChange={handleUpload} style={styles.input} />

      {image && (
        <div style={styles.previewBox}>
          <p>Preview:</p>
          <img src={image} alt="Preview" style={styles.preview} />
        </div>
      )}
    </div>
  );
}

const styles = {
  container: { padding: "40px", textAlign: "center", color: "#000" },
  input: { marginTop: "20px" },
  previewBox: {
    marginTop: "30px",
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
  },
  preview: {
    marginTop: "10px",
    width: "300px",
    height: "auto",
    borderRadius: "8px",
  },
};
