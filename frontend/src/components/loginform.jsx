import React  from "react";

const LoginForm = () => {
    return ( 
        <>
                    <div className="wrapper login">
        <div className="contenedor">
            <div className="col-left">
                <div className="login-text">
                    <h2>Bienvendos</h2>
                    <p>Crea tu Perfil<br/>O Ingresa con  tu Usuario</p>
                    <a href="" className="boton">Sign Up</a>
                </div>
            </div>

            <div className="col-right">
                <div className="login-form">
                    <h2>Login</h2>
                    <form action="">
                        <p>
                            <label>Username/Email address<span>*</span></label>
                            <input type="text" placeholder="Username or Email"  maxlength="40" required />
                        </p>
                        <p>
                            <label>Password<span>*</span></label>
                            <input type="password" placeholder="Password"  maxlength="10"required />
                        </p>
                        <p>
                            <input type="submit" value="Sign In"/>
                        </p>
                        <p>
                            <a href="">Forgot password?</a>
                        </p>

                    </form>
                </div>
            </div>

        </div>
    </div>
        </>
        ) ;
}

export default LoginForm ;