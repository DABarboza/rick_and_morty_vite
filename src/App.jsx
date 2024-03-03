import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

function App() {
  const location = useLocation();
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
      {location.pathname !== "/" && <Nav onSearch={onSearch} />}
      {/* <Nav onSearch={onSearch} /> */}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
