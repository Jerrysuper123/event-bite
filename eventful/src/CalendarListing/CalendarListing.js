import React from "react";
//import calendar and its styles
import Kalend, { CalendarView } from "kalend";
import "kalend/dist/styles/index.css";

export default function CalendarListing(props) {
  let events = props.data.map((e) => {
    return {
      id: e._id,
      startAt: e.startDateTime,
      endAt: e.endDateTime,
      summary: `${e.organizer} - ${e.title}`,
      // make this color dynamic to color brand chosen and show on card
      color: e.brandColor,
    };
  });

  let eventsSample = [
    {
      id: 1,
      // ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
      //Singapore time is GTM+8, if you want to set time at 18:00 hour, then set it as 10:00 hour (after minus 8 hours)
      //below is GTM time, need to mius 8 hours from Singapore time
      startAt: "2022-03-21T10:00",
      endAt: "2022-03-21T10:22",
      // According to your needs, you can set timezone for each event and also set default timezone with "timezone" prop in IANA format.
      //If you don't provide timezone prop, your system default timezone will be used.
      // You can keep other event properties, those will be ignored.
      // timezoneStartAt: "Asia/Singapore", // optional
      summary: "trent global",
      color: "blue",
      // calendarID: "work",
    },
    {
      id: 2,
      // ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
      //Singapore time is GTM+8, if you want to set time at 18:00 hour, then set it as 10:00 hour (after minus 8 hours)
      startAt: "2022-03-21T08:00",
      endAt: "2022-03-21T09:00",
      // According to your needs, you can set timezone for each event and also set default timezone with "timezone" prop in IANA format.
      //If you don't provide timezone prop, your system default timezone will be used.
      // You can keep other event properties, those will be ignored.
      // timezoneStartAt: "Asia/Singapore", // optional
      summary: "H&M",
      color: "red",
      // calendarID: "work",
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
    <div
      style={{
        display: props.display,
      }}
    >
      <Kalend
        // onEventClick={onEventClick}
        // onNewEventClick={onNewEventClick}
        events={events}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.DAY}
        disabledViews={[CalendarView.AGENDA]}
        // onSelectView={onSelectView}
        // selectedView={selectedView}
        // onPageChange={onPageChange}
        timeFormat={"24"}
        weekDayStart={"Monday"}
        calendarIDsHidden={["work"]}
        language={"en"}
      />
      <div className="subText">
        credit:{" "}
        <a href="https://github.com/nibdo/kalend" target="_blank">
          Kalend
        </a>
      </div>
    </div>
  );
}
