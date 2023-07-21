import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );

    return setCharacter({});
  }, [id]);

  if (!character) {
    return <div>Loading...</div>; // Mostrar mensaje de carga mientras se obtienen los datos
  }

  return (
    <div className={styles.detail}>
      {character.name && (
        <div>
          <h2>{character.name}</h2>
          <p>
          <img src={character.image} alt="Imsage Not Found" />
            <b>Status:</b>
            {character.status}
          </p>
          <p>
            <b>Species:</b>
            {character.species}
          </p>
          <p>
            <b>Gender:</b>
            {character.gender}
          </p>
          <p>
            <b>Origin:</b>
            {character.origin.name}
          </p>
        </div>
      )}
    </div>
  );
}
