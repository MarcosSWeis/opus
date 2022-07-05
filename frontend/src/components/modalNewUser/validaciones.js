

export const validate = (input) => {
  let errors = {};
  if (!input.first_name) {
    errors.first_name = "El nombre es requerido";
  } else if (!/^[A-Z][\s\w\:]{1,20}$/.test(input.first_name)) {
    errors.first_name = "El nombre debe empezar en mayuscula";
  }

  if (!input.last_name) {
    errors.last_name = "El apellido es requerido";
  } else if (!/^[A-Z][\s\w\W]{1,20}$/.test(input.last_name)) {
    errors.last_name = "El apellido debe empezar en mayuscula";
  }

  if (!input.cel) {
    errors.cel = "Un numero de contacto es requerido";
  }

  if (!input.email) {
    errors.email = "El correo electronico es requerido";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      input.email
    )
  ) {
    errors.email = "El correo debe ser tipo info@info.com";
  }

  if (!input.dni) {
    errors.dni = "La identificación es requerida";
  } else if (!/^[0-9]{1,12}$/.test(input.dni)) {
    errors.dni = "La identificación debe ser numerica";
  }
  if (!input.TowerName) {
    errors.TowerName = "El nombre de la torre es requerido";
  }
  if (!input.password) {
    errors.password = "La contraseña es requerida";
  }

  if (!input.numDeApartamento) {
    errors.numDeApartamento = "El numero de apartamento es requerido";
  } else if (!/^[0-9]{1,12}$/.test(input.numDeApartamento)) {
    errors.numDeApartamento = "El numero de apartamento debe ser numerico";
  } else if (input.numDeApartamento.length != 3 && input.numDeApartamento.length != 4) {
    errors.numDeApartamento = "El numero de apartamento debe ser de 3 o 4 digitos";
  } else if (input.numDeApartamento.length == 3 && input.numDeApartamento[1] != "0" && input.numDeApartamento[0] == 0) {
    errors.numDeApartamento = "Numero de apartamento invalido";
  } else if (input.numDeApartamento.length == 4 && input.numDeApartamento[2] != "0" && input.numDeApartamento[0] + input.numDeApartamento[1] != 10) {
    errors.numDeApartamento = "Numero de apartamento invalido";
  }

  return errors;
} 