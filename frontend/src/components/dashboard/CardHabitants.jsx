import CSS from "./card_habitants.module.css";
import icon_user from "../../img/dashboard/icon_users.svg";
export default function CardHabitants({ floor, habitantsFloor }) {
  return (
    <div className={`${CSS.containerCard}  mt-2 mx-2  p-1 d-flex `}>
      <div className={`d-block ${CSS.ml_05}`}>
        <h2 className={`${CSS.numberHabitants} mt-2`}>{habitantsFloor}</h2>
        <p className={`${CSS.habitantsText}`}>habitantes</p>
        <h6 className={`${CSS.numberFloor}`}>{floor}° piso</h6>
      </div>
      <img
        src={icon_user}
        alt=""
        className={`pb-3 pt-3 ${CSS.ml_1} ${CSS.pl_1}`}
      />
    </div>
  );
}
