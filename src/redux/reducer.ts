import { AvailableClasses } from "models";

export interface classAction {
  type: string;
  data: AvailableClasses;
}

const classReducer: any = (state = {}, action: classAction) => {
  switch (action.type) {
    case "storeClass":
      return action.data;
    default:
      return state;
  }
};

export default classReducer;
