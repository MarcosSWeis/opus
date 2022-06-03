import React from "react";
import Home1 from"../../img/1.png";
import Home2 from "../../img/2.jpg";
import { Carousel } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getImageCarrusel } from "../../redux/actions";
import "./carrusel.css";

export default function Carrusel() {
  const carousel = useSelector (state => state.imgCarrusel);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImageCarrusel());
  }, []);
  console.log (carousel)
    

    return(
/*       <>
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
      
      </> */


      <div>
      <Carousel>
        {carousel.length > 0 &&
          carousel.map((e) => (
            e.images.map ((img,index)=>(
              <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                width="100%"
                height="auto"
                src={img}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>{e.title}</h3>
                <p>{e.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
            ))

          ))}
      </Carousel>
    </div>   
    )
}
