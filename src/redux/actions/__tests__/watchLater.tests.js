import {watchLaterAdd, watchLaterRemove, WATCHLATER} from "../watchLater";

const MOVIE = {
  id: 300671,
  popularity: 144.929,
  poster_path: "/4qnEeVPM8Yn5dIVC4k4yyjrUXeR.jpg",
  release_date: "2016-01-13",
  title: "13 Hours: The Secret Soldiers of Benghazi",
  vote_average: 7.1,
};

describe("Watch Later Actions", () => {
  it("WatchLater Add has the correct type & correct payload", () => {
    const action = watchLaterAdd(MOVIE);
    expect(action.type).toEqual(WATCHLATER.ADD);
    expect(action.payload.title).toEqual(MOVIE.title);
  });

  it("WatchLater Remove has the correct type & correct payload", () => {
    const action = watchLaterRemove(MOVIE.id);
    expect(action.type).toEqual(WATCHLATER.REMOVE);
    expect(action.payload).toEqual(MOVIE.id);
  });
});
