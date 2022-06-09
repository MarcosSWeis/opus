import CSS from "./infoBookings.module.css";

export default function FreeHours({
  bookingsDb,
  handlerChangesHours,
  selectedHours,
}) {
  const bookings = bookingsDb.data;

  let end_hour, initial_hour;
  for (let i = 0; i < bookings.length; i++) {
    //si hay horas reservadas
    if (bookings.length != 0) {
      initial_hour = bookings[i].initial_hour;
      end_hour = bookings[i].end_hour;
      //fuera del rango de esas horas
      console.log(
        selectedHours.selectedIniHs > initial_hour &&
          selectedHours.selectedIniHs < end_hour,
        `${selectedHours.selectedIniHs} > ${initial_hour} && ${selectedHours.selectedIniHs} < ${end_hour} > `
      );
      if (
        selectedHours.selectedIniHs > initial_hour &&
        selectedHours.selectedIniHs < end_hour
      ) {
        alert("No puede reservar una hora que ya esta reservada");
      }
    }
  }
  return (
    <div>
      <h5 className="text-center">Horas para reservar</h5>
      <form action="">
        <div className="d-flex ">
          <div class="mb-3 mx-2 text-center">
            <label for="selectedIniHs" class="form-label text-center">
              Hora inicial
            </label>
            <input
              name="selectedIniHs"
              type="number"
              class="form-control"
              id="selectedIniHs"
              placeholder="Inicial"
              onChange={handlerChangesHours}
            />
          </div>
          <div class="mb-3 text-center">
            <label for="endHours" class="form-label">
              Hora final
            </label>
            <input
              name="selectedEndHs"
              type="number"
              class="form-control"
              id="endHours"
              placeholder="Final"
              onChange={handlerChangesHours}
            />
          </div>
        </div>
        <div className=" w-50 m-auto">
          <button type="submit" class="btn btn-dark ">
            Verificar Hora
          </button>
        </div>
      </form>
    </div>
  );
}
