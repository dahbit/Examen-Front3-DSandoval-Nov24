import React, { useState } from "react";
import Card from "./Card"; 


function App() {
  const [formData, setFormData] = useState({
    singer: "",
    song: "",
  });
  const [error, setError] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { singer, song } = formData;

    // Validaciones
    if (singer.length < 3 || singer.startsWith(" ") || song.length < 6) {
      setError("Por favor revisa que la información sea correcta");
      return;
    }
    
    setError("");
    setSubmittedData(formData);
    setFormData({ singer: "", song: "" });
  };

  return (
    <div className="App">
      <h1>Ingresa tu cantante y canción favorita</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="singer">Cantante:</label>
          <input
            type="text"
            id="singer"
            name="singer"
            value={formData.singer}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="song">Canción:</label>
          <input
            type="text"
            id="song"
            name="song"
            value={formData.song}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>

      {submittedData && <Card singer={submittedData.singer} song={submittedData.song} />}
    </div>
  );
}

export default App;
