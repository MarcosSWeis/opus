import React  from "react";


const Navbar  = () => {
    return ( 
        <>
                    <nav class="navbar navbar-expand-lg bg-light">
                                    <div class="container-fluid">
                                                <a class="navbar-brand" href="#">LOGO</a>
                                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span class="navbar-toggler-icon"></span>
                                                </button>
                                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                                                <li class="nav-item">
                                                                <a class="nav-link active" aria-current="page" href="#">NOSOTROS</a>
                                                                </li>
                                                                <li class="nav-item">
                                                                <a class="nav-link" href="#">DEPARTAMENTOS</a>
                                                                </li>
                                                                <li class="nav-item dropdown">
                                                                <a class="nav-link active" aria-current="page" href="#">CONTACTO</a>
                                                                </li>
                                                    </ul>
                                                        <div className="dropdown login-est">
                                                                    <a class="btn btn-success dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="true">
                                                                    LOGIN
                                                                    </a>

                                                                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                        <li ><a class="dropdown-item  " href="#">Action</a></li>
                                                                        <li ><a class="dropdown-item" href="#">Another action</a></li>
                                                                        <li ><a class="dropdown-item " href="#">Something else here</a></li>
                                                                    </ul>
                                                        </div> 
                                            </div>
                                    </div>
                    </nav>

</>
    );
}

export default Navbar ;