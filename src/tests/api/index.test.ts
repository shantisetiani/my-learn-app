import { api as mockApi } from "api";

jest.mock("api");

afterEach(() => {
  jest.resetAllMocks();
});

describe("api.class", () => {
  it("Should called getAvailableClasses and return the data correctly", async () => {
    const availableClassesDummy = {
      items: [
        {
          id: "1",
          name: "Sentosa",
        },
        {
          id: "2",
          name: "Yoshi",
        },
      ],
    };
    const spy = jest
      .spyOn(mockApi.class, "getAvailableClasses")
      .mockResolvedValueOnce(Promise.resolve(availableClassesDummy));

    const response = await mockApi.class.getAvailableClasses();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toBeCalledWith();
    expect(response).toEqual(availableClassesDummy);
  });

  it("Should called getClassDetail and return the data  correctly", async () => {
    const classId = 99;
    const classDetailDummy = {
      id: "22",
      name: "Belajar Bahasa Inggris",
      mentors: [
        {
          id: "mentor12",
          name: "Yudi",
          description: "Mentor berpengalaman",
        },
      ],
      description:
        "Belajar Bahasa Inggris dari 0 sampai lancar. Kalau tidak lancar uang kembali.",
    };

    const spy = jest
      .spyOn(mockApi.class, "getClassDetail")
      .mockResolvedValueOnce(Promise.resolve(classDetailDummy));

    const response = await mockApi.class.getClassDetail(classId);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toBeCalledWith(classId);
    expect(response).toEqual(classDetailDummy);
  });

  it("Should called joinClass and return the data correctly", async () => {
    const requestBody = {
      classId: 99,
      attendeeFullName: "Giovanno",
      attendeeEmail: "gio@mail.com",
    };

    const responseDummy = {
      message: "Kelas sudah penuh!",
    };

    const spy = jest
      .spyOn(mockApi.class, "joinClass")
      .mockResolvedValueOnce(Promise.resolve(responseDummy));

    const response = await mockApi.class.joinClass(requestBody);

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toBeCalledWith(requestBody);
    expect(response).toEqual(responseDummy);
  });
});
