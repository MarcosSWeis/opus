import React from "react";
import Logo from "../imgNavBar/logoH.svg";
import Usuario from "../imgNavBar/usuario.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        
            <Link to='/'>
            <img src={Logo} alt="Logo de la empresa" />
            </Link>
{/*           <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link
                  to={"/about"}
                  className="nav-link active mx-5"
                  aria-current="page"
                >
                  Nosotros
                </Link>
              </li>
              <li class="nav-item">
                <Link to={"/departments"} class="nav-link mx-5">
                  Departamentos
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/contact"}
                  className="nav-link active mx-5"
                  aria-current="page"
                >
                  Contacto
                </Link>
              </li>
            </ul>
            <div>
              <Link to={"/login"}>
                <button
                  className="btn btn-outline-danger botonLogin   mx-5"
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
