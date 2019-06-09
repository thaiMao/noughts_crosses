import Immutable from "immutable";

const initialState = Immutable.Map({ current: 1, count: 0 });

export default function turnReducer(state = initialState, action) {
  if (action.type === "SET_TURN") {
    const value = state.get("current") === 1 ? 2 : 1;
    return state.set("current", value).set("count", state.get("count") + 1);
  } else {
    return state;
  }
}
