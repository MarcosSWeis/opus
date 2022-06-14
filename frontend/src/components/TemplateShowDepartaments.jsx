import { Link, useLocation } from "react-router-dom";
import stylesShowDepartament from "./showDepartaments.module.css";
import icono_area_verde from "../img/departament/icono_area_verde.svg";
import icono_de_animales from "../img/departament/icono_de_animales.svg";
import icono_de_calefacion from "../img/departament/icono_de_calefacion.svg";
import icono_de_camara from "../img/departament/icono_de_camara.svg";
import icono_de_persona from "../img/departament/icono_de_persona.svg";
import icono_de_piscina from "../img/departament/icono_de_piscina.svg";
import icono_de_tenis from "../img/departament/icono_de_tenis.svg";
import icono_de_usuario from "../img/departament/icono_de_usuario.svg";
import icono_de_ventana from "../img/departament/icono_de_ventana.svg";
import icono_de_wifi from "../img/departament/icono_de_wifi.svg";

export default function TemplateShowDepartaments({
  price,
  images,
  description,
  measure,
  id,
}) {
  let limitDescription = description;
  if (description.length > 200) {
    limitDescription = limitDescription.substring(0, 200);
  }
  return (
    <section className="mt-4 ">
      <div className="w-75 m-auto">
        <Link
          to={`/departments/${id}`}
          className="text-decoration-none text-dark w-75"
        >
          <div
            className={`w-100 p-2 mb-3 m-auto ${stylesShowDepartament.col_3} ${stylesShowDepartament.d_flex} ${stylesShowDepartament.container_departaments} ${stylesShowDepartament.minHeightCard}`}
          >
            <div className={`${stylesShowDepartament.col_4} m-auto`}>
              <img
                className={`w-100 ${stylesShowDepartament.container_departaments}`}
                src={`${images[0]}`}
                alt=""
              />
            </div>
            <div
              className={`${stylesShowDepartament.col_5} ${stylesShowDepartament.ml_5}`}
            >
              <div className="d-flex">
                <h3>$ {price}</h3> | <h3> {measure} m²</h3>
              </div>
              <h4>Lorem, ipsum dolor.</h4>
              <p>{limitDescription} ...</p>
            </div>
            <div className={`${stylesShowDepartament.col_1} p-1 m-2`}>
              <div className="d-flex justify-content-around pb-3">
                <img src={icono_area_verde} alt="" className="text-dark" />
                <img src={icono_de_animales} alt="" className="text-dark" />
                <img src={icono_de_calefacion} alt="" className="text-dark" />
              </div>
              <div className="d-flex justify-content-around pb-3 ">
                <img src={icono_de_camara} alt="" className="text-dark" />
                <img src={icono_de_persona} alt="" className="text-dark" />
                <img src={icono_de_piscina} alt="" className="text-dark" />
              </div>
              <div className="d-flex justify-content-around">
                <img src={icono_de_tenis} alt="" className="text-dark" />
                <img src={icono_de_ventana} alt="" className="text-dark" />
                <img src={icono_de_wifi} alt="" className="text-dark" />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
