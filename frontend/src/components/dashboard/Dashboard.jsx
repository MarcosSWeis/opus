import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHabitantsPerFloor } from "../../redux/actions";
import CardHabitants from "./CardHabitants";
import CSS from "./dashboard.module.css";
import $ from "jquery";
import GraphicBarChartsFloors from "./GraphicBarChartsFloors";
import { useState } from "react";

export default function Dashboard() {
  const habitansFloor = useSelector((state) => state.habitantsFloor);
  const dispatch = useDispatch();
  const [width, setWidth] = useState(window.screen.width);
  $(window).resize(function () {
    setWidth($(window).width());
  });
  useEffect(() => {
    dispatch(getHabitantsPerFloor());
  }, [width]);
  console.log(habitansFloor);
  return (
    <div className={`w-100`}>
      <section className={`w-100 ${CSS.secctionDesciption} mt-2 p-3 `}>
        <h1 className={`${CSS.textOpus} m-auto`}>Opus</h1>
        <p className={`${CSS.textOpus} m-auto`}>
          Somos una empresa de condominio, hace más de ochenta años trabajamos
          brindando experiencias inolvidables. Nuestro fin como organización es
          lograr que nuestras familias sientan que Opus es el mejor lugar para
          vivir. Por ello, nos esforzamos por cumplir cada deseo y contamos con
          la infraestructura y el equipamiento necesario para satisfacer sus
          diversas necesidades.
        </p>
      </section>
      <div className={`${CSS.d_flex_block} justify-content-around `}>
        {habitansFloor.length > 0 && width < 1050
          ? habitansFloor.map((hxFloor) =>
              hxFloor.floor <= 2 ? (
                <div>
                  <CardHabitants
                    key={hxFloor.floor}
                    floor={hxFloor.floor}
                    habitantsFloor={hxFloor.habitantsfloor}
                  />
                </div>
              ) : (
                ""
              )
            )
          : ""}
      </div>
      <div className={`${CSS.d_flex_block} justify-content-around `}>
        {habitansFloor.length > 0 && width < 1050
          ? habitansFloor.map((hxFloor) =>
              hxFloor.floor > 2 && hxFloor.floor <= 4 ? (
                <div>
                  <CardHabitants
                    key={hxFloor.floor}
                    floor={hxFloor.floor}
                    habitantsFloor={hxFloor.habitantsfloor}
                  />
                </div>
              ) : (
                ""
              )
            )
          : ""}
      </div>
      <div className={`${CSS.d_flex_block} justify-content-around `}>
        {habitansFloor.length > 0 && width < 1050
          ? habitansFloor.map((hxFloor) =>
              hxFloor.floor > 4 && hxFloor.floor <= 6 ? (
                <div>
                  <CardHabitants
                    key={hxFloor.floor}
                    floor={hxFloor.floor}
                    habitantsFloor={hxFloor.habitantsfloor}
                  />
                </div>
              ) : (
                ""
              )
            )
          : ""}
      </div>
      <div className={`${CSS.d_flex_block} justify-content-around `}>
        {habitansFloor.length > 0 && width < 1050
          ? habitansFloor.map((hxFloor) =>
              hxFloor.floor > 6 && hxFloor.floor <= 8 ? (
                <div>
                  <CardHabitants
                    key={hxFloor.floor}
                    floor={hxFloor.floor}
                    habitantsFloor={hxFloor.habitantsfloor}
                  />
                </div>
              ) : (
                ""
              )
            )
          : ""}
      </div>
      <div className={`${CSS.d_flex_block} justify-content-around `}>
        {habitansFloor.length > 0 && width < 1050
          ? habitansFloor.map((hxFloor) =>
              hxFloor.floor > 8 && hxFloor.floor <= 10 ? (
                <div>
                  <CardHabitants
                    key={hxFloor.floor}
                    floor={hxFloor.floor}
                    habitantsFloor={hxFloor.habitantsfloor}
                  />
                </div>
              ) : (
                ""
              )
            )
          : ""}
      </div>
      {/* DESKTOP */}
      <div className=" d-flex justify-content-around">
        {habitansFloor.length > 0 && width > 1050
          ? habitansFloor.map((hxFloor) =>
              hxFloor.floor <= 5 ? (
                <CardHabitants
                  key={hxFloor.floor}
                  floor={hxFloor.floor}
                  habitantsFloor={hxFloor.habitantsfloor}
                />
              ) : (
                ""
              )
            )
          : ""}
      </div>
      <div className=" d-flex justify-content-around">
        {habitansFloor.length > 0 && width > 1050
          ? habitansFloor.map((hxFloor) =>
              hxFloor.floor > 5 ? (
                <CardHabitants
                  key={hxFloor.floor}
                  floor={hxFloor.floor}
                  habitantsFloor={hxFloor.habitantsfloor}
                />
              ) : (
                ""
              )
            )
          : ""}
      </div>
      <div className={`${CSS.max_width_chart} m-auto`}>
        {habitansFloor.length > 0 ? (
          <GraphicBarChartsFloors barChartData={habitansFloor} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
