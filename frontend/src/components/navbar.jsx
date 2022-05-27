import React  from "react";
import Logo from "../imgNavBar/logoH.svg"
import Usuario from "../imgNavBar/usuario.svg"

const Navbar  = () => {
    return ( 
        <>
                    <nav class="navbar navbar-expand-lg bg-light">
                                    <div class="container-fluid">
                                                <a class="navbar-brand" href="#"> <img src={Logo} alt="" /></a>
                                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                                </button>
                                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 mx-5">
                                                                <li class="nav-item">
                                                                <a class="nav-link active mx-4" aria-current="page" href="#">Nosotros</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                <a class="nav-link mx-4" href="#">Departamentos</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                <a class="nav-link active mx-4" aria-current="page" href="#">Contacto</a>
                                                                </li>
                                                    </ul>
                                                        <div>
                                                                <button class="btn btn-outline-danger botonLogin  "   type="submit"><img src={Usuario} alt="" /></button>
                                                            </div>
                                            </div>
                                    </div>
                    </nav>

</>
    );
}

export default Navbar ;