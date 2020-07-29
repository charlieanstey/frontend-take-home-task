import { action, computed, thunk } from "easy-peasy";

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
            s.staffType === userStaffType
        )
        .map(({ id, hourlyRate, ...rest }) => ({
          id,
          practiceName: rest.practice.name,
          hourlyRate,
          applicationsCount: rest.applicationIds.length,
        }))
  ),
};

export default sessionsModel;
