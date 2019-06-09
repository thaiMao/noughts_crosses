import styles from "./styles.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

const Nought = () => (
  <FontAwesomeIcon className={styles.container} icon={faCircle} />
);

export default Nought;
