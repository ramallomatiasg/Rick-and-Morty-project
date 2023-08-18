import axios from "axios";
export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const SORT = "SORT";

export const addFav = (character) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav';
   return async (dispatch) => {
      try {
         const {data} = await axios.post(endpoint, character)
            return dispatch({
               type: ADD_FAV,
               payload: data,
            });
         
      } catch (error) {
         console.log(error.message)
      }
   };
};

export const removeFav = (id) => {
   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
   return async (dispatch) => {
      try {
         const {data} = await axios.delete(endpoint)
         return dispatch({
            type: REMOVE_FAV,
            payload: data,
         })
      } catch (error) {
         console.log(error.message)
      }
   }
}

export const filter = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

export const sort = (orden) => {
  return {
    type: SORT,
    payload: orden,
  };
};
