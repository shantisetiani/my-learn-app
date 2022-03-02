import axios from "axios";
import {
  AvailableClasses,
  ClassDetail,
  JoinClassRequestBody,
  JoinClassResponse,
} from "models";

const config = () => ({
  headers: {
    "Content-Type": "application/json",
  },
});

export default class ClassApi {
  private API_URL: string | undefined;

  constructor() {
    this.API_URL = process.env.REACT_APP_API_URL;
  }

  public async getAvailableClasses(): Promise<AvailableClasses[]> {
    return await (
      await axios.get(`${this.API_URL}/available-classes`, config())
    ).data;
  }

  public async getClassDetail(classId: number): Promise<ClassDetail> {
    return await (
      await axios.get(`${this.API_URL}/learning-class?id=${classId}`, config())
    ).data;
  }

  public async joinClass(
    requestBody: JoinClassRequestBody
  ): Promise<JoinClassResponse> {
    return await (
      await axios.post(`${this.API_URL}/join-class`, requestBody, config())
    ).data;
  }
}
