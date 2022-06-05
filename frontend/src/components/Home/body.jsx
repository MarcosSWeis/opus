import React from "react";
import tenis from "../../img/4.png";
import card2 from "../../img/card2.png";
import card3 from "../../img/card3.png";
import rectangle from "../../img/Rectangle 108.png";
import Main from "../../img/main-img.png";
import { getImageBody } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-bootstrap";
import "./carrusel.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./body.css";

export default function Body() {
  const imgBody = useSelector((state) => state.imgBody);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getImageBody());
  }, []);
  console.log(imgBody);

  return (
    <>
      <section className="body mt-4">
        <div>
          <img className="rectangle" src={rectangle} alt="" />
        </div>

        <div className="container">
          <div className="row">
            <OwlCarousel items={2} dots={false} loop>
              {imgBody.length > 0 &&
                imgBody.map((e, index) => (
                  <div className="card" key={index}>
                    {
                      <Carousel>
                        {e.images.map((img, index) => (
                          <Carousel.Item className="carrusel-body" key={index}>
                            <img
                              src={img}
                              className="d-block w-100"
                              alt="First slide"
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    }
                    <h2>{e.space}</h2>
                  </div>
                ))}
            </OwlCarousel>
            {/*             <div className="card">
              <img src={tenis} className="card-img-top" alt="Dwayne Johnson" />
              <div className="card-body">
                <h5 className="card-title"></h5>
                <div className="badges mb-2"></div>
                <p className="card-text">
                  En nuestros espacios disfrutarás de un ambiente cálido y
                  tranquilo
                </p>
              </div>
            </div>


            <div className="card">
              <img src={card2} className="card-img-top" alt="Dwayne Johnson" />
              <div className="card-body">
                <p className="card-text">
                  Vive la experiencia de disfrutar con tus mascotas al aire
                  libre.
                </p>
              </div>
            </div>


            <div className="card">
              <img src={card3} className="card-img-top" alt="Dwayne Johnson" />
              <div className="card-body">
                <p className="card-text">
                  En nuestros espacios disfrutarás de un ambiente cálido y
                  tranquilo
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <section className="description flex">
        <div className="main-pic text-start">
          <img src={Main} className="rounded" alt="..." />
        </div>

        <p className="lead ">
          OPUS tiene el desarrollo más exclusivo de Buenos Aires en Argentina,
          diseñado y ubicado al Sur la zona con mayor plusvalía en la Ciudad,
          cerca de Centros comerciales, escuelas, hospitales y a tan sólo 15
          minutos del Aeropuerto Internacional de Buenos Aires. Con excelentes
          amenidades como Caseta de Seguridad con Pluma de Acceso, Áreas de usos
          múltiples con Alberca, Gimnasio, Amplias áreas verdes con Jardines y
          Juegos infantiles, el Hogar que tú y tu familia se merecen.
        </p>
      </section>
    </>
  );
}
