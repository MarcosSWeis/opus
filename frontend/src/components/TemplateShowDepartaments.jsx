import stylesShowDepartament from "./showDepartaments.module.css";
export default function TemplateShowDepartaments({
  price,
  images,
  description,
  measure,
}) {
  let limitDescription = description;
  if (description.length > 200) {
    limitDescription = limitDescription.substring(0, 200);
  }
  return (
    <section className="mt-4">
      <div
        className={`w-75 p-2 mb-3 m-auto ${stylesShowDepartament.col_3} ${stylesShowDepartament.d_flex} ${stylesShowDepartament.container_departaments} ${stylesShowDepartament.minHeightCard}`}
      >
        <div className={`${stylesShowDepartament.col_4} m-auto`}>
          <img
            className={`w-100 ${stylesShowDepartament.container_departaments}`}
            src={`${images[0]}`}
            alt=""
          />
        </div>
        <div
          className={`${stylesShowDepartament.col_5} ${stylesShowDepartament.ml_5}`}
        >
          <div className="d-flex">
            <h3>$ {price}</h3> | <h3> {measure} m²</h3>
          </div>
          <h4>Lorem, ipsum dolor.</h4>
          <p>{limitDescription} ...</p>
        </div>
        <div
          className={`${stylesShowDepartament.col_2} p-3 ${stylesShowDepartament.bgcRoomServices}`}
        >
          <div className="d-flex justify-content-around">
            <ion-icon name="wifi-outline"></ion-icon>
            <ion-icon name="videocam-outline"></ion-icon>
            <ion-icon name="person-outline"></ion-icon>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
