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
      <div>
      <Carousel fade >
        {carousel.length > 0 &&
          carousel.map((e) => (
            e.images.map ((img,index)=>(
              <Carousel.Item interval={2000} key={index}>
              <img
                className="d-block w-100"
                width="100%"
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
