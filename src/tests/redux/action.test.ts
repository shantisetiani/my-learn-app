import { storeClass } from "redux/action";

describe("Class Actions", () => {
  const classes = {
    items: [
      {
        id: 20,
        name: "Gita",
      },
      {
        id: 21,
        name: "Juan Setiawan",
      },
    ],
  };

  it("Should call action to store classes", () => {
    const expectedAction = {
      type: "storeClass",
      data: classes,
    };
    expect(storeClass(classes)).toEqual(expectedAction);
  });
});
