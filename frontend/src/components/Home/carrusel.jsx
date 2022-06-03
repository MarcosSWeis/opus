import React from "react";
import Home1 from"../../img/1.png";
import Home2 from "../../img/2.jpg";

export default function carrusel() {
    return(
      <>

<main class="main" id="main">
        <div id="carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-pause="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={Home1} class="d-block w-100" alt="Stockholm City"/>
                </div>
                <div class="carousel-item">
                    <img src={Home2} class="d-block w-100" alt="Avicii Arena"/>
                </div>
                <div class="carousel-item">
                    <img src={Home1} class="d-block w-100" alt="Conference"/>
                </div>
                <div class="overlay">
                    <div class="container">
                        <div class="row align-items-center">
                            <div className="title-carousel text-start">
                                <h1>Bienvenido a Opus!</h1>
                                <p class="sub-title d-none d-md-block">El mejor lugar para vivir</p>
                               
         
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
