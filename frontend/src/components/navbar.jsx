import React from "react";
import Logo from "../imgNavBar/logoH.svg";
import Usuario from "../imgNavBar/usuario.svg";
import { useSelector, useDispatch } from "react-redux";

import { logout } from "../redux/actions";
import { Link, Outlet } from "react-router-dom";

const Navbar = () => {

const {user:currentUser} = useSelector((state) => state);
const dispatch = useDispatch();



const logOut = () => {
  dispatch(logout())

}
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
        
            <Link to='/'>
            <img src={Logo} alt="Logo de la empresa" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
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
   {currentUser.isLoggedIn && currentUser.roles[0] === 'ROLE_ADMIN' ? <div>
     
              <div className="dropdown btn btn-outline-danger botonLogin   mx-5">
  <span>{currentUser.firtsname} </span>
  <div class="dropdown-content">
    <p><Link to='/panel/dashboard' className=" btn btn-outline-danger botonLoginr" style={{ color: "white" , textDecoration:'none'}}>Dashboard </Link> </p>
    <p> <Link to='/panel/user' className="btn btn-outline-danger botonLoginr" style={{ color: "white" , textDecoration:'none'}}> Usuarios</Link></p>
    <p> <Link to='/panel/maintenance' className="btn btn-outline-danger botonLoginr" style={{ color: "white" , textDecoration:'none'}}> Mantenimiento</Link></p>
    <p> <Link to='/' className="btn btn-outline-danger botonLoginr" style={{ color: "white" , textDecoration:'none'}}> Home </Link></p>
    <p><a href="/" className="btn btn-outline-danger botonLoginr" style={{ color: "white" , textDecoration:'none'}} onClick={logOut}>LogOut</a> </p>
  </div>
</div>
              </div>
        
            
            :<div>

<div className="dropdown btn btn-outline-danger botonLogin   mx-5">
  <span>{currentUser.firtsname} </span>
  <div class="dropdown-content">
    <p><Link to='/panel/profile' className=" btn btn-outline-danger botonLoginr" style={{ color: "white" , textDecoration:'none'}}>Perfil</Link> </p>
    <p> <Link to='/panel/usuario' className="btn btn-outline-danger botonLoginr" style={{ color: "white" , textDecoration:'none'}}> Usuario</Link></p>
    
    <p> <Link to='/' className="btn btn-outline-danger botonLoginr" style={{ color: "white" , textDecoration:'none'}}> Home </Link></p>
    <p><a href="/" className="btn btn-outline-danger botonLoginr" style={{ color: "white" , textDecoration:'none'}} onClick={logOut}>LogOut</a> </p>
  </div>
</div>
           </div>}
{ currentUser.isLoggedIn === false ?
           <Link to={"/login"}>
                <button
                  className="btn btn-outline-danger botonLogin    mx-5"
                  type="submit"
                >
                  <img src={Usuario} alt=" Imagen del login" />
                </button>
              </Link>:null}
          </div>
        </div>
        <Outlet />
      </nav>
    </>
  );
};

export default Navbar;
