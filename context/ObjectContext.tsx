import React, { createContext, useReducer } from "react";
import {
  initObjectState,
  objectReducer,
  ObjectState,
} from "../store/ObjectReducer";

type ObjectContext = {
  state?: ObjectState;
  dispatch?: React.Dispatch<any>;
};
export const ObjectContext = createContext<ObjectContext>({});

interface ObjectProviderProps {
  children: React.ReactNode;
}
export const ObjectProvider = ({ children }: ObjectProviderProps) => {
  const [state, dispatch] = useReducer(objectReducer, initObjectState);
  return (
    <ObjectContext.Provider value={{ state, dispatch }}>
      {children}
    </ObjectContext.Provider>
  );
};
