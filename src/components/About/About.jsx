import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const About = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      })
      .catch((error) => {
        console.error("Error fetching character:", error);
      });
  }, [id]);

  return (
    <div>
      <h2>About Character</h2>
      <p>Name: {character.name}</p>
      <p>Status: {character.status}</p>
      {/* Resto de la información del personaje */}
    </div>
  );
};

export default About;
