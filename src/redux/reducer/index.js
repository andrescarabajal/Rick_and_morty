import { ADD_CHARACTER, DELETE_CHARACTER } from "../actions/action-types";

const initialState = {
  myFavorites: [],
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_CHARACTER:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };
    case DELETE_CHARACTER:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((elem) => elem.id !== payload),
      };
    default:
      return { ...state };
  }
}
