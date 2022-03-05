import ClassApi from "./ClassApi";
export interface Api {
  class: ClassApi;
}

export const api: Api = {
  class: new ClassApi(),
};
