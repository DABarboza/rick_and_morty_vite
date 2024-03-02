import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
// import SearchBar from "./components/SearchBar/SearchBar.jsx";
// import characters from "./data.js";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);

  const onClose = (id) => {
    let filterCharacters = characters.filter((ch) => {
      return ch.id !== id;
    });
    setCharacters(filterCharacters);
  };

  function onSearch(id) {
    axios(
      `https://rym2.up.railway.app/api/character/${id}?key=pi-dabarboza`
    ).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    });
  }

  return (
    <div className="App">
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
      </Routes>
      {/* <Cards characters={characters} onClose={onClose} /> */}
    </div>
  );
}

export default App;
