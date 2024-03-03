const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
  let errors = {};
  if (!regexEmail.test(inputs.email)) {
    errors.email = "Debe ser un correo electrónico";
  }
  if (inputs.email === "") {
    errors.email = "El email no debe estar vacío";
  }
  if (inputs.email.length > 35) {
    errors.email = "El email no puede tener mas de 35 caracteres";
  }
  if (inputs.password === "") {
    errors.password = "El password tiene que tener al menos 1 numero";
  }
  if (inputs.password.length < 6 || inputs.password.length > 10) {
    errors.password =
      "El password tiene que tener una longitud entre 6 y 10 caracteres";
  }

  return errors;
}

export default function Contact() {
  const [inputs, setInputs] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value });
    setErrors(validate({ ...inputs, [event.target.name]: event.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Object.keys(errors).length === 0) {
      alert("Datos completos");
      setInputs({
        email: "",
        password: "",
      });
      setErrors({
        email: "",
        password: "",
      });
    } else {
      alert("Debe llenar todos los campos");
    }
  };
}
