import { computed } from "easy-peasy";

// This would otherwise be initialised from an auth session
const initialModel = [
  {
    id: "1235",
    status: "POSTED",
    startDatetime: "2018-05-19T08:30:00+00:00",
    endDatetime: "2018-05-19T16:15:00+00:00",
    applicationIds: [],
    practice: { id: "1235", name: "Manchester Hospital" },
    locum: null,
    hourlyRate: 85,
    staffType: "gp",
    staffTypeId: "1",
  },
];

const sessionsModel = {
  items: initialModel,
  availableShifts: computed((state, storeState) =>
    state.items
      // .filter(
      //   (s) =>
      //     s.status === "POSTED" &&
      //     s.locum === null &&
      //     s.staffType === storeState.user.staffType
      // )
      .map(({ id, hourlyRate, ...rest }) => ({
        id,
        practiceName: rest.practice.name,
        hourlyRate,
        applicationsCount: rest.applicationIds.length,
      }))
  ),
};

export default sessionsModel;
