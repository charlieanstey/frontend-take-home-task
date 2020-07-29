import { action, computed, thunk } from "easy-peasy";

const API =
  "https://vvgv5rubu3.execute-api.eu-west-2.amazonaws.com/dev/sessions";

const sessionsModel = {
  items: [],
  setSessions: action((state, sessions) => {
    state.items = sessions;
  }),
  fetchSessions: thunk(async (actions) => {
    // In reality, we might call a services layer here
    // rather than Fetch directly
    const sessions = await fetch(API)
      .then((response) => response.json())
      .then((data) => data.data);

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
