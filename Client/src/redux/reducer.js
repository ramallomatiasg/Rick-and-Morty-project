const initialState = {
    favs: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return { ...state, favs: action.payload, allCharacters: action.payload };
        case 'REMOVE_FAV':
            return { ...state, favs: action.payload, allCharacters: action.payload };
        case 'FILTER':
            return {
                ...state,
                favs: state.allCharacters.filter((fav) => fav.gender === action.payload)
            }
            case "SORT":
                const orden= [...state.favs]
                orden.sort((a,b)=>{
                    if(action.payload==="A"){
                        return a.id - b.id
                    } else if (action.payload === "D") { // Orden descendente
                        return b.id - a.id;
                    }
                })
                return{...state, favs: orden}
        default:
            return state
    }
}

export default reducer