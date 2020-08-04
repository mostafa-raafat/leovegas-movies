import {FAVORITE} from "../../actions/favorite";
import {favorite} from "../favorite";

const MOVIE = {
  id: 300671,
  popularity: 144.929,
  poster_path: "/4qnEeVPM8Yn5dIVC4k4yyjrUXeR.jpg",
  release_date: "2016-01-13",
  title: "13 Hours: The Secret Soldiers of Benghazi",
  vote_average: 7.1,
};

describe("Favorite Reducer", () => {
  it("handles actions of type FAVORITE.ADD", () => {
    const action = {
      type: FAVORITE.ADD,
      payload: MOVIE,
    };
    const newState = favorite({}, action);
    expect(newState[MOVIE.id].title).toEqual(MOVIE.title);
  });

  it("handles actions of type FAVORITE.REMOVE", () => {
    const action = {
      type: FAVORITE.REMOVE,
      payload: MOVIE.id,
    };
    const newState = favorite({}, action);
    expect(newState).toEqual({});
  });

  it("handles action with unknown type", () => {
    const newState = favorite({}, {type: "unknown type"});
    expect(newState).toEqual({});
  });
});
