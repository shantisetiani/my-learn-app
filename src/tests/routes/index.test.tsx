import { render, screen } from "@testing-library/react";
import App from "App";
import { Provider } from "react-redux";
import { store } from "store";
import { ROUTES } from "routes";

jest.mock("api/ClassApi");

window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});

const renderWithRouter = (ui: any, { route = "/" } = {}) => {
  window.history.pushState({}, "", route);

  return render(ui);
};

describe("Routes", () => {
  it("Should go to Class List page", async () => {
    renderWithRouter(
      <Provider store={store}>
        <App />
      </Provider>,
      { route: ROUTES.CLASS_LIST }
    );
    expect(screen.getByTestId("classList")).toBeTruthy();
  });

  it("Should go to Class Detail page", async () => {
    renderWithRouter(
      <Provider store={store}>
        <App />
      </Provider>,
      { route: `${ROUTES.CLASS_DETAIL}/3` }
    );
    expect(screen.getByTestId("classDetail")).toBeTruthy();
  });
});
