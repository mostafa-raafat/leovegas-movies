import {watchLater} from "../watchLater";
import {WATCHLATER} from "../../actions/watchLater";

const MOVIE = {
  id: 300671,
  popularity: 144.929,
  poster_path: "/4qnEeVPM8Yn5dIVC4k4yyjrUXeR.jpg",
  release_date: "2016-01-13",
  title: "13 Hours: The Secret Soldiers of Benghazi",
  vote_average: 7.1,
};

describe("Watch Later Reducer", () => {
  it("handles actions of type WATCHLATER.ADD", () => {
    const action = {
      type: WATCHLATER.ADD,
      payload: MOVIE,
    };
    const newState = watchLater({}, action);
    expect(newState[MOVIE.id].title).toEqual(MOVIE.title);
  });

  it("handles actions of type WATCHLATER.REMOVE", () => {
    const action = {
      type: WATCHLATER.REMOVE,
      payload: MOVIE.id,
    };
    const newState = watchLater({}, action);
    expect(newState).toEqual({});
  });

  it("handles action with unknown type", () => {
    const newState = watchLater({}, {type: "unknown type"});
    expect(newState).toEqual({});
  });
});
