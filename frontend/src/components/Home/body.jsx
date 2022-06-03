import React from "react";
import tenis from "../../img/4.png";
import card2 from "../../img/card2.png";
import card3 from "../../img/card3.png";
import rectangle from "../../img/Rectangle 108.png";
import Main from "../../img/main-img.png";


export default function carrusel() {
    return(
       <>

       <section className="body mt-4">

          <div className="text-center">
             <h1 className="upper-title">Vive</h1>
             <small className="lower-title fs-2">Nuestras experiencias</small>
          </div>
          
          <div>
              <img className="rectangle" src={rectangle} alt="" />
           </div>

         
        <div className="container">

          
            
            <div className="row">
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card">
                        <img src={tenis} className="card-img-top" alt="Dwayne Johnson"/>
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <div className="badges mb-2">
                            </div>
                            <p className="card-text">En nuestros espacios disfrutarás de un ambiente cálido y tranquilo</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card">
                        <img src={card2} className="card-img-top" alt="Dwayne Johnson"/>
                        <div className="card-body">
                            <p className="card-text">Vive la experiencia de disfrutar con tus mascotas al aire libre.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-4">
                    <div className="card">
                        <img src={card3} className="card-img-top" alt="Dwayne Johnson"/>
                        <div className="card-body">
                            <p className="card-text">En nuestros espacios disfrutarás de un ambiente cálido y tranquilo</p>
                        </div>
                    </div>
                </div>
               
                    </div>
                </div>
           
    </section>

<section className="description flex">

<div className="main-pic text-start">
  <img src={Main} className="rounded" alt="..."/>
</div>

<p className="lead ">
    OPUS tiene el  desarrollo más exclusivo de Buenos Aires en Argentina, diseñado y ubicado al Sur la zona con mayor plusvalía en la Ciudad, cerca de Centros comerciales, escuelas, hospitales y a tan sólo 15 minutos del Aeropuerto Internacional de Buenos Aires.
Con excelentes amenidades como Caseta de Seguridad con Pluma de Acceso, Áreas de usos múltiples con Alberca, Gimnasio, Amplias áreas verdes con Jardines y Juegos infantiles, el Hogar que tú y tu familia se merecen.

</p>

</section>
    
         
       
       
       </>
    )
}
