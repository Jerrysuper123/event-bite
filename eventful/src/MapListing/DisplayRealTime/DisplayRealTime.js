//we are not using this function, but keep it here
import React, { useState } from "react";
import "./style.css";
export default function DisplayRealTime() {
  const [currentDay, setCurrentDay] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [fullDate, setFullDate] = useState("");
  const weekday = new Array(7);
  weekday[0] = "Sun";
  weekday[1] = "Mon";
  weekday[2] = "Tue";
  weekday[3] = "Wed";
  weekday[4] = "Thu";
  weekday[5] = "Fri";
  weekday[6] = "Sat";

  const month = new Array();
  month[0] = "Jan";
  month[1] = "Feb";
  month[2] = "Mar";
  month[3] = "Apr";
  month[4] = "May";
  month[5] = "Jun";
  month[6] = "Jul";
  month[7] = "Aug";
  month[8] = "Sep";
  month[9] = "Oct";
  month[10] = "Nov";
  month[11] = "Dec";

  const getCurrentDateTime = () => {
    let currentDateTime = new Date();

    let hours = currentDateTime.getHours();
    let minutes = currentDateTime.getMinutes();
    //This line of code is just a way to properly organize our minutes
    //because we don’t want to get 0,1,3 etc as minutes instead we want minutes as 00, 01, 03
    minutes = minutes < 10 ? "0" + minutes : minutes;
    let AMPM = hours >= 12 ? "pm" : "am";
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
    <div className="realTimeClock">
      <h2 id="time" className="mt-4">
        {currentTime}
      </h2>
      <div id="date" className="text-center">
        {currentDay} {fullDate}
      </div>
    </div>
  );
}
