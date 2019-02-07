import React from "react";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./404";
import LandingPage from "./Home";
test("invalid path should redirect to 404", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/random"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(LandingPage)).toHaveLength(0);
  expect(wrapper.find(NotFoundPage)).toHaveLength(1);
});
