import { combineReducers } from "redux-immutable";
import board from "./board";
import turn from "./turn";
import isGameOver from "./isGameOver";

export default combineReducers({
  board,
  isGameOver,
  turn
});
