const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validation = (data) => {
  let errors = {};
  if (!data.email) {
    errors.email = "El email no debe estar vacío";
  } else if (!regexEmail.test(data.email)) {
    errors.email = "Debe ser un correo electrónico";
  } else if (data.email.length > 35) {
    errors.email = "El email no puede tener mas de 35 caracteres";
  }
  if (!data.password) {
    errors.password = "La password no debe estar vacía";
  } else if (!/\d/) {
    errors.password = "El password tiene que tener al menos 1 numero";
  } else if (data.password.length < 6 || data.password.length > 10) {
    errors.password =
      "El password tiene que tener una longitud entre 6 y 10 caracteres";
  }

  return errors;
};

export default validation;
