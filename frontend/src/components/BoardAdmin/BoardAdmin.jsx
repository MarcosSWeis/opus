import React from "react";
<<<<<<< HEAD
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Dashboard.css";
import { logout } from "../../redux/actions";
import { useDispatch } from "react-redux";
import logo from "./imageBoard/logohorizontal.svg";
import usuario from "./imageBoard/usuario.svg";
=======
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Dashboard.css";
import { logout } from "../../redux/actions";
import { useDispatch } from "react-redux";
import logo from './imageBoard/logohorizontal.svg';
import usuario from './imageBoard/usuario.svg';
import pago from './imageBoard/iconoDepago.svg';
import dashboard from './imageBoard/iconodashboard.svg'
import usuarios from './imageBoard/iconousuarios.svg'




>>>>>>> aa38c2475a0e36951de9e46ecfaad20b32e9c51e

export default function BoardAdmin() {

    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state);

    const logOut = () => {
        dispatch(logout());
    };

    return (
        <>
            <div className="row ">
                <div className="col-3">
                    <aside className="ocultar">
                        <div className="col">
                            <div className="contl">
                                <img src={logo} alt="logo" />
                            </div>

                            <div className="conti">
                                {currentUser.image ? (
                                    <img className="imaged" src={currentUser.image} alt="" />
                                ) : (
                                    <img src={usuario} alt="" />
                                )}
                            </div>

                            <div className="contp">
                                <p className="pd">
                                    {currentUser.firtsname} {currentUser.lastname}{" "}
                                </p>
                            </div>
                        </div>
                        <hr style={{ height: '10px', width: '100%', backgroundColor: 'white', borderTop: '1px solid', opacity: 'inherit' }} />


                        {currentUser.roles[0] === 'ROLE_ADMIN' ? <div> <div className="col">
                            <p
                                className="pd">
                                <Link to={'dashboard'} style={{ color: "white", textDecoration: 'none' }}>
                                    <img src={dashboard} alt='icono pago' />  Dashboard
                                </Link>
                            </p>
                        </div>

                            <p className="pd">
                                <Link to="user" style={{ color: "white", textDecoration: 'none' }}>
                                    <img src={usuarios} alt='usuarios' />    Usuarios
                                </Link>
                            </p>
                            <p className="pd">
                                <Link to='maintenance'
                                    style={{ color: "white", textDecoration: 'none' }}> <img src={dashboard} alt='usuarios' /> Mantenimiento </Link></p>

                            <p className="pd" ><img src={pago} alt='pagos' /> Pagos</p>
                            <a href="/" className="pd" onClick={logOut} >
                                Logout
                            </a>
                        </div>
                            : <div><p className="pd">
                                <Link to='Profile'
                                    style={{ color: "white", textDecoration: 'none' }}> <img src={usuarios} alt='usuarios' /> perfil</Link></p>
                                <p className="pd">
                                    <Link to='usuario'
                                        style={{ color: "white", textDecoration: 'none' }}> <img src={dashboard} alt='usuarios' /> usuario</Link></p>
                                <a href="/" className="pd" onClick={logOut} >
                                    Logout
                                </a>
                            </div>}

                    </aside>
                </div>

                <div className="col-9">
                    <Outlet />
                </div>
            </div>
        </>
    );
}
// "dloade0@cpanel.net","password":"7JRvpa"
