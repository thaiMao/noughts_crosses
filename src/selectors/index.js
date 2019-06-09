import Immutable from "immutable";

function rowsSelector(state) {
  const board = state.get("board");
  return Immutable.List([
    board.slice(0, 3),
    board.slice(3, 6),
    board.slice(6, 9)
  ]);
}

function turnSelector(state) {
  return state.get("turn");
}

export { rowsSelector, turnSelector };
