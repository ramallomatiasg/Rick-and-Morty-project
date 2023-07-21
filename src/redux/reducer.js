const initialState = {
    favs: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return {
                ...state,
                favs: [...state.allCharacters, action.payload],
                allCharacters: [...state.allCharacters, action.payload]
            }
        case 'REMOVE_FAV':
            return {
                ...state,
                favs: state.favs.filter((fav) => fav.id !== action.payload)
            }
        case 'FILTER':
            return {
                ...state,
                favs: state.allCharacters.filter((fav) => fav.gender === action.payload)
            }
        case 'SORT':
        let sorted
            if(action.payload === 'A') {
                sorted = state.allCharacters.sort((a, b) => a.id > b.id ? 1 : -1)
            } else if(action.payload === 'D'){
                sorted = state.allCharacters.sort((a, b) => a.id < b.id ? 1 : -1)
            } else {
                sorted = state.allCharacters
            }
            return {
                ...state,
                favs: [...sorted]
            }
        default:
            return state
    }
}

export default reducer