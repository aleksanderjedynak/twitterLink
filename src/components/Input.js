import React from "react";
import PropTypes from "prop-types";
import styles from "./Input.module.scss";

const Input = ({ tag: Tag, name, label, maxlength }) => (
  <div className={styles.formItem}>
    <Tag
      className={Tag === "textarea" ? styles.textarea : styles.input}
      type="text"
      name={name}
      id={name}
      placeholder=" "
      maxLength={maxlength}
      required
    />
    <label className={styles.label} htmlFor={name}>
      {label}
    </label>
    <div className={styles.formItemBar} />
  </div>
);

Input.propTypes = {
  tag: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxlength: PropTypes.number,
};

Input.defaultProps = {
  tag: "input",
  maxlength: 200,
};

export default Input;
