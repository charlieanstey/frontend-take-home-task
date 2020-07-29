import React from "react";
import PropTypes from "prop-types";

const Shift = ({
  practiceName,
  date,
  startTime,
  endTime,
  hourlyRate,
  applicationsCount,
}) => (
  <>
    <ul>
      <li>
        <strong>Practice name: </strong>
        {practiceName}
      </li>
      <li>
        <strong>Date: </strong>
        {}
      </li>
      <li>
        <strong>Start/End times: </strong>
        {}
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
  id: PropTypes.string.isRequired,
  practiceName: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  startTime: PropTypes.string.isRequired,
  endTime: PropTypes.string.isRequired,
  hourlyRate: PropTypes.number.isRequired,
  applicationsCount: PropTypes.number.isRequired,
};

export default Shift;
