import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./components/Card/Card.jsx";
import Cards from "./components/Cards/Cards.jsx";
import SearchBar from "./components/SearchBar/SearchBar.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Title from "./components/Title/Title.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const onSearch = () => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((characters) => [...characters, data]);
          setId("");
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    const filteredCharacters = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(filteredCharacters);
  };

  const onAddRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    axios(`https://rickandmortyapi.com/api/character/${randomId}`).then(
      ({ data }) => {
        if (
          data.name &&
          !characters.some((character) => character.id === data.id)
        ) {
          setCharacters((characters) => [...characters, data]);
        } else {
          window.alert("¡Ya se muestra este personaje!");
        }
      }
    );
  };

  // Limpiar los personajes al cambiar de ruta
  const location = useLocation();
  useEffect(() => {
    setCharacters([]);
  }, [location]);

  return (
    <div className="App">
      <div>
        <Title />
      </div>
      <Nav onAddRandomCharacter={onAddRandomCharacter} />
      <SearchBar onSearch={onSearch} handleChange={handleChange} id={id} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
      </Routes>
    </div>
  );
}

export default App;
