import axios from "axios";
import {resolveSearchPath} from "../../utils";

/**
 * Movies Action Types
 */
export const Movies = {
  FETCH_DATA_SUCCESS: "MOVIES_FETCH_DATA_SUCCESS",
  ARE_LOADING: "MOVIES_ARE_LOADING",
  HAVE_ERROR: "MOVIES_HAVE_ERROR",
};

export const moviesHaveError = error => {
  return {
    type: Movies.HAVE_ERROR,
    payload: error,
  };
};

const moviesAreLoading = bool => {
  return {
    type: Movies.ARE_LOADING,
    payload: bool,
  };
};

const moviesFetchDataSuccess = movies => {
  return {
    type: Movies.FETCH_DATA_SUCCESS,
    payload: movies,
  };
};

export function moviesFetchData(url, searchTerm) {
  return async dispatch => {
    dispatch(moviesAreLoading(true));
    try {
      let res = await axios.get(resolveSearchPath(url, searchTerm));
      if (res.status !== 200) throw Error(res.statusText);
      dispatch(moviesFetchDataSuccess(res.data));
    } catch (error) {
      dispatch(
        moviesHaveError("Sorry! There was an error loading the movies.")
      );
    } finally {
      dispatch(moviesAreLoading(false));
    }
  };
}
