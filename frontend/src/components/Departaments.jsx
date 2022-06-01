import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApartament } from "../redux/actions";

export default function Departaments() {
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
    <h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, hic, eaque
      velit officiis cumque modi porro eum enim blanditiis doloribus molestias
      reprehenderit nemo, maiores expedita neque minus consectetur sint
      laudantium!
    </h1>
    // <ul>
    //   {departFilter.map((depa) => (
    //     <li>{depa}</li>
    //   ))}
    // </ul>
  );
}
