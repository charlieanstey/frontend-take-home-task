import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const Shift = ({
  practiceName,
  startDatetime,
  endDatetime,
  hourlyRate,
  applicationsCount,
}) => (
  <>
    <ul className="border border-dark-12 rounded mb-8 p-4 text-dark">
      <li>
        <strong>Practice name: </strong>
        {practiceName}
      </li>
      <li>
        <strong>Date: </strong>
        <Moment date={startDatetime} format="DD/MM/YYYY"></Moment>
      </li>
      <li>
        <strong>Start/End times: </strong>
        <Moment date={startDatetime} format="HH:mm" />
        {" to "}
        <Moment date={endDatetime} format="HH:mm" />
      </li>
      <li>
        <strong>Hourly rate of shift: </strong>
        {hourlyRate}
      </li>
      <li>
        <strong>Applications made: </strong>
        {applicationsCount}
      </li>
    </ul>
  </>
);

Shift.propTypes = {
  practiceName: PropTypes.string.isRequired,
  startDatetime: PropTypes.string.isRequired,
  endDatetime: PropTypes.string.isRequired,
  hourlyRate: PropTypes.number.isRequired,
  applicationsCount: PropTypes.number.isRequired,
};

export default Shift;
