import React from "react";
import "./ScheduleAndRegister.css";
import Registration from "../Registration/Registration";

const NewsSchedule = () => {
  return (
    <div id="NewsSchedule">
      <div id="schedule">
        <div className="NewsSchedule-header">
          <h1>Schedule</h1>
        </div>
        <div className="NewsSchedule-body">
          <ul>
            <li>Yet to be decided</li>
          </ul>
        </div>
      </div>
      <Registration />
    </div>
  );
};

export default NewsSchedule;
