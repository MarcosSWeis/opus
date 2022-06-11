import { useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHabitantsPerFloor } from "../../redux/actions";
import CardHabitants from "./CardHabitants";
import CSS from "./dashboard.module.css";
import GraphicBarChartsFloors from "./GraphicBarChartsFloors";

export default function Dashboard() {
  const habitansFloor = useSelector((state) => state.habitantsFloor);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getHabitantsPerFloor());
  }, []);
  console.log(habitansFloor);
  return (
    <div>
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
      <div className=" d-flex justify-content-center">
        {habitansFloor.length > 0
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
      <div className=" d-flex justify-content-center ">
        {habitansFloor.length > 0
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
