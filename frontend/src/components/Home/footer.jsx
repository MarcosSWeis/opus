import React from "react";
import Logo from "../../img/logo 1.png";
import Logoig from "../../img/logoig.svg";
import Logomail from "../../img/logogmail.svg";
import Logoubi from "../../img/logoubi.svg"

export default function carrusel() {
    return(
      <>


      <footer id="footer" className="pb-4 pt-4">
        <div className="container">
            <div className="row text-center">
                <div className="col-12 col-lg">
                    <img src={Logo}  alt="" />
                </div>
                <div className="col-12 col-lg">
                    <img src="" alt="" />
                </div>
                <div className="nav-footer col-12 col-lg">
                    <a href="">Nosotros</a>
                    <div>
                    <a href="">Departamentos</a>
                    </div>
                    
                    <a href="">Contacto</a>
                </div>
                <div className="col-12 col-lg">
                    <img src="" alt="" />
                </div>
               
                <div className="text-start footer-adress col-12 col-lg">
                   <p>Calle: Yrigoyen Hipólito 3972

Ciudad: Buenos Aires

Estado/provincia/zona: Buenos Aires

Número de teléfono:  1149 58 2179

Código de llamada del país: +54

País: Argentina</p>
                </div>
                <div className="col-12 col-lg">
                    <img src="" alt="" />
                </div>
              
                <div className="logos col-12 col-lg">
                    <img src={Logoubi} alt="" />
                    <img src={Logomail} alt="" />
                    <img src={Logoig} alt="" />
                </div>
            </div>
        </div>
    </footer>


   
      </>




         )
        }