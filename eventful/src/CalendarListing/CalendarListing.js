import React from "react";
//import calendar and its styles
import Kalend, { CalendarView } from "kalend";
import "kalend/dist/styles/index.css";

export default function CalendarListing(props) {
  let events = [
    {
      id: 1,
      // ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
      //Singapore time is GTM+8, if you want to set time at 18:00 hour, then set it as 10:00 hour (after minus 8 hours)
      startAt: "2022-03-19T10:00:00.000Z",
      endAt: "2022-03-19T11:00:00.000Z",
      // According to your needs, you can set timezone for each event and also set default timezone with "timezone" prop in IANA format.
      //If you don't provide timezone prop, your system default timezone will be used.
      // You can keep other event properties, those will be ignored.
      // timezoneStartAt: "Asia/Singapore", // optional
      summary: "trent global",
      color: "blue",
      calendarID: "work",
    },
    {
      id: 2,
      // ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
      //Singapore time is GTM+8, if you want to set time at 18:00 hour, then set it as 10:00 hour (after minus 8 hours)
      startAt: "2022-03-19T08:00:00.000Z",
      endAt: "2022-03-19T09:00:00.000Z",
      // According to your needs, you can set timezone for each event and also set default timezone with "timezone" prop in IANA format.
      //If you don't provide timezone prop, your system default timezone will be used.
      // You can keep other event properties, those will be ignored.
      // timezoneStartAt: "Asia/Singapore", // optional
      summary: "H&M",
      color: "red",
      calendarID: "work",
    },
  ];

  const onEventClick = () => {
    console.log("clicked event");
  };

  const onNewEventClick = () => {
    console.log("clicked new event");
  };

  const onSelectView = () => {
    console.log("clicked select view");
  };

  const selectedView = () => {
    console.log("clicked  selected view");
  };

  const onPageChange = () => {
    console.log("clicked change page");
  };

  return (
    <Kalend
      // onEventClick={onEventClick}
      // onNewEventClick={onNewEventClick}
      events={events}
      initialDate={new Date().toISOString()}
      hourHeight={60}
      initialView={CalendarView.WEEK}
      disabledViews={[CalendarView.AGENDA]}
      // onSelectView={onSelectView}
      // selectedView={selectedView}
      // onPageChange={onPageChange}
      timeFormat={"24"}
      weekDayStart={"Monday"}
      calendarIDsHidden={["work"]}
      language={"en"}
    />
  );
}
