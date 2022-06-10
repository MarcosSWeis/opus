import React, { useState } from "react";
import Logo from "../imgNavBar/logoH.svg";
import Usuario from "../imgNavBar/usuario.svg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {history} from '../helpers/history'
import { clearMessage } from "../redux/actions";
import { logout } from "../redux/actions";

const Navbar = () => {

const[showAdminBoard, setAdminBoard] = useState(false);
const [showUserBoard, setUserBoard] = useState(false);
const {user:currentUser} = useSelector((state) => state);
const dispatch = useDispatch();

/* useEffect(() => {
  history.listen((location) => {
    dispatch(clearMessage()); // clear message when changing location
  });
}, [dispatch]); */

/* useEffect(() => {
  if (currentUser) {
    setAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    setUserBoard(currentUser.roles.includes("ROLE_USER"));
  }
}, [currentUser]);
const logOut = () => {
  dispatch(logout());
};

 */

/* const logOut = () => {
  dispatch(logout())

} */
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
{/* {showAdminBoard &&(
              <li className="nav-item">
                <Link
                  to={"/admin"}
                  className="nav-link active mx-5"
                  aria-current="page"
                >
                  Admin
                </Link>
              </li>
              )}
              {showUserBoard &&(
              <li className="nav-item">
                <Link
                  to={"/admin"}
                  className="nav-link active mx-5"
                  aria-current="page"
                >
                  User
                </Link>
              </li>
              )} */}
              {/* {currentUser ? (
            <div className="navbar-nav ml-auto">

              <li className="nav-item">
                <a href="/login"className="nav-link active mx-5" onClick={logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ): (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link active mx-5"
                  aria-current="page">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/register"} className="nav-link active mx-5"
                  aria-current="page">
                  Sign Up
                </Link>
              </li>
            </div>
          )} */}
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
