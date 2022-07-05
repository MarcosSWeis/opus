import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Dashboard.css";
import { logout } from "../../redux/actions";
import { useDispatch } from "react-redux";
import logo from "./imageBoard/logohorizontal.svg";
import usuario from "./imageBoard/usuario.svg";

export default function BoardAdmin() {
  const navigate = useNavigate();
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
            <hr
              style={{
                height: "10px",
                width: "100%",
                backgroundColor: "white",
                borderTop: "1px solid",
                opacity: "inherit",
              }}
            />
            <div className="col">
              <button className="butond">
                <Link
                  to={"dashboard"}
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Dashboard
                </Link>
              </button>
            </div>

            <p className="pd">
              <Link
                to="user"
                style={{ color: "white", textDecoration: "none" }}
              >
                Usuarios
              </Link>
            </p>
            <p className="pd">
              <Link
                to="maintenance"
                style={{ color: "white", textDecoration: "none" }}
              >
                {" "}
                Mantenimiento{" "}
              </Link>
            </p>
            {/*  <p className="pd">Pagos</p> */}
            <a href="/" className="pd" onClick={logOut}>
              Logout
            </a>
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
