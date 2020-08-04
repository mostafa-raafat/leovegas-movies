import React from "react";
import {mount} from "enzyme";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";
import AlertError from "../index";

let wrapper;

beforeEach(() => {
  wrapper = mount(<AlertError error="error message" handleClose={jest.fn()} />);
});

afterEach(() => {
  wrapper.unmount();
});

describe("AlertError Component", () => {
  it(`has a 1 Snackbar, 1 Alert & 2 props`, () => {
    expect(wrapper.find(Snackbar).length).toEqual(1);
    expect(wrapper.find(Alert).length).toEqual(1);
    expect(wrapper.prop("error")).toEqual("error message");
  });
});
