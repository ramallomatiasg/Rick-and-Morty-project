import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";
import { BrowserRouter as Router, Routes, Route, useLocation, Link, useNavigate} from "react-router-dom";
import { Card } from "./components/Card/Card";

function App() {
  const [characters, setCharacters] = useState([]);
  const [id, setId] = useState("");

  const [access, setAccess] = useState(false);
  const EMAIL = "example@gmail.com";
  const PASSWORD = "Password12";
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  async function login(userData) {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    try {
      const response = await axios.get(URL + `?email=${email}&password=${password}`)
      const { access } = response.data;
      setAccess(access);
      access && navigate('/home');
    } catch (error) {
      console.error("Error", error);
    }
  }

  const logout = () => {
    setAccess(false);
    navigate("/");
  };

  const renderNav = () => {
    if (location.pathname !== "/") {
      return (
        <Nav onAddRandomCharacter={onAddRandomCharacter} />
      );
    }
  };

  const handleChange = (event) => {
    setId(event.target.value);
  };

  // const onSearch = () => {
  //   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
  //       if (data.name) {
  //         setCharacters((characters) => [...characters, data]);
  //         setId("");
  //       } else {
  //         window.alert("¡No hay personajes con este ID!");
  //       }
  //     }
  //   );
  // };

  const onSearch = async (id) => {
    
    if (id < 826) {
      try {
        const {data} = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
        if (data.name) {
          const isCharacterExists = characters.find((characters) => characters.id === data.id);
          if (!isCharacterExists) {
             setCharacters((characters) => [...characters, data]); //Si el id no se repite, actualiza characters agregando el nuevo personaje
          } else {
            window.alert('¡El personaje ya está en la lista!');
          }
        }
      } catch (error) {
        console.error('Error:', error);
      }

    } else {
      window.alert('¡No hay personajes con este ID!');
    }
  }

  const onClose = (id) => {
    const filteredCharacters = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(filteredCharacters);
  };

  const onAddRandomCharacter = () => {
    const randomId = Math.floor(Math.random() * 826) + 1;
    axios(`http://localhost:3001/rickandmorty/character/${randomId}`).then(
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

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/about"
          element={
            <>
              {renderNav()}
              <About />
            </>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <>
              {renderNav()}
              <Detail />
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              {renderNav()}
              <Cards
                characters={characters}
                onClose={onClose}
                onSearch={onSearch}
                handleChange={handleChange}
                id={id}
                onAddRandomCharacter={onAddRandomCharacter}
              />
            </>
          }
        />
        <Route
          path="/favorites"
          element={
            <>
              {renderNav()}
              <Favorites  onClose={onClose} />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
