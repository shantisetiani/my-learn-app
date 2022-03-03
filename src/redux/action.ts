import { AvailableClasses } from "models";

export const storeClass = (classes: AvailableClasses) => {
  return {
    type: "storeClass",
    data: classes,
  };
};
