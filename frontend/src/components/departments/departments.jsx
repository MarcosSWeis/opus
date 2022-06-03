import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApartament } from "../../redux/actions";
import s from "./departments.module.css";

export default function Departments() {
  const dispatch = useDispatch();
  //recupero la informacion del estado que lo modifico la accion
  const departFilter = useSelector((state) => {
    return state.departFilter;
  });
  useEffect(() => {
    //hago al accion
    dispatch(
      getApartament({
        rooms: 3,
        //minimo  y depues maximo
        price: [50000, Infinity],
      })
    );
  }, []);
  console.log(departFilter);
  return (

    <div>
      <h1>Departamentos</h1>
      <div className={s.container}>
          {departFilter.map((departament) => (
            <div  className= {s.card} key={departament.id}>             
              <img src={departament.image[0]}/>
              <div className={s.body} >
                <div className={s.datos} >
                <h3>$ {departament.price}</h3>
                <h3>{departament.measure} m2</h3>
                </div>
                <p>{departament.description}</p>
              </div>
            </div>
          ))}    
      </div>
    </div>
  );
}
