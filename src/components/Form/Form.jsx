import s from "./Form.module.css";
import { useState } from "react";
import validation from "./validation";
export default function Forms({ login }) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setErrors(
      validation({ ...userData, [event.target.name]: event.target.value })
    );
    console.log(errors);
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <form className={s.container} onSubmit={handleSubmit}>
      <img
        className={s.img}
        src="https://es.web.img3.acsta.net/pictures/18/10/31/17/34/2348073.jpg"
        alt=""
      />
      <div className={s.divContainer}>
        <label className={s.label} htmlFor="">
          EMAIL
        </label>
        <input
          className={s.input}
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        {errors.email && <span className={s.error}>{errors.email}</span>}
      </div>
      <div className={s.divContainer}>
        <label className={s.label} htmlFor="">
          PASSWORD
        </label>
        <input
          className={s.input}
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        {errors.password && <span className={s.error}>{errors.password}</span>}
      </div>
      <button type="submit" className={s.btn}>
        Submit
      </button>
    </form>
  );
}
