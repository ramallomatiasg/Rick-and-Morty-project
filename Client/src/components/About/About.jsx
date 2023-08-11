import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./About.module.css"

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
    <div className={styles.about}>
      <h2>Esta página fue creada por Matias Ramallo durante el cursado del M2 de Henry!</h2>
    </div>
  );
};

export default About;
