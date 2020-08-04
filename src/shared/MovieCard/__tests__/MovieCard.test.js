import React from "react";
import {Provider} from "react-redux";
import moxios from "moxios";
import {mount} from "enzyme";
import {Chip} from "@material-ui/core";

import MovieCard from "../index";
import ButtonWithIcon from "../../ButtonWithIcon";
import configureStore from "../../../redux/store/configureStore";
import {resolveSearchPath} from "../../../utils";

let wrapper;

const movie = {
  id: 300671,
  popularity: 144.929,
  poster_path: "/4qnEeVPM8Yn5dIVC4k4yyjrUXeR.jpg",
  release_date: "2016-01-13",
  title: "13 Hours: The Secret Soldiers of Benghazi",
  vote_average: 7.1,
  overview: "test",
  video: false,
};

const initialState = {
  favorite: {},
  watchLater: {},
};
const store = configureStore(initialState);

beforeEach(() => {
  wrapper = mount(
    <Provider store={store}>
      <MovieCard movie={movie} />
    </Provider>
  );
});

afterEach(() => {
  wrapper.unmount();
  moxios.uninstall();
});

describe("Movie Card Component", () => {
  it(`has a 2 Chip, 3 ButtonWithIcon & Chips have correct props`, () => {
    expect(wrapper.find(ButtonWithIcon).length).toEqual(3);
    expect(wrapper.find(Chip).length).toEqual(2);
    expect(
      wrapper
        .find(Chip)
        .at(0)
        .prop("label")
    ).toEqual(movie.release_date);
    expect(
      wrapper
        .find(Chip)
        .at(1)
        .prop("label")
    ).toEqual(movie.vote_average);
  });
  it("Should add to (favorite => STORE) when click on favorite button", () => {
    expect(
      wrapper
        .find(ButtonWithIcon)
        .at(1)
        .prop("iconPath")
    ).toEqual("favorite-outline.svg");
    wrapper
      .find(ButtonWithIcon)
      .at(1)
      .simulate("click");
    wrapper.update();
    expect(Object.keys(store.getState()["favorite"]).length).toEqual(1);
    expect(store.getState()["favorite"][movie.id].title).toEqual(movie.title);
    expect(
      wrapper
        .find(ButtonWithIcon)
        .at(1)
        .prop("iconPath")
    ).toEqual("favorite.svg");
  });

  it("Should add to (watch-later => STORE) when click on watch-later button", () => {
    expect(
      wrapper
        .find(ButtonWithIcon)
        .at(2)
        .prop("iconPath")
    ).toEqual("watch-later-outline.svg");
    wrapper
      .find(ButtonWithIcon)
      .at(2)
      .simulate("click");
    wrapper.update();
    expect(Object.keys(store.getState()["watchLater"]).length).toEqual(1);
    expect(store.getState()["watchLater"][movie.id].title).toEqual(movie.title);
    expect(
      wrapper
        .find(ButtonWithIcon)
        .at(2)
        .prop("iconPath")
    ).toEqual("watch-later.svg");
  });

  it("Should open new tab when watch trailer button clicked", done => {
    // eslint-disable-next-line no-undef
    global.open = jest.fn();
    moxios.install();
    const urlKey = "DEa508Xmmio";
    moxios.stubRequest(resolveSearchPath(`movie/${movie.id}/videos`), {
      status: 200,
      response: {
        id: 561,
        results: [
          {
            key: urlKey,
          },
        ],
      },
    });

    wrapper
      .find(ButtonWithIcon)
      .at(0)
      .simulate("click");

    moxios.wait(() => {
      wrapper.update();
      // eslint-disable-next-line no-undef
      expect(global.open).toHaveBeenCalledWith(
        `https://www.youtube.com/watch?v=${urlKey}`,
        "_blank"
      );
      done();
    });
  });
});
