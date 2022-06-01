import React from "react";
import Logo from "../imgNavBar/logoH.svg";
import Usuario from "../imgNavBar/usuario.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {" "}
            <img src={Logo} alt="Logo de la empresa" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li class="nav-item">
                <Link
                  to={"/about"}
                  class="nav-link active mx-5"
                  aria-current="page"
                >
                  Nosotros
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/depataments"} class="nav-link mx-5">
                  Departamentos
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to={"/contact"}
                  class="nav-link active mx-5"
                  aria-current="page"
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <div>
              <Link to={"/login"}>
                <button
                  class="btn btn-outline-danger botonLogin   mx-5"
                  type="submit"
                >
                  <img src={Usuario} alt=" Imagen del login" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
