import {favoriteAdd, favoriteRemove, FAVORITE} from "../favorite";

const MOVIE = {
  id: 300671,
  popularity: 144.929,
  poster_path: "/4qnEeVPM8Yn5dIVC4k4yyjrUXeR.jpg",
  release_date: "2016-01-13",
  title: "13 Hours: The Secret Soldiers of Benghazi",
  vote_average: 7.1,
};

describe("Favorite Actions", () => {
  it("Favorite Add has the correct type & correct payload", () => {
    const action = favoriteAdd(MOVIE);
    expect(action.type).toEqual(FAVORITE.ADD);
    expect(action.payload.title).toEqual(MOVIE.title);
  });

  it("Favorite Remove has the correct type & correct payload", () => {
    const action = favoriteRemove(MOVIE.id);
    expect(action.type).toEqual(FAVORITE.REMOVE);
    expect(action.payload).toEqual(MOVIE.id);
  });
});
