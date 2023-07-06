import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";

export default function Nav({ onAddRandomCharacter }) {
	return (
	<nav className={styles.Nav}>
		<Link to="/home">Home</Link>
		<Link to="/about">About</Link>
		<button onClick={onAddRandomCharacter}>Agregar personaje random</button>
	</nav>
	);
};