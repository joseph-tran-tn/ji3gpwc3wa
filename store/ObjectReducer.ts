import { SET_SELECTED_OBJECT, UNSET_SELECTED_OBJECT } from "../utils/constants";

export type ObjectState = {
  objectMapId: string;
  fileMapId: string;
  objectType: "text" | "visual-asset";
} | null;

type Action = ObjectState & {
  type: string;
};

export const initObjectState = null;
export const objectReducer = (state: ObjectState, action: Action) => {
  switch (action.type) {
    case UNSET_SELECTED_OBJECT:
      return null;
    case SET_SELECTED_OBJECT:
      const { objectMapId, fileMapId, objectType } = action;
      return { objectMapId, fileMapId, objectType };
    default:
      return state;
  }
};
