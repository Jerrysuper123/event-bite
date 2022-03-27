import React, { useState } from "react";

export default function DisplayRealTime() {
  const [currentDay, setCurrentDay] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [fullDate, setFullDate] = useState("");
  const weekday = new Array(7);
  weekday[0] = "SUN";
  weekday[1] = "MON";
  weekday[2] = "TUE";
  weekday[3] = "WED";
  weekday[4] = "THU";
  weekday[5] = "FRI";
  weekday[6] = "SAT";

  const month = new Array();
  month[0] = "JAN";
  month[1] = "FEB";
  month[2] = "MAR";
  month[3] = "APR";
  month[4] = "May";
  month[5] = "JUN";
  month[6] = "JUL";
  month[7] = "AUG";
  month[8] = "SEP";
  month[9] = "OCT";
  month[10] = "NOV";
  month[11] = "DEC";

  const getCurrentDateTime = () => {
    let currentDateTime = new Date();

    let hours = currentDateTime.getHours();
    let minutes = currentDateTime.getMinutes();
    //This line of code is just a way to properly organize our minutes
    //because we don’t want to get 0,1,3 etc as minutes instead we want minutes as 00, 01, 03
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let AMPM = hours >= 12 ? "PM" : "AM";
    let currentTime = `${hours}:${minutes}${AMPM}`;
    setCurrentTime(currentTime);
    /*
  currentTimeDate.getDay() gives us number value from 0-6, 
  for example if current day is Sunday then currentTimeDate.getDay() 
  will give us 0, if current day is Monday then currentTimeDate.getDay() 
  will give us number 1 and so on for the rest of the days.
  */
    let currentDay = weekday[currentDateTime.getDay()];
    setCurrentDay(currentDay);
    let currentDate = currentDateTime.getDate();
    let currentMonth = month[currentDateTime.getMonth()];
    var CurrentYear = currentDateTime.getFullYear();
    var fullDate = `${currentDate} ${currentMonth} ${CurrentYear}`;
    setFullDate(fullDate);
  };

  setInterval(getCurrentDateTime, 500);

  return (
    <div>
      <p id="time">{currentTime}</p>
      <p id="day">{currentDay}</p>
      <p id="date">{fullDate}</p>
    </div>
  );
}
