import $ from "jquery";
import { useEffect, useState } from "react";
import CSS from "./calendar.module.css";
export default function Calendar({
  year,
  month,
  currentDay,
  setYear,
  setMonth,
  dataDay,
  setDataDay,
  contDate,
  handleChangeCalendar,
  selectDay,
  setSelectDay,
}) {
  function addDate(month, year) {
    const monthNames = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ];
    const nameDays = [
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
      "Domingo",
    ];
    function daysInMonth(month, year) {
      //del mes que me pasen y el año que me pasen obtengo cuantos dias tiene el mes
      return new Date(year, month, 0).getDate();
    }
    const daysCalendar = {};
    let daysFirst = [];
    let daysSecond = [];
    let daysThird = [];
    let daysFourth = [];
    let daysFifth = [];

    let today = new Date(),
      currentYear = year, //devuelve el año
      monthString = monthNames[month], //devuelve el mes string
      day = today.getDate(), //devuelve el dia
      totalDays = daysInMonth(month + 1, currentYear), //devuelve cantidad de dias del mes en ese año
      hours = today.getHours(), //Retorna la hora (0–23)
      minutes = today.getMinutes(); //Retorna los minutos (0–59)
    console.log(month, "month");
    console.log(year, "year");

    for (let i = 0; i < totalDays; i++) {
      if (i < 7) {
        daysFirst.push(i + 1);
      }
      if (i >= 7 && i < 14) {
        daysSecond.push(i + 1);
      }
      if (i >= 14 && i < 21) {
        daysThird.push(i + 1);
      }
      if (i >= 21 && i < 28) {
        daysFourth.push(i + 1);
      }
      if (i > 28 && i <= totalDays) {
        daysFifth.push(i + 1);
      }
    }
    for (let i = 0; i < 7; i++) {
      if (28 - totalDays + 7 < 7) {
        daysFifth.push(i + 1);
      }
    }
    daysCalendar.first = daysFirst;
    daysCalendar.second = daysSecond;
    daysCalendar.third = daysThird;
    daysCalendar.fourth = daysFourth;
    daysCalendar.fifth = daysFifth;
    daysCalendar.day = day;
    daysCalendar.month = month + 1;
    daysCalendar.currentYear = currentYear;
    daysCalendar.monthString = monthString;
    return daysCalendar;
  }

  useEffect(() => {
    setDataDay(addDate(month, year));
  }, [month, year]);

  function handleNextMonthAndYear() {
    setSelectDay(0);
    if (month < 11) {
      setMonth(month + 1);
    } else {
      setMonth(0);
      setYear(year + 1);
    }
  }
  function handlePrevMonthAndYear() {
    setSelectDay(0);
    if (month > 0) {
      setMonth(month - 1);
    } else {
      setMonth(11);
      setYear(year - 1);
    }
  }

  return (
    <div>
      <div className={`${CSS.container}`}>
        <button
          type="button"
          class="btn btn-dark mx-2"
          onClick={handlePrevMonthAndYear}
        >
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <div className={`${CSS.calendar}`}>
          <div className={`${CSS.front}`}>
            <div className={`${CSS.current_date} `}>
              <h1> {dataDay ? dataDay.day : ""}th</h1>
              <h1 onClick={handleChangeCalendar}>
                {dataDay ? `${dataDay.monthString} ${dataDay.currentYear}` : ""}
              </h1>
            </div>

            <div className={`${CSS.current_month}`}>
              <ul className={`${CSS.week_days}`}>
                <li>LUN</li>
                <li>MAR</li>
                <li>MIR</li>
                <li>JUE</li>
                <li>VIE</li>
                <li>SAB</li>
                <li>DOM</li>
              </ul>

              <div className={`${CSS.weeks} weeks`}>
                <div class="first">
                  {dataDay
                    ? dataDay.first.map((day) =>
                        day == selectDay ? (
                          <span
                            key={day + "calendar"}
                            onClick={handleChangeCalendar}
                            className="text-primary"
                          >
                            {day}
                          </span>
                        ) : (
                          <span
                            key={day + "calendar"}
                            onClick={handleChangeCalendar}
                          >
                            {day}
                          </span>
                        )
                      )
                    : ""}
                </div>
                <div class="second">
                  {dataDay
                    ? dataDay.second.map((day) =>
                        day == selectDay ? (
                          <span
                            key={day + "calendar"}
                            onClick={handleChangeCalendar}
                            className="text-primary"
                          >
                            {day}
                          </span>
                        ) : (
                          <span
                            key={day + "calendar"}
                            onClick={handleChangeCalendar}
                          >
                            {day}
                          </span>
                        )
                      )
                    : ""}
                </div>
                <div class="third">
                  {dataDay
                    ? dataDay.third.map((day) =>
                        day == selectDay ? (
                          <span
                            key={day + "calendar"}
                            onClick={handleChangeCalendar}
                            className="text-primary"
                          >
                            {day}
                          </span>
                        ) : (
                          <span
                            key={day + "calendar"}
                            onClick={handleChangeCalendar}
                          >
                            {day}
                          </span>
                        )
                      )
                    : ""}
                </div>
                <div class="fourth">
                  {dataDay
                    ? dataDay.fourth.map((day) =>
                        day == selectDay ? (
                          <span
                            key={day + "calendar"}
                            onClick={handleChangeCalendar}
                            className="text-primary"
                          >
                            {day}
                          </span>
                        ) : (
                          <span
                            key={day + "calendar"}
                            onClick={handleChangeCalendar}
                          >
                            {day}
                          </span>
                        )
                      )
                    : ""}
                </div>
                <div class="fifth">
                  {dataDay
                    ? dataDay.fifth.map((day) =>
                        day <= 8 ? (
                          <span
                            key={day + "calendar"}
                            className="text-dark"
                            /*  onClick={handleChangeCalendar} */
                          >
                            {day}
                          </span>
                        ) : day == selectDay ? (
                          <span
                            className="text-primary"
                            key={day + "calendar"}
                            onClick={handleChangeCalendar}
                          >
                            {day}
                          </span>
                        ) : (
                          <span
                            key={day + "calendar"}
                            onClick={handleChangeCalendar}
                          >
                            {day}
                          </span>
                        )
                      )
                    : ""}
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          class="btn btn-dark mx-2"
          onClick={handleNextMonthAndYear}
        >
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
    </div>
  );
}
