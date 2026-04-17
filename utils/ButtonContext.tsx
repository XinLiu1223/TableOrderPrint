import { createContext, useContext, Dispatch } from "react";
import { ReducerType, ActionType } from "../reducer/buttonItems";

export const ButtonContext = createContext<{
  reducer: ReducerType;
  dispatch: Dispatch<ActionType>;
}>({
  reducer: { selectedId: null, buttonItems: [] },
  dispatch: () => {},
});
export const useButtonContext = () => useContext(ButtonContext);
