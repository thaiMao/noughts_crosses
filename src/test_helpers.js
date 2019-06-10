import { createStore } from "redux";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import React from "react";
import reducer from "./reducers";

export function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {}
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store
  };
}
