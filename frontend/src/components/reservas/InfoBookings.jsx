import CSS from "./infoBookings.module.css";
import RowBookings from "./RowBookings";
import Skeleton from "react-loading-skeleton";

export default function InfoBookings({ bookingsDb }) {
  console.log(Object.keys(bookingsDb).length == 0);
  return (
    <div className={`${CSS.containerInfoBookings} mt-4 mx-2 `}>
      <div className={`${CSS.subContainerInfoBookings} `}>
        <h1 className="w-50 m-auto text-center ">Reservas</h1>
        <table class="table">
          <thead></thead>
          <thead>
            <tr>
              <th colSpan={2} className="text-center">
                Horas
              </th>
              <th scope="col" className="text-center">
                Horas ocupadas
              </th>
              <th scope="col" className="text-center">
                Usuario
              </th>
              <th scope="col" className="text-center">
                Espacio
              </th>
            </tr>
            <tr>
              <th scope="col" className="text-center">
                Inicio
              </th>
              <th scope="col" className="text-center">
                Fin
              </th>
            </tr>
          </thead>
          {Object.keys(bookingsDb).length == 0
            ? rowsSkeletonLoader()
            : bookingsDb.data.map((booking) => (
                <RowBookings
                  key={booking.id}
                  initial_hour={booking.initial_hour}
                  end_hour={booking.end_hour}
                  first_name={booking.user.first_name}
                  last_name={booking.user.last_name}
                  social_space={booking.social_space.space}
                />
              ))}
        </table>
      </div>
    </div>
  );
}

function rowsSkeletonLoader() {
  <Skeleton />;
}
