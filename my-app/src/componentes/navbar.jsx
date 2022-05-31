import React  from "react";


const Navbar  = () => {
    return ( 
        <>
                    <nav class="navbar navbar-expand-lg bg-light">
                                    <div class="container-fluid">
                                                <a class="navbar-brand"> <img src="" alt="Logo de la empresa" /></a>
                                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                                </button>
                                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                                                                <li class="nav-item">
                                                                <a class="nav-link active mx-5" aria-current="page" href="#">Nosotros</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                <a class="nav-link mx-5" href="#">Departamentos</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                <a class="nav-link active mx-5" aria-current="page">Contacto</a>
                                                                </li>
                                                    </ul>
                                                        <div>
                                                                <button class="btn btn-outline-danger botonLogin   mx-5"   type="submit"><img src="" alt=" Imagen del login" /></button>
                                                            </div>
                                            </div>
                                    </div>
                    </nav>

</>
    );
}

export default Navbar ;