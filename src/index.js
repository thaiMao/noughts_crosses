import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import Board from "./containers/Board";
import Info from "./containers/Info";

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <div>
          <Info />
          <Board />
        </div>
      </Provider>
    )
  }
}

const mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);



