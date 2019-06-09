import React from "react";
import styles from "./style";

function Cell({ children, data, handleClick, id }) {
  return (
    <div
      className={styles.container}
      data-content={data}
      data-id={id}
      data-testid={`square-${id++}`}
      onClick={handleClick}
    >
      {children}
    </div>
  );
}

export default Cell;
