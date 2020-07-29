import React from "react";
import { render } from "@testing-library/react";
import { createStore, StoreProvider } from "easy-peasy";

import model from "../../store";
import App from "../App";

const mockSessionsService = {
  fetchSessions: jest.fn(),
};

test("<App />", () => {
  const store = createStore(model, {
    injections: {
      sessionsService: mockSessionsService,
    },
  });

  const app = (
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  );

  render(app);
});
