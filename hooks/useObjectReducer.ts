import { useContext } from "react";
import { ObjectContext } from "../context/ObjectContext";

export const useObjectReducer = () => {
  const { state, dispatch } = useContext(ObjectContext);
  return { state, dispatch };
};
