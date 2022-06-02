import React from "react";
import imgNos from "../imgNosotros/nosotrosimg.png";
import card from "../imgNosotros/card-1.png";
import card2 from "../imgNosotros/card-2.png";
import card3 from"../imgNosotros/card-3.png";
import card4 from "../imgNosotros/card-4.png"

const Nosotros = () => {
    return (  
        <>
            <div className="seccionNosotros container-fluid">
                        <h1 className="text-center display-3">Nosotros</h1>

                        <div>
                                    <p>Somos una empresa de condominio, hace más de cincuenta años trabajamos brindando experiencias inolvidables. Nuestro fin como organización es lograr que nuestras familias sientan que Opus es el mejor lugar para vivir. Por ello, nos esforzamos por cumplir cada deseo y contamos con la infraestructura y el equipamiento necesario para satisfacer las diversas necesidades.</p>
                        </div>
                            
            </div>

            <section id="about">
                    <div  className="container">
                            <div class="about-image">
                                <img src={imgNos} alt=""/>                
                            </div>            
                                    <div class="about-text">
                                            <p className="  mt-2 mb-5">Todo se remonta a los comienzos del siglo 20 y : Magnate Luis Pierola veía en la zona un buen sitio para la iniciar fabricación de prendas, pensó en construir un textiles o centro especializado para tratar telas  de esa índole. Pero necesitaba inversores. Junto con Federico Galiani, dueño de tierras en la zona, tocaron la puerta de la compañía EE.UU Ferrocarril del Norte. que administraba un exitoso ramal de ferrocarril. La compañía vio en la propuesta una buena oportunidad para incrementar el tráfico de pasajeros en la forma de un gigantesco complejo hotelero y vacacional.</p>
                                            <p className="mt-3 mb-3" >De las hectáreas cedidas en acciones por Láinez, la empresa seleccionó aproximadamente 90 de ellas destinadas a construir el famoso condominio de descanso y placer para la aristocracia argentina y los altos funcionarios dedicados a la construcción de las redes ferroviarias de la Argentina, Brasil, Paraguay y Bolivia</p>
                                    </div>
                    </div>
            </section>

            <section id="description">
        <div class="container grid ">
                <div class="descrition-row ">
                    <div class="description-box ">

                            <div className="shadowCard">
                                <img src={card} alt="" className="mb-3"/>
                            <h4 className="falsobtn">1950</h4>
                            </div>

                    </div>
                    <div class="description-box">

                        <div className="shadowCard">
                        <img src={card2} alt=""className="mb-3"/>
                        <h4 className="falsobtn">1960</h4>    
                        </div>

                    </div>
                    <div className="description-box">

                        <div className="shadowCard">
                        <img src={card3}alt="" className="mb-3"/>
                        <h4 className="falsobtn">1970</h4>
                        </div>

                    </div>
                    <div class="description-box">

                    <div className="shadowCard">
                        <img src={card4}alt="" className="mb-3"/>
                        <h4 className="falsobtn">1980</h4> 
                        </div>

                    </div>
                </div>
        </div>
    </section>
        </>
    );
}

export default Nosotros
