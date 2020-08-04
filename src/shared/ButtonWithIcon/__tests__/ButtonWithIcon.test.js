import React from "react";
import {mount} from "enzyme";
import {IconButton, Icon} from "@material-ui/core";
import ButtonWithIcon from "../index";

let wrapper;
const onClickMock = jest.fn();
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

beforeEach(() => {
  wrapper = mount(
    <ButtonWithIcon
      movie={movie}
      ButtonLabel="add test"
      iconAlt="alt-test"
      iconPath="test"
      handleClick={onClickMock}
    />
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe("ButtonWithIcon Component", () => {
  it(`has a 1 IconButton, 1 Icon & click handler been called on click event`, () => {
    expect(wrapper.find(IconButton).length).toEqual(1);
    expect(wrapper.find(Icon).length).toEqual(1);
    wrapper.simulate("click");
    expect(onClickMock).toHaveBeenCalled();
  });
});
