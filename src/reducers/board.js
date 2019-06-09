import Immutable from "immutable";

const initialState = Immutable.List([
  { content: "", id: 0 },
  { content: "", id: 1 },
  { content: "", id: 2 },
  { content: "", id: 3 },
  { content: "", id: 4 },
  { content: "", id: 5 },
  { content: "", id: 6 },
  { content: "", id: 7 },
  { content: "", id: 8 }
]);

export default function boardReducer(state = initialState, action) {
  if (action.type === "SET_BOARD") {
    return Immutable.List(action.payload);
  } else {
    return state;
  }
}
