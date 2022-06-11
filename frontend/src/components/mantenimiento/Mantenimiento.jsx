import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImageCarrusel } from "../../redux/actions";
import ChangeCarrousel from "./carrousel/ChangeCarrousel";
import ChangePhotosSpaces from "./photosSpaces/ChangePhotosSpaces";
import s from "./mantenimiento.module.css";
import EditRedes from "./redesSociales/EditRedes";

function Mantenimiento() {
  const [action, setAction] = useState("");
  let section;
  function handleSelect(e) {
    const { value } = e.target;
    setAction(value);
  }
  if (action === "carrousel") {
    section = <ChangeCarrousel/>;
  } else if (action === "spaces") {
    section = <ChangePhotosSpaces/>;
  }else if (action === "redes") {
    section = <EditRedes/>;
  }

  return (
    <div className={s.new}>
      {/* <Link to="/"><button className={s.button}>Volver</button></Link> */}
      <div className={s.carousel}>
        {/* <label>Selecciona</label> */}
        <select className={s.cat} onChange={(e) => handleSelect(e)}>
          <option hidden>Seleccione una opción</option>
          <option key="1" value="carrousel">
            Carrousel del Home
          </option>
          <option key="2" value="spaces">
            Fotos de espacios sociales
          </option>
          <option key='3' value='redes'>
            Redes sociales
          </option>
        </select>
      </div>
      {section}
    </div>
  );
}

export default Mantenimiento;
