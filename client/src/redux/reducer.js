import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-type";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_FAV":
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
      };
    case "REMOVE_FAV":
      return { ...state, myFavorites: action.payload };
    case FILTER:
      const allCharactersFiltered =
        action.payload === "All"
          ? state.allCharacters
          : state.allCharacters.filter((char) => {
              return char.gender === action.payload;
            });

      return {
        ...state,
        myFavorites: allCharactersFiltered,
      };
    case ORDER:
      const order = state.allCharacters.sort((a, b) => {
        return action.payload === "A" ? a.id - b.id : b.id - a.id;
      });

      return {
        ...state,
        myFavorites: order,
      };
    default:
      return { ...state };
  }
}

export default rootReducer;
