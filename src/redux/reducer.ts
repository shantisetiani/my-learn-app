import { AvailableClasses } from "models";

interface classAction {
  type: string;
  data: AvailableClasses;
}

const classReducer = (state = [], action: classAction) => {
  switch (action.type) {
    case "storeClass":
      return action.data;
    default:
      return state;
  }
};

export default classReducer;
