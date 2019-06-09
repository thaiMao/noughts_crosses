export default function isGameOverReducer(state = false, action) {
  if (action.type === "SET_HAS_GAME_ENDED") {
    return !state;
  } else {
    return state;
  }
}
