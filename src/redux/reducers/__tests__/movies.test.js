import {Movies} from "../../actions/movies";
import {moviesHaveError, moviesAreLoading, movies} from "../movies";

const MOVIES = {
  results: [
    {
      id: 300671,
      popularity: 144.929,
      poster_path: "/4qnEeVPM8Yn5dIVC4k4yyjrUXeR.jpg",
      release_date: "2016-01-13",
      title: "13 Hours: The Secret Soldiers of Benghazi",
      vote_average: 7.1,
    },
  ],
};

describe("Movies Reducer", () => {
  it("handles actions of type Movies.HAVE_ERROR", () => {
    const action = {
      type: Movies.HAVE_ERROR,
      payload: true,
    };
    const newState = moviesHaveError(true, action);
    expect(newState).toEqual(true);
  });

  it("handles actions of type Movies.ARE_LOADING", () => {
    const action = {
      type: Movies.ARE_LOADING,
      payload: true,
    };
    const newState = moviesAreLoading(true, action);
    expect(newState).toEqual(true);
  });

  it("handles actions of type Movies.FETCH_DATA_SUCCESS", () => {
    const action = {
      type: Movies.FETCH_DATA_SUCCESS,
      payload: MOVIES,
    };
    const newState = movies([], action);
    expect(newState.length).toEqual(MOVIES.results.length);
  });
});
