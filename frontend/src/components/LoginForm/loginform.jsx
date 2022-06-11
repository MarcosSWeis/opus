import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions";
import { useForm } from "react-hook-form";
import './Login.css'




const LoginForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state);
  const { message } = useSelector((state) => state);
  const dispatch = useDispatch();
  let navigate = useNavigate();




  const onChangesEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangesPassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    dispatch(login(email, password))

    .then(() => {
      navigate("/dashboard");
      window.location.reload();
    })
    .catch((error) => {
      setLoading(false);
      alert(error.message);
      
    
    });
    
    if (isLoggedIn) {
     navigate("/dashboard");
    }
  }

    
  return (
    <>
    
      <div className="wrapper login">
        <div className="contenedor">
          <div className="col-left">
            <div className="login-text">
              <h2>Bienvendos</h2>
              <p>
                Crea tu Perfil
                <br />O Ingresa con tu Usuario
              </p>
              <a href="" className="boton">
                Sign Up
              </a>
            </div>
          </div>

          <div className="col-right">
            <div className="login-form">
              <h2>Login</h2>
              <form onSubmit={handleLogin}>
                <p>
                  <label>
                    Email address<span>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder=" Email"
                    maxlength="40"
                    required
                    name="email"
                    onChange={onChangesEmail}
                  />
                </p>

                <p>
                  <label>
                    Password<span>*</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    maxlength="10"
                    required
                    onChange={onChangesPassword}
                  />
                </p>
                <p>
                  <input type="submit" value="Sign In"  disabled={loading} />
                  {loading && (
                    <div className="contl">
                <span className=" loader"></span> </div>
              )}
           {/*    <span>Login</span> */}
                </p>

                {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}

                <p>
                  <a href="">Forgot password?</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
