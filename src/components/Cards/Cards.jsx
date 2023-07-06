import React from "react";
import styles from "./Cards.module.css";
import Card from "../Card/Card";

export default function Cards({ characters, onClose }) {
   return (
     <div className={styles.cardList}>
       {characters.map((character) => (
         <Card key={character.id} onClose={onClose} character={character} />
       ))}
     </div>
   );
 }
