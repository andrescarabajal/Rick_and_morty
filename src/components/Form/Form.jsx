import React from "react";
//import { useFormAction } from "react-router-dom";
import { validate } from "./validation";
import styles from "./Form.module.css"


export default function Form({ login }) {
  const [userData, setUserData] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({});

  function handleInputChange(e) {
    setErrors(validate({ ...userData, [e.target.name]: e.target.value }));
    setUserData({ ...userData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login(userData);
  }

  return (
    <div>
       <div className={styles.container}></div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          onChange={handleInputChange}
          value={userData.username}
        />
        <p style={{ color: "red" }}>{errors.username}</p>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={handleInputChange}
          value={userData.password}
        />
        <p>{errors.password}</p>
      
        <button  type="submit" className={styles.buttonentrar}>
          ENTRAR
          </button>
      
        
      </form>
    </div>
  );
}
