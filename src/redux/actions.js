export const ADD_FAV = 'ADD_FAV'
export const REMOVE_FAV = 'REMOVE_FAV'
export const FILTER = 'FILTER'
export const SORT = 'SORT'

export const addFav = (personaje) => {
    return {
        type: ADD_FAV,
        payload: personaje
    }
}

export const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
}

export const filter = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const sort = (orden) => {
    return {
        type: SORT,
        payload: orden
    }
}