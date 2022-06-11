import React from "react";

const FormulalioUsuario = () => {
    return (  
        
                <div className="formularioSize container">

                    <h2  className="titleDiv">NUEVO USUARIO</h2>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-2 mb-2 ">
                            <button class="btn  btn-danger" type="button">imagen ajustes</button>
                            <button class="btn btn-danger" type="button">login-up</button>
                    </div>
                    
                    <div class="d-grid gap-2 d-md-flex justify-md-start mb-3 mt-3">
                                <button class="btn btn-danger" type="button">Button</button>
                                <button class="btn btn-danger" type="button">Button</button>
                    </div>
                    <div><h3> Todos los campos son obligatorios</h3></div>
                <form action="" className="formulario">

                <div class="form-floating put">
                        <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Identificacion</label>
                </div>
                <div class="form-floating">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Departamento</label>
                </div>
                <div class="form-floating">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Nombre</label>
                </div>
                <div class="form-floating">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Apellido</label>
                </div>
                <div class="form-floating">
                            <input type="text" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Telefono</label>
                </div>
                <div class="form-floating">
                            <input type="email" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">correo</label>
                </div>
                <div class="form-floating">
                            <input type="email" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Tipo de Usuario</label>
                </div>
                <div class="form-floating">
                            <input type="email" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">DNI</label>
                </div>
                <div class="form-floating">
                            <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                            <label for="floatingPassword">Contraseña</label>
                </div>

                </form>
                <div class="d-grid gap-5 d-flex justify-content-center mt-3">
                                <button class="btn btn-danger mb-4" type="button">Guardar</button>
                                <button class="btn btn-light mb-4" type="button">Cerrar</button>
                    </div>
                
                </div>


    );
}

export default FormulalioUsuario;