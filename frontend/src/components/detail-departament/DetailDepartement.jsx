import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { getDepartamentId } from "../../redux/actions";
export default function DetailDepartament() {
  const { id } = useParams();
  console.log(id, "id");
  const detailDepartament = useSelector((state) => state.departamentDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDepartamentId({ id }));
  }, []);
  console.log(detailDepartament);

  return (
    <>
      <section className="img-depto">
        <main class="main" id="main">
          <div
            id="carousel"
            class="carousel slide carousel-fade"
            data-bs-ride="carousel"
            data-pause="false"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div>
                  <Carousel fade>
                    {detailDepartament &&
                      detailDepartament.image.map((img, index) => (
                        <Carousel.Item interval={2000} key={index}>
                          <img
                            className="d-block w-100"
                            width="100%"
                            src={img}
                            alt="First slide"
                          />
                        </Carousel.Item>
                      ))}
                  </Carousel>
                </div>
              </div>

              <div class="overlay">
                <div class="container">
                  <div class="row align-items-center">
                    <div className="title-carousel text-start"></div>
                    <img src={""} class="img-fluid" alt="..."></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      <section className="body-detalles p-3">
        <div className="button-text">
          {detailDepartament && (
            <button type="button" class="precio btn btn-danger mt-2 mb-2">
              Departamento · {detailDepartament.measure} m² USD{" "}
              {detailDepartament.price}
            </button>
          )}
          <form action="">
            <div class="card1">
              <div class="card-body">
                <div class="row g-3">
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      aria-label="First name"
                    />
                  </div>
                  <div class="col">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      aria-label="Last name"
                    />
                  </div>
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div class="mb-3">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Deja tu mensaje
                  </label>
                  <textarea
                    class="textarea form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="button-text">
                  <button type="button" class="precio btn btn-danger">
                    Contactar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>

        {detailDepartament && (
          <p className="text-detalles">{detailDepartament.description}</p>
        )}
      </section>
    </>
  );
}
