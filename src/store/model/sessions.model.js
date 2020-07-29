import { action, computed, thunk } from "easy-peasy";
import moment from "moment";

import sessionsService from "../../services/sessions.service";

const sessionsModel = {
  items: [],
  setSessions: action((state, sessions) => {
    state.items = sessions;
  }),
  fetchSessions: thunk(async (actions) => {
    const sessions = await sessionsService.fetchSessions();
    actions.setSessions(sessions);
  }),
  // Expose this as computed function with filtering built in
  // Could expose API for applying filters from a form/component
  availableShifts: computed(
    [(state) => state.items, (_state, storeState) => storeState.user.staffType],
    (sessions, userStaffType) =>
      sessions
        .filter(
          (s) =>
            s.status === "POSTED" &&
            s.locum === null &&
            s.staffType === userStaffType &&
            moment(s.startDatetime).diff(Date.now(), "days") > 0
        )
        .map(({ id, hourlyRate, startDatetime, endDatetime, ...rest }) => ({
          id,
          practiceName: rest.practice.name,
          startDatetime,
          endDatetime,
          hourlyRate,
          applicationsCount: rest.applicationIds.length,
        }))
  ),
};

export default sessionsModel;
