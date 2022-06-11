import CSS from "./card_habitants.module.css";
export default function CardHabitants({ floor, habitantsFloor }) {
  return (
    <div className={`${CSS.containerCard}  mt-2 mx-2  p-2`}>
      <h2 className={`${CSS.numberHabitants} mt-2`}>{habitantsFloor}</h2>
      <p className={`${CSS.habitantsText}`}>habitantes</p>
      <h6 className={`${CSS.numberFloor}`}>{floor}° piso</h6>
    </div>
  );
}
