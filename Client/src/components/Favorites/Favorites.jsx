import Card from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { useState } from "react";
import { removeFav, addFav, filter, sort } from "../../redux/actions";
import styles from "./Favorites.module.css"



function Favorites({favorites, onClose}) {

    const dispatch = useDispatch()
    const [aux, setAux] = useState(false)

    const handleOrder = (e) => {
        dispatch(sort(e.target.value))
        setAux(!aux)
    }

    const handleFilter = (e) => {
        dispatch(filter(e.target.value))
    }

    return (
        <>
        <select onChange={handleOrder}>
            <option value="Default">Default</option>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
        </select>
        
        
        <div className={styles.favorites}>
            
            {
                
                favorites.map((fav) => (
                    <Card
                        key={fav.id}
                        character={fav}
                        onClose={onClose}
                        name={fav.name}
                        status={fav.status}
                        species={fav.species}
                        gender={fav.gender}
                        origin={fav.origin}
                        image={fav.image}
                        id={fav.id}
                    />
                ))
            }
        </div>
        
        </>
    )
   
}

export function mapStateToProps(state) {
    return {
        favorites: state.favs
    }
}

export default connect(mapStateToProps, null)(Favorites)