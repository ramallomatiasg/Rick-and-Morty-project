import React from 'react';
import styles from "./SearchBar.module.css"

export default function SearchBar({ onSearch, handleChange, id, onAddRandomCharacter }) {
  return (
    <div className={styles.SearchBar}>
      <input
        className={styles.input}
        type='text'
        placeholder='ID'
        value={id}
        onChange={handleChange}
      />
      <button className={styles.button} onClick={()=>onSearch(id)}>Agregar</button>
      <button className={styles.button} onClick={onAddRandomCharacter}>Agregar personaje random</button>
    </div>
  );
};
