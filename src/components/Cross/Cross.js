import styles from "./styles.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Cross = () => (
  <FontAwesomeIcon className={styles.container} icon={faTimes} />
);

export default Cross;
