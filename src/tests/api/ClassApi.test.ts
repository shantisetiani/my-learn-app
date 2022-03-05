import ClassApi from "api/ClassApi";

jest.mock("api/ClassApi");

afterEach(() => {
  jest.resetAllMocks();
});

const classApi = new ClassApi();

describe("ClassApi", () => {
  it("Should called getAvailableClasses correctly", async () => {
    jest.fn(classApi.getAvailableClasses);

    await classApi.getAvailableClasses();

    expect(classApi.getAvailableClasses).toHaveBeenCalledTimes(1);
    expect(classApi.getAvailableClasses).toBeCalledWith();
  });

  it("Should called getAvailableClasses correctly", async () => {
    const classId = 99;

    jest.fn(classApi.getClassDetail);

    await classApi.getClassDetail(classId);

    expect(classApi.getClassDetail).toHaveBeenCalledTimes(1);
    expect(classApi.getClassDetail).toBeCalledWith(classId);
  });

  it("Should called getClassDetail correctly", async () => {
    const requestBody = {
      classId: 99,
      attendeeFullName: "Giovanno",
      attendeeEmail: "gio@mail.com",
    };

    jest.fn(classApi.joinClass);

    await classApi.joinClass(requestBody);

    expect(classApi.joinClass).toHaveBeenCalledTimes(1);
    expect(classApi.joinClass).toBeCalledWith(requestBody);
  });
});
