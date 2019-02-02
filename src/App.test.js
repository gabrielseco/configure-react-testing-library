import React from "react";
import { render } from "react-testing-library";
import App from "./App";

it("renders without crashing", () => {
  const wrapper = render(<App />);
  expect(wrapper.container.outerHTML).not.toBeUndefined();
});

it("the link text should be Learn React", () => {
  const wrapper = render(<App />);
  expect(wrapper.container.querySelector("a")).toHaveTextContent("Learn React");
});
