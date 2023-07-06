import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
        setCharacter(data);
      } else {
        window.alert("No hay personajes con ese ID");
      }
    });

    return () => {
      setCharacter(null);
    };
  }, [id]);

  if (!character) {
    return <div>Loading...</div>; // Mostrar mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className="detail">
      <h2>{character.name}</h2>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin?.name}</p>
      <img src={character.image} alt={character.name} />
    </div>
  );
}
