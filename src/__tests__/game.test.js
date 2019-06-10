import React from "react";
import { renderWithRedux } from "../test_helpers";
import Game from "../components/Game";

describe("<Game />", () => {
  it("should display the title", () => {
    const { getByText } = renderWithRedux(<Game />);
    expect(getByText(/Noughts & Crosses/i)).toBeTruthy();
  });
});
