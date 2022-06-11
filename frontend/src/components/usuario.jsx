import React from "react";
import usuarioIcono  from "../imagenesUsuarios/icono_usuarios.svg"
import iconoUsuario from "../imagenesUsuarios/icono_usuario.svg"
import agregar from "../imagenesUsuarios/icono_de_más.svg"
import ajustes from "../imagenesUsuarios/icono_configuración.svg"
import copy from "../imagenesUsuarios/icono_copiar.svg"
import pdf from "../imagenesUsuarios/pdf_icono.svg"
import excel from "../imagenesUsuarios/Excel_download.svg"
import ver from "../imagenesUsuarios/icono_ojo.svg"
import editar from "../imagenesUsuarios/icono_lapiz.svg"
import eliminar from "../imagenesUsuarios/icono_tacho.svg"
const Usuario = ( ) =>{
        return (  
        <>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2 mb-2 ">
                                <button class="btn  btn-light " type="button"><img src={ajustes} /></button>
                                <button class="btn btn-light" type="button"><img src={iconoUsuario}/></button>
                </div>


                <div class="d-grid gap-2 d-md-flex justify-md-start mb-3">
                                <button class="btn btn-danger" type="button"><img src={usuarioIcono} /> USUARIO</button>
                                <button class="btn btn-danger" type="button"><img src={agregar}/><div><h5>Nuevo</h5></div></button>
                </div>

                <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2 mb-2">
                                <div class="input-group mb-3 buscar">
                                        <input type="text" class="form-control " placeholder="Buscar Usuario" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                        <button class="btn btn-danger" type="button" id="button-addon2">Buscar</button>
                                </div> 
                </div>

                <div className="iconos select2 ">
                                <img src="https://cdn-icons-png.flaticon.com/512/916/916771.png" className="edif" alt=""/ >
                                <h5 className="mx-3">PISO</h5>

                                <div className="mb-5 size">
                                        <select class="form-select selectPa" aria-label="Default select example">
                                                        <option selected className="text-center">1</option>
                                                        <option value="2" className="text-center">2</option>
                                                        <option value="3"className="text-center">3</option>
                                                        <option value="4"className="text-center">4</option>
                                                        <option value="5" className="text-center">5</option>
                                                        <option value="6"className="text-center">6</option>
                                                        <option value="7"className="text-center">7</option>
                                                        <option value="8"className="text-center">8</option>
                                                        <option value="9"className="text-center">9</option>
                                                        <option value="10"className="text-center">10</option>
                                        </select>
                                </div>
                </div>

                        <div className="iconos select mt-5">
                        <button type="button" class="btn btn-danger"> <img src={copy}/>COPIAR</button>
                        <button type="button" class="btn btn-danger mx-3"><img src={pdf}/>PDF</button>
                        <button type="button" class="btn btn-danger"><img src={excel}/>EXCEL</button>
                        </div>

                <table class="table ">
                        <thead>
                                <tr>
                                <th scope="col">n°</th>
                                <th scope="col">Departamento</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telefono</th>
                                <th scope="col">Acciones</th>
                                </tr>
                        </thead>
                        <tbody>
                                <tr>
                                        <th scope="row">1</th>
                                        <td>502</td>
                                        <td>Luis</td>
                                        <td>Otto</td>
                                        <td>lukas@gmail.com</td>
                                        <td>44426898</td>
                                        <td>
                                        <div>
                                        <button type="button" class="btn btn-danger" > <img src={ver} className="acciones" /></button>
                                        <button type="button" class="btn btn-danger mx-3"><img src={editar} className="acciones"/></button>
                                        <button type="button" class="btn btn-danger"><img src={eliminar} className="acciones"/></button>
                                        </div>                            
                                </td>
                                </tr>
                                <tr>
                                        <th scope="row">2</th>
                                        <td>450</td>
                                        <td>Nicolas</td>
                                        <td>Webber</td>
                                        <td>webber_N@gmail.com</td>
                                        <td>2613026895</td>
                                        <td>
                                        <div>
                                                <button type="button" class="btn btn-danger "><img src={ver} className="acciones" /></button>
                                                <button type="button" class="btn btn-danger mx-3"><img src={editar} className="acciones"/></button>
                                                <button type="button" class="btn btn-danger"><img src={eliminar} className="acciones"/></button>
                                        </div> 
                                        </td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                        <td>Marcos</td>
                                        <td>Muñoz</td>
                                        <td>muños_marcos@gmail.com</td>
                                        <td>2636523458</td>
                                        <td>260</td>
                                        <td>
                                                <div>
                                                <button type="button" class="btn btn-danger"><img src={ver} className="acciones" /></button>
                                                <button type="button" class="btn btn-danger mx-3"><img src={editar} className="acciones"/></button>
                                                <button type="button" class="btn btn-danger"><img src={eliminar} className="acciones"/></button>
                                                </div> 
                                        </td>
                        </tr>
                </tbody>
        </table>

        </>
);
}

export default Usuario