import React from "react";
import PropTypes from "prop-types";
import styles from "./Section.module.scss";

function Section({ title, children }) {
  return (
    <section className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      {children}
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
