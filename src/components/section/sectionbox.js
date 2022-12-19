import React from "react";
import * as styles from "../section/sectionbox.module.css";
const SectionBox = ({ children }) => {
  return <section className={styles.sectionBox}>{children}</section>;
};
export default SectionBox;