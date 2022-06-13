import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import usuario_nuevo from "../imagenesUsuarios/avatar_nuevoUsuario.svg"
import agregar_usuario from "../imagenesUsuarios/icono_de_más.svg"
import { register } from "../redux/actions";

const FormulalioUsuario = ( ) => {

const [datosusuarios, setDatosusuarios]= useState ( { 
    identificacion: ' ',
    departamento: ' ',    
    nombre: '',
    apellido: '',
    telefono:  ' ',
    correo: ' ',
    tipoDeUsuario: ' ',
    DNI: ' ',
    contraseña: ' ',

})

const user = useSelector (state => state.register_user);
    const dispatch = useDispatch();
const handleInputChange= (event) => {
    // console.log(event.target.value)
    setDatosusuarios( {
        ...datosusuarios,
        [event.target.name]  : event.target.value
    })
}


const enviarDatos = (event) => {
    event.preventDefault ( );
    console.log (datosusuarios.nombre + '  ' + datosusuarios.apellido)
    dispatch(register(datosusuarios))

}



    return (  
        
                <div className="formularioSize container">

                                    <div className="title_usuario"><h2  className="titleDiv">NUEVO USUARIO</h2></div>    

                                {/*  modal que contiene el formulario ----------------------------------------------------------------------------------------------------------*/}

                                    <div><h3> Todos los campos son obligatorios</h3></div>                

                                <div class="d-grid gap-2 d-md-flex justify-content-md-start mt-2 mb-2 ">
                                        <button class="btn  btn-dark acciones2" type="button"><img src={usuario_nuevo} /></button>
                                        <button type="button" class="btn btn-secondary mx-3" data-bs-toggle="modal" data-bs-target="#exampleModal"><img src={agregar_usuario} /></button>
                                </div>



                                    <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                            <div class="modal-dialog ">
                                                        <div class="modal-content">
                                                                <div class="modal-header ">
                                                                    <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                </div>
                                                                <div class="modal-body ">

                                                                <form  className="formulario" onSubmit={enviarDatos}/>

                                                            <div class="form-floating my-3  formularioSize">
                                                                    <input type="text" name="identificacion" class="form-control" id="floatingInput" placeholder="name@example.com" onChange={handleInputChange}/>
                                                                    <label for="floatingInput">Identificacion</label>
                                                            </div>
                                                            <div class="form-floating my-3">
                                                                        <input type="text" name="departamento" class="form-control" id="floatingPassword" placeholder="Password"onChange={handleInputChange}/>
                                                                        <label for="floatingPassword">Departamento</label>
                                                            </div>
                                                            <div class="form-floating my-3">
                                                                        <input type="text"  name= "nombre" class="form-control" id="floatingPassword" placeholder="Password" onChange={handleInputChange}/>
                                                                        <label for="floatingPassword">Nombre</label>
                                                            </div>
                                                            <div class="form-floating my-3">
                                                                        <input type="text" name="apellido" class="form-control" id="floatingPassword" placeholder="Password"  onChange={handleInputChange}  />
                                                                        <label for="floatingPassword">Apellido</label>
                                                            </div>
                                                            <div class="form-floating my-3">
                                                                        <input type="text" name="telefono" class="form-control" id="floatingPassword" placeholder="Password"  onChange={handleInputChange}/>
                                                                        <label for="floatingPassword">Telefono</label>
                                                            </div>
                                                            <div class="form-floating my-3">
                                                                        <input type="email"  name="correo" class="form-control" id="floatingPassword" placeholder="Password"  onChange={handleInputChange}/>
                                                                        <label for="floatingPassword">correo</label>
                                                            </div>
                                                            <div class="form-floating my-3">
                                                                        <input type="text" name="tipoDeUsuario" class="form-control" id="floatingPassword" placeholder="Password"  onChange={handleInputChange}/>
                                                                        <label for="floatingPassword">Tipo de Usuario</label>
                                                            </div>
                                                            <div class="form-floating my-3">
                                                                        <input type="text"  name="DNI" class="form-control" id="floatingPassword" placeholder="Password"  onChange={handleInputChange}/>
                                                                        <label for="floatingPassword">DNI</label>
                                                            </div>
                                                            <div class="form-floating my-3">
                                                                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password"  onChange={handleInputChange}/>
                                                                        <label for="floatingPassword">Contraseña</label>
                                                            </div>
                                                                </div>
                                                                        <div class="modal-footer">
                                                                                <div class="d-grid gap-5 d-flex justify-content-center mt-3">
                                                                                            <button class="btn btn-danger mb-4" type="submit">Guardar</button>
                                                                                            <button class="btn btn-light mb-4" type="button">Cerrar</button>
                                                                                </div>
                                                                        </div> 
                                            </div>
                                </div>
                        </div>
                        {/*  fin del  modal del formulario-------------------------------------------------------------------------------- */}
                </div>


    );
}

export default FormulalioUsuario;