import React, { useReducer } from "react";

import styles from "./form.module.css";
import useHelloApi from "./useHelloApi";

const initialState = {
  name: "",
  email: "",
  subject: "",
  body: ""
};

const reducer = (state, action) => {
  if (state[action.type] !== undefined) {
    return {
      ...state,
      [action.type]: action[action.type]
    };
  }

  return state;
};

const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [{ loading }, submitForm] = useHelloApi({
    ...state
  });

  const handleChange = e => {
    dispatch({ type: e.target.name, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    submitForm();
  };

  return (
    <form onSubmit={handleSubmit} className={`${styles.form}`}>
      <label className={`${styles.label}`}>
        <span>Name:</span>
        <input
          value={state.name}
          onChange={handleChange}
          type="text"
          name="name"
          className={`${styles.input}`}
        />
      </label>

      <label className={`${styles.label}`}>
        <span>Email Address:</span>
        <input
          value={state.email}
          onChange={handleChange}
          type="email"
          name="email"
          className={`${styles.input}`}
        />
      </label>

      <label className={`${styles.label}`}>
        <span>Subject:</span>
        <input
          value={state.subject}
          onChange={handleChange}
          type="text"
          name="subject"
          className={`${styles.input}`}
        />
      </label>

      <label className={`${styles.label}`}>
        <span>Message:</span>
        <textarea
          value={state.body}
          onChange={handleChange}
          name="body"
          className={`${styles.input} ${styles.textarea}`}
        />
      </label>

      <button type="submit" className={`${styles.button}`}>
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};

export default Form;
