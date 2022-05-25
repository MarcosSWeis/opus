import React  from "react";

const LoginForm = () => {
    return ( 
        <>
                    <div class="wrapper login">
        <div class="contenedor">
            <div class="col-left">
                <div class="login-text">
                    <h2>Bienvendos</h2>
                    <p>Crea tu Perfil<br/>O Ingresa con  tu Usuario</p>
                    <a href="" class="boton">Sign Up</a>
                </div>
            </div>

            <div class="col-right">
                <div class="login-form">
                    <h2>Login</h2>
                    <form action="">
                        <p>
                            <label>Username/Email address<span>*</span></label>
                            <input type="text" placeholder="Username or Email"  maxlength="20" required />
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