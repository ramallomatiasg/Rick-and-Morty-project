import styles from "./Form.module.css";
import { useState } from "react";
import validation from "../../validation";

export default function Form({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).every((key) => errors[key] === "")) {
      login(userData);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          placeholder="example@gmail.com"
          value={userData.email}
          onChange={handleChange}
        ></input>
        <p>{errors.email}</p>

        <label>Password:</label>
        <input
          type="text"
          name="password"
          placeholder="password"
          value={userData.password}
          onChange={handleChange}
        ></input>
        <p>{errors.password}</p>

        <button>Login</button>
      </form>
    </div>
  );
}
