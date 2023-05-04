import { Reducer, createContext, Dispatch } from "react";

type ViewContext = {
  state?: InitState;
  dispatch?: Dispatch<ViewAction>;
};

interface InitState {
  name: string;
}

export type ViewAction = ActionMap<Payload>[keyof ActionMap<Payload>];

export enum Action {
  SetName = "setName",
}

export type Payload = {
  [Action.SetName]: { name: string };
};

export const initState = {
  name: "",
};

export const reducer: Reducer<InitState, ViewAction> = (state, action) => {
  switch (action.type) {
    case Action.SetName:
      return {
        ...state,
        name: action.payload.name,
      };

    default:
      return state;
  }
};

const viewContext = createContext<ViewContext>({
  state: initState,
  dispatch: undefined,
});

export default viewContext;

export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};
