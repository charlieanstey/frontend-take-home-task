import React from "react";
import { render } from "@testing-library/react";

import Shift from "../Shift";

const data = {
  startDatetime: "2018-05-19T08:30:00+00:00",
  endDatetime: "2018-05-19T16:15:00+00:00",
  applicationCount: 3,
  practiceName: "Manchester Hospital",
  hourlyRate: 85,
};

test("<Shift />", () => {
  render(<Shift {...data} />);
});
