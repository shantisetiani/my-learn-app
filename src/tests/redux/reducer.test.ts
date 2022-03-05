// import classReducer, { classAction } from "../../src/redux/reducer";
import classReducer, { classAction } from "redux/reducer";

describe("Class Reducer", () => {
  const classes = {
    items: [
      {
        id: 22,
        name: "Nano",
      },
      {
        id: 23,
        name: "Cindy",
      },
    ],
  };

  // Test with the undefined state
  it("Should return the initial state", () => {
    const initialState = {};
    expect(classReducer(undefined, {} as classAction)).toEqual(initialState);
  });

  // Test with the state only
  it("Should return the state in the parameter", () => {
    expect(classReducer(classes, {} as classAction)).toEqual(classes);
  });

  it("If the action type is storeClass should return the new state", () => {
    const newClasses = {
      items: [
        {
          id: 22,
          name: "Nani",
        },
        {
          id: 24,
          name: "Jessie",
        },
        {
          id: 25,
          name: "Rosa",
        },
      ],
    };

    // Test with the action only
    expect(
      classReducer(undefined, {
        type: "storeClass",
        data: newClasses,
      })
    ).toEqual(newClasses);

    // Test with the state and action
    expect(
      classReducer(classes, {
        type: "storeClass",
        data: newClasses,
      })
    ).toEqual(newClasses);
  });
});
