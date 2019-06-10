import React from "react";
import { connect } from "react-redux";
import withImmutablePropsToJS from "with-immutable-props-to-js";
import styles from "./styles.css";
import { turnSelector } from "../../selectors";

function Info({ isDraw, turn, isGameOver }) {
  const stillPlaying = !isGameOver && !isDraw;
  return (
    <section className={styles.container}>
      <h1>Noughts & Crosses</h1>
      {stillPlaying && <p>Player {turn}. Now your turn to pick a square.</p>}
      {isGameOver && <p>GAME OVER. Player {turn} has won!</p>}
      {isDraw && <p>GAME OVER. The game has ended in a DRAW.</p>}
    </section>
  );
}

const mapStateToProps = state => ({
  isDraw: turnSelector(state).get("count") == 9 && !state.get("isGameOver"),
  isGameOver: state.get("isGameOver"),
  turn: turnSelector(state).get("current")
});

export default connect(mapStateToProps)(withImmutablePropsToJS(Info));
