import s from "./Form.module.css";
import { useState } from "react";
import { validateEmail, validatePassword } from "./validation";
export default function Forms() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
      setErrors(validateEmail({
        ...userData,[name]:value
      }),
      validatePassword({
        ...userData,[name]:value
      }))
  };
  };

  return (
    <form className={s.container}>
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
        />
      </div>
      <div className={s.divContainer}>
        <label className={s.label} htmlFor="">
          PASSWORD
        </label>
        <input
          className={s.input}
          type="text"
          name="password"
          value={userData.password}
        />
      </div>
      <button type="submit" className={s.btn}>
        Submit
      </button>
    </form>
  );
}
