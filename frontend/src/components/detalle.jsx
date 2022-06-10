import React from "react";
import Depto from '../img/foto-detalle.svg';
import Salder from '../img/salder 5.svg'

export default function carrusel() {
    return(

        <>

        

<section className="img-depto">

<main class="main" id="main">
        <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-pause="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Depto} class="d-block w-100" alt=""/>s
                </div>
                
                <div class="overlay">
                    <div class="container">
                        <div class="row align-items-center">
                            <div className="title-carousel text-start">
                                

                                
                               
                               
         
                            </div>
                            <img src={Salder} class="img-fluid" alt="..."></img>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </main>

    

    </section>
        

        <section className="body-detalles">

            <div className="button-text">
        <button type="button" class="precio btn btn-danger">Departamento · 232m² USD 18,950</button>


        <div class="card1">
  <div class="card-body">

  <div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>


  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Deja tu mensaje</label>
  <textarea class="textarea form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="button-text">
        <button type="button" class="precio btn btn-danger">Contactar</button>
</div>
    




  </div>
</div>



           </div>

        <p className="text-detalles">Venta de amplio y lujoso departamentos de 232 m2, diseñado por el Arq. Mario Lara, ubicado en San Isidro incluye estacionamiento, (3) tres habitaciones cada una con su baño independiente adicional al de visita y servicio, terraza, cortinas eléctricas, ascensor directo al departamento y un ascensor de ingreso al area de servicio, aire acondicionado central, mamaparas y ventanas con vidrio insonoro, piso machimbrado de madera y excelentes acabados. Adicionalmente, cuenta con línea blanca que consta de lavadora (1), secadora (1), cocina integral y nevera (1), todos los equipos son de la línea Monogram de General Electric.</p>
          
        </section>

        
        
        </>

    )
}