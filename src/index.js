import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Game from "./components/Game";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
