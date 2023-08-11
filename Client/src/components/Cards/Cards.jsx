import React from "react";
import styles from "./Cards.module.css";
import Card from "../Card/Card";
import Title from "../Title/Title";
import SearchBar from "../SearchBar/SearchBar";

export default function Cards({ characters, onClose, onSearch, handleChange, id, onAddRandomCharacter}) {
  return (
    <div>
      <Title />
      <SearchBar onSearch={onSearch} handleChange={handleChange} id={id} onAddRandomCharacter={onAddRandomCharacter} />
      <div className={styles.cardList}>
      {characters.map((character) => (
        <Card key={character.id} onClose={onClose} character={character} />
      ))}
      </div>
    </div>
  );
}
