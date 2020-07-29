import React, { useEffect } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";

import Shift from "./Shift";

const App = () => {
  const fetchSessions = useStoreActions(
    (actions) => actions.sessions.fetchSessions
  );

  useEffect(() => {
    fetchSessions();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const availableShifts = useStoreState(
    (state) => state.sessions.availableShifts
  );

  return (
    <div className="App container mx-auto pt-8">
      {availableShifts.map(({ id, ...rest }) => (
        <Shift key={id} {...rest} />
      ))}
    </div>
  );
};

export default App;
