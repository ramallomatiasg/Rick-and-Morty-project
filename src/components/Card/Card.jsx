import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card({ character, onClose }) {
  const { id, name, image, status, species, gender, origin } = character;

  return (
    <div className={styles.container}>
      <Link to={`/detail/${id}`}>
        <h3 className="card-name">{name}</h3>
      </Link>
      <img src={image} alt={name} />

      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
      <p>Origin: {origin.name}</p>

      <button className={styles.close} onClick={() => onClose(id)}>
        <FontAwesomeIcon icon={faCircleXmark} bounce />{" "}
        {/* Muestra el icono de FontAwesome */}
      </button>
    </div>
  );
}
