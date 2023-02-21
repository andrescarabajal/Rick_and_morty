import { ADD_CHARACTER, DELETE_CHARACTER } from "./action-types";

export function addFavorite(character) {
  return {
    type: ADD_CHARACTER,
    payload: character,
  };
}
export function removeFavorite(id) {
  return {
    type: DELETE_CHARACTER,
    payload: id,
  };
}
