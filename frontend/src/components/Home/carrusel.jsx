import React from "react";
import Home1 from"../../img/1.png";
import Home2 from "../../img/2.jpg";

export default function carrusel() {
    return(
      <>

<main className="main" id="main">
        <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-pause="false">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={Home1} className="d-block w-100" alt="Stockholm City"/>
                </div>
                <div className="carousel-item">
                    <img src={Home2} className="d-block w-100" alt="Avicii Arena"/>
                </div>
                <div className="carousel-item">
                    <img src={Home1} className="d-block w-100" alt="Conference"/>
                </div>
                <div className="overlay">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="title-carousel text-start">
                                <h1>Bienvenido a Opus!</h1>
                                <p className="sub-title d-none d-md-block">El mejor lugar para vivir</p>
                               
         
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
      
      </>
  
       
    )
}
