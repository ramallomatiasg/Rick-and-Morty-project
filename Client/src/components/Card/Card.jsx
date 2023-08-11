import React from "react";
import { addFav, removeFav } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

export function Card({ character, onClose, favorite, addFav, removeFav }) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    favorite.forEach((fav) => {
      if (fav.id === character.id) {
        setIsFav(true);
      }
    });
  }, [favorite, character.id]);

  function handleFavorite() {
    if (!isFav) {
      setIsFav(true);
      addFav({ name, status, species, gender, origin, image, id });
    } else {
      setIsFav(false);
      removeFav(character.id);
    }
  }

  const { id, name, image, status, species, gender, origin } = character;

  return (
    <div className={styles.container}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <Link to={`/detail/${character.id}`}>
        <h3 className={styles.name}>{name}</h3>
      </Link>
      <img className={styles.img} src={image} alt={name} />

      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      <p>Origin: {origin.name}</p>

      <button className={styles.close} onClick={() => onClose(character.id)}>
        <FontAwesomeIcon icon={faCircleXmark} bounce />{" "}
        {/* Muestra el icono de FontAwesome */}
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    favorite: state.favs,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addFav: (personaje) => dispatch(addFav(personaje)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);