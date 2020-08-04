import React from "react";
import {mount} from "enzyme";

import SearchInput from "../index";

let wrapper;

const onChangeMock = jest.fn();
const onSubmitMock = jest.fn();

beforeEach(() => {
  wrapper = mount(
    <SearchInput searchTerm="" handleSubmit={onSubmitMock} handleChange={onChangeMock} />
  );
});

afterEach(() => {
  wrapper.unmount();
});

describe("Search Input Component", () => {
  it("should call onChange when input value change", () => {
    const event = {
      preventDefault() {},
      target: {value: "new comment"},
    };
    expect(onChangeMock).toHaveBeenCalledTimes(0);
    wrapper.find("input").simulate("change", event);
    wrapper.update();
    expect(onChangeMock).toHaveBeenCalledTimes(1);
  });

  it("should call onSubmit when form been submitted", () => {
    const event = {
      preventDefault() {},
      target: {value: "new comment"},
    };
    expect(onSubmitMock).toHaveBeenCalledTimes(0);
    wrapper.find("form").simulate("submit", event);
    wrapper.update();
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });
});
