import {combineReducers} from "redux";
import {movies, moviesHaveError, moviesAreLoading} from "./movies";
import {favorite} from "./favorite";
import {watchLater} from "./watchLater";

export default combineReducers({
  movies,
  moviesHaveError,
  moviesAreLoading,
  favorite,
  watchLater,
});
