import React from "react";
import {shallow} from "enzyme";
import {ListItem} from "@material-ui/core";
import ListItems from "../index";

let wrapper;

const menuItems = [
  {
    name: "Popular",
    icon: "fire",
    url: "/",
  },
];

const historyMock = {push: jest.fn()};

beforeEach(() => {
  wrapper = shallow(<ListItems history={historyMock} menuItems={menuItems} />);
});

describe("ListItems Component", () => {
  it(`has a ${menuItems.length} ListItem & image with alt = ${menuItems.name}`, () => {
    expect(wrapper.find(ListItem).length).toEqual(menuItems.length);
    expect(
      wrapper
        .find("img")
        .first()
        .props().alt
    ).toEqual(menuItems[0].name);
  });
  it("click should HaveBeenCalled 1 time with /", () => {
    wrapper
      .find(ListItem)
      .first()
      .simulate("click");
    expect(historyMock.push).toHaveBeenCalledTimes(1);
    expect(historyMock.push).toHaveBeenLastCalledWith("/");
  });
});
