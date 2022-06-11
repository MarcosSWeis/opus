import React from "react";

const Usuario = ( ) =>{
    return (  
        <>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2 mb-2 ">
                            <button class="btn  btn-light" type="button">imagen ajustes</button>
                            <button class="btn btn-light" type="button">login-up</button>
                    </div>


                    <div class="d-grid gap-2 d-md-flex justify-md-start mb-3">
                                <button class="btn btn-danger" type="button">Button</button>
                                <button class="btn btn-danger" type="button">Button</button>
                    </div>

                    <div class="d-grid gap-2 d-md-flex justify-content-md-end mt-2 mb-2">
                                <button class="btn btn-danger" type="button">Button buscar</button>
                    </div>

                    <div className="iconos select2">
                                <img src="https://cdn-icons-png.flaticon.com/512/916/916771.png" className="edif" alt=""/ >
                                <h5 className="mx-3">PISO</h5>

                                <div className="mb-5 size">
                                        <select class="form-select mb-5 " aria-label="Default select example">
                                                    <option selected>1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option>
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                    <option value="9">9</option>
                                                    <option value="10">10</option>
                                        </select>
                                </div>
                    </div>

                    <div className="iconos select">
                    <button type="button" class="btn btn-danger">COPIAR</button>
                    <button type="button" class="btn btn-danger mx-3">PDF</button>
                    <button type="button" class="btn btn-danger">EXCEL</button>
                    </div>

        <table class="table">
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
                                        <button type="button" class="btn btn-danger" > Ver</button>
                                        <button type="button" class="btn btn-danger mx-3">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
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
                                        <button type="button" class="btn btn-danger">Ver</button>
                                        <button type="button" class="btn btn-danger mx-3">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                        </div> 
                                    </td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                                    <td>260</td>
                                    <td>Marcos</td>
                                    <td>Muñoz</td>
                                    <td>muños_marcos@gmail.com</td>
                                    <td>2636523458</td>
                                    <td>
                                    <div>
                                        <button type="button" class="btn btn-danger">Ver</button>
                                        <button type="button" class="btn btn-danger mx-3">Editar</button>
                                        <button type="button" class="btn btn-danger">Eliminar</button>
                                        </div> 
                                    </td>
                            </tr>
                    </tbody>
        </table>
        </>
    );
}

export default Usuario