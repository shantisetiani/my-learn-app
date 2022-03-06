import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "App";
import { Provider } from "react-redux";
import { store } from "store";

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

describe("App", () => {
  it("Should open ClassList page on first load", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByTestId("classList")).toBeTruthy();
  });

  it("Should be able to search class correctly", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const inputSearch = getByTestId("inputSearch");
    const leftClick = { button: 0 };
    const searchKeyword = "React Typescript";

    userEvent.click(inputSearch, leftClick);
    userEvent.type(inputSearch, searchKeyword);
    expect(inputSearch).toHaveValue(searchKeyword);
  });
});
