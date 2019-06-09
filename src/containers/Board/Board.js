import { connect } from "react-redux";
import { changeTurn, changeBoard, setHasGameEnded } from "../../actionCreators";
import Grid from "../../components/Grid";
import React from "react";
import withImmutablePropsToJS from "with-immutable-props-to-js";
import { isWinner } from "./helpers";
import { rowsSelector, turnSelector } from "../../selectors";

class Board extends React.Component {
  isPlayerOne() {
    const { whoseTurn } = this.props;
    return Object.is(whoseTurn, 1);
  }

  insert(value, position) {
    const { board } = this.props;
    const newBoard = board.map(cell => {
      if (cell.id == position) {
        return { content: value, id: Number(position) };
      } else {
        return cell;
      }
    });
    return newBoard;
  }

  updateBoard(cellIndex) {
    if (this.isPlayerOne()) {
      return this.insert("O", cellIndex);
    } else {
      return this.insert("X", cellIndex);
    }
  }

  endOrContinueGame(updatedBoard) {
    if (isWinner(updatedBoard)) {
      this.props.dispatchHasGameEnded();
    } else {
      this.props.dispatchPlayer();
    }
  }

  handleClick = event => {
    event.stopPropagation();
    const { dataset } = event.currentTarget;
    const { content, id: cellIndex } = dataset;

    if (content !== "") return;

    const updatedBoard = this.updateBoard(cellIndex);
    const { dispatchBoard } = this.props;
    dispatchBoard(updatedBoard);

    this.endOrContinueGame(updatedBoard);
  };

  render() {
    const { rows } = this.props;
    return <Grid handleClick={this.handleClick} rows={rows} />;
  }
}

const mapDispatchToProps = {
  dispatchBoard: changeBoard,
  dispatchHasGameEnded: setHasGameEnded,
  dispatchPlayer: changeTurn
};

const mapStateToProps = state => ({
  board: state.get("board"),
  rows: rowsSelector(state),
  whoseTurn: turnSelector(state).get("current")
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withImmutablePropsToJS(Board));
