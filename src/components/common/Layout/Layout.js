import React from "react";
import PropTypes from "prop-types";
import withThemeContext from "../../../hoc/withThemeContext";
import styles from "./Layout.module.scss";

function Layout({ children, themeData }) {
  return (
    <div
      className={`${styles.container} ${
        themeData.isChecked ? styles.dark : styles.light
      }`}
    >
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,

  themeData: PropTypes.shape({
    theme: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    onThemeToggle: PropTypes.func.isRequired,
  }).isRequired,
};

export default withThemeContext(Layout);
