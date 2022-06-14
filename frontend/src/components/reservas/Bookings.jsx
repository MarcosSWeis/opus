import { useEffect, useState } from "react";
import Calendar from "./Calendar";
import { useDispatch, useSelector } from "react-redux";
import { getBookingForThisDay, getSocialSpaces } from "../../redux/actions";
import OptionsSocialSpace from "./OptionsSocialSpace";
import InfoBookings from "./InfoBookings";
import FreeHours from "./FreeHours";
import $ from "jquery";

export default function Bookings() {
  const [dataDay, setDataDay] = useState(null);
  const [contDate, setContDate] = useState(1);
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const [selectDay, setSelectDay] = useState(0);
  const [bookingDate, setBookingDate] = useState(null);
  const [selectedSpace, setSelectedSpace] = useState(null);
  const [show, setShow] = useState(false);
  const [selectedHours, setSelectedHours] = useState("");

  const dispatch = useDispatch();
  const bookingsDb = useSelector((state) => state.bookingDate);
  const socialSpace = useSelector((state) => state.socialsSpace);

  function handlerSpace(event) {
    console.log(event.target.value);
    setSelectedSpace(event.target.value);
  }

  function handleChangeCalendar(event) {
    event.preventDefault();
    setSelectDay(event.target.textContent);
    //en la db esta año-mes-dia hh:mm:ss
    setBookingDate(
      `${dataDay.currentYear}-${dataDay.month}-${event.target.textContent}`
    );
  }

  function handlerSeeBookings(event) {
    event.preventDefault();
    dispatch(getBookingForThisDay({ bookingDate, selectedSpace }));
    if (show) {
      setShow(false);
    }
    if (!show) {
      setShow(true);
    }
  }
  function handlerChangesHours(event) {
    setSelectedHours({
      ...selectedHours,
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name, event.target.value);
    console.log(event);
  }
  function handlerBooking() {}
  console.log(bookingsDb);
  return (
    <div>
      <form action="">
        <OptionsSocialSpace
          key={"OptionsSocialSpace"}
          handlerSpace={handlerSpace}
          socialSpace={socialSpace}
        />
        <div>
          <Calendar
            key={"calendar"}
            year={year}
            month={month}
            currentDay={currentDay}
            setYear={setYear}
            setMonth={setMonth}
            dataDay={dataDay}
            setDataDay={setDataDay}
            contDate={contDate}
            handleChangeCalendar={handleChangeCalendar}
            selectDay={selectDay}
            setSelectDay={setSelectDay}
          />

          <div className="w-50 m-auto d-flex justify-content-around mt-3">
            <button
              type="button"
              class="btn btn-dark mx-2"
              onClick={handlerSeeBookings}
            >
              Ver Turnos
            </button>
            <button
              type="submit"
              class="btn btn-dark mx-2"
              onClick={handlerBooking}
            >
              reserver turno
            </button>
          </div>
        </div>
        {/*  {show && Object.keys(bookingsDb).length != 0 && (
          <div className="m-auto w-25 mt-3" id="freeHours">
            <FreeHours
              bookingsDb={bookingsDb}
              handlerChangesHours={handlerChangesHours}
              selectedHours={selectedHours}
            />
          </div>
        )} */}
      </form>
      {/*  <div className="w-75 m-auto">
        <InfoBookings bookingsDb={bookingsDb} />
      </div> */}
    </div>
  );
}
