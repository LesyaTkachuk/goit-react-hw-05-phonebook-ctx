import React from "react";
import styles from "./ContactList.module.scss";
import withThemeContext from "../../hoc/withThemeContext";
import PropTypes from "prop-types";

function ContactList({ contacts, onClickDelete, themeData }) {
  return (
    <ul
      className={`${styles.list} ${
        themeData.isChecked ? styles.list__dark : styles.list__light
      }`}
    >
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <span className={styles.name}>{name}: </span>
          <span>{number}</span>
          <button type="button" onClick={() => onClickDelete(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickDelete: PropTypes.func.isRequired,

  themeData: PropTypes.shape({
    theme: PropTypes.string.isRequired,
    isChecked: PropTypes.bool.isRequired,
    onThemeToggle: PropTypes.func.isRequired,
  }).isRequired,
};

export default withThemeContext(ContactList);
