import React from "react";
import { useStoreState } from "easy-peasy";

import Shift from "./Shift";
import "./App.css";

const App = () => {
  const shifts = useStoreState((state) => state.sessions.availableShifts);
  console.log(shifts);

  return (
    <div className="App">
      <Shift {...shifts[0]} />
    </div>
  );
};

export default App;
