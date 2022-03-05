import { AvailableClasses } from "models";

export const storeClass: any = (classes: AvailableClasses) => {
  return {
    type: "storeClass",
    data: classes,
  };
};
