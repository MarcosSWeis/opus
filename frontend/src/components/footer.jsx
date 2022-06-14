import React, { useEffect } from "react";
import Logo from "../img/logo 1.png";
import Logoig from "../img/logoig.svg";
import Logomail from "../img/logogmail.svg";
import Logoubi from "../img/logoubi.svg";
import { useDispatch, useSelector } from "react-redux";
import { getSocial } from "../redux/actions";
import { Toaster, toast } from "react-hot-toast";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Footer() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.social);

  useEffect(() => {
    dispatch(getSocial());
  }, []);
  console.log(data);
  return (
    <>
      <footer id="footer" className="pb-4 pt-4">
        <div className="container">
          <div className="row text-center">
            <div className="col-12 col-lg">
              <img src={Logo} alt="" />
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
              <p>
                Calle: Yrigoyen Hipólito 3972 Ciudad: Buenos Aires
                Estado/provincia/zona: Buenos Aires Número de teléfono: 1149 58
                2179 Código de llamada del país: +54 País: Argentina
              </p>
            </div>
            <div className="col-12 col-lg">
              <img src="" alt="" />
            </div>

            <div className="logos col-12 col-lg">
              <a href={data.facebook} target="_blank">
                <img src={Logoubi} alt="" />
              </a>
              <a href={data.instagram} target="_blank">
                <img src={Logoig} alt="" />
              </a>
              <CopyToClipboard text={data.email}>
                <p className="email"
                  onClick={() =>
                    toast.success("Correo copiado al portapapeles")
                  }
                >
                  <img src={Logomail} alt="" />
                </p>
              </CopyToClipboard>
              <Toaster position="bottom-center" reverseOrder={false} />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
