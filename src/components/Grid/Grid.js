import React from "react";
import styles from "./style.css";
import Row from "../Row";

function Grid(props) {
  const { handleClick, rows } = props;
  return (
    <div className={styles.container}>
      {rows.map((data, index) => (
        <Row data={data} handleClick={handleClick} key={index} />
      ))}
    </div>
  );
}

export default Grid;
