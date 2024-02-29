import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
// import SearchBar from "./components/SearchBar/SearchBar.jsx";
// import characters from "./data.js";
import { useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const onClose = () => {
    window.alert("Emulamos que se cierra la card");
  };

  const onSearch = () => {};

  return (
    <div className="App">
      {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}

      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
