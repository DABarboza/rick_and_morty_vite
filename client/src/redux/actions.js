import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-type";
import axios from "axios";

const addFav = (character) => {
  return async (dispatch) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav";
    try {
      const response = await axios.post(endpoint, character);
      dispatch({
        type: ADD_FAV,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

const removeFav = (id) => {
  return async (dispatch) => {
    const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
    try {
      const response = await axios.delete(endpoint);
      dispatch({
        type: REMOVE_FAV,
        payload: response.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

const orderCards = (order) => {
  return {
    type: ORDER,
    payload: order,
  };
};

export { addFav, removeFav, filterCards, orderCards };
