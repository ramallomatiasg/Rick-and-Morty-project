import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css"
import { Link } from "react-router-dom";

export default function Nav({ onAddRandomCharacter }) {
	return (
	<nav className={styles.Nav}>
		<Link to="/home" className={styles.btn}>Home</Link>
		<Link to="/about" className={styles.btn}>About</Link>
		<Link to='/favorites' className={styles.btn}>Favorites</Link>
	</nav>
	);
};