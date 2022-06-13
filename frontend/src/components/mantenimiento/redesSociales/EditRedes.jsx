import React, { useEffect, useState } from "react";
import s from "./editRedes.module.css";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { updateSocial } from "../../../redux/actions";

export default function EditRedes() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState(useSelector((state) => state.social));

  const validate = (data) => {
    let errors = {};
    if (!data.facebook) {
      errors.facebook = "Link de facebook requerido";
    } else if (
      !/[(http(s) ?): \/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
        data.facebook
      )
    ) {
      errors.facebook = "Debe ser una dirección web válida";
    }
    if (!data.instagram) {
      errors.instagram = "Link de instagram requerido";
    } else if (
      !/[(http(s) ?): \/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/.test(
        data.instagram
      )
    ) {
      errors.instagram = "Debe ser una dirección web válida";
    }
    if (!data.email) {
      errors.email = "Email requerido";
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(data.email)) {
      errors.email = "Debe ser una dirección de correo";
    }
    return errors;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Object.values(errors).length) {
      
      dispatch(updateSocial(input));
      Swal.fire({
        icon: "success",
        title: "¡Genial!",
        text: "Redes sociales actualizadas",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "¡Error!",
        text: "Por favor, revisa los campos",
      });
    }
  };

  useEffect(() => {
    setErrors(validate(input));
  }, []);

  useEffect(() => {
    setErrors(validate(input));
  }, [input]);

  return (
    <div className={s.edit}>
      {/* <h2>Editar redes sociales</h2> */}
      <form onSubmit={handleSubmit}>
        <div className={s.form}>
          <div>
            <label>Instagram</label>
            <input
              type="text"
              value={input.instagram}
              name="instagram"
              onChange={handleChange}
            />
          </div>
          {errors.instagram && <p className={s.error}>{errors.instagram}</p>}
          <div>
            <label>Facebook</label>
            <input
              type="text"
              value={input.facebook}
              name="facebook"
              onChange={handleChange}
            />
          </div>
          {errors.facebook && <p className={s.error}>{errors.facebook}</p>}
          <div>
            <label>Email</label>
            <input
              type="text"
              value={input.email}
              name="email"
              onChange={handleChange}
            />
          </div>
          {errors.email && <p className={s.error}>{errors.email}</p>}
          <button
            className={s.submit}
            type="submit"
          >
            Actualizar
          </button>
        </div>
      </form>
    </div>
  );
}
