import Cell from "../Cell";
import React from "react";
import styles from "./style.css";
import Cross from "../Cross";
import Nought from "../Nought";

function getIcon(data) {
  if (data === "X") {
    return <Cross />;
  } else if (data === "O") {
    return <Nought />;
  } else {
    return null;
  }
}

function Row(props) {
  const { data, handleClick } = props;
  return (
    <div className={styles.container}>
      {data.map(({ content: data, id }) => {
        return (
          <Cell
            children={getIcon(data)}
            data={data}
            handleClick={handleClick}
            id={id}
            key={id}
          />
        );
      })}
    </div>
  );
}

export default Row;
