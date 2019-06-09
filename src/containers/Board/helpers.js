import Immutable from "immutable";

const winningCombinations = Immutable.List([
  Immutable.List([0, 1, 2]),
  Immutable.List([3, 4, 5]),
  Immutable.List([6, 7, 8]),
  Immutable.List([0, 3, 6]),
  Immutable.List([1, 4, 7]),
  Immutable.List([2, 5, 8]),
  Immutable.List([0, 4, 8]),
  Immutable.List([2, 4, 6])
]);

export function isWinner(board) {
  const positions = board.reduce(
    (acc, curr, index) => {
      const { content } = curr;
      if (content === "X") {
        const xPath = Object.assign({}, acc, {
          crosses: [...acc.crosses, index]
        });
        return xPath;
      }
      if (content === "O") {
        const oPath = Object.assign({}, acc, {
          noughts: [...acc.noughts, index]
        });
        return oPath;
      }

      return acc;
    },
    { crosses: [], noughts: [] }
  );

  const { crosses, noughts } = positions;
  const immutableCrosses = Immutable.List(crosses);
  const immutableNoughts = Immutable.List(noughts);

  return winningCombinations.reduce((acc, combo) => {
    const checkCrosses = immutableCrosses
      .map(cross => combo.includes(cross))
      .filter(value => value);

    if (checkCrosses.size === 3) {
      return true;
    }

    const checkNoughts = immutableNoughts
      .map(nought => combo.includes(nought))
      .filter(value => value);
    if (checkNoughts.size === 3) {
      return true;
    }

    return acc;
  }, false);
}
