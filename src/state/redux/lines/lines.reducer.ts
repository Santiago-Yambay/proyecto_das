import { LinesState } from "./lines.types";
import { LinesAction } from "./lines.action";

const INITIAL_STATE: LinesState = {
  lines: [],
  accounts: [],
  currentLine: null,
  currentAccount: null,
  productToAdd: null,
  currentSubscription: null,
  subscriptions: [],
  address: null,
};

export const linesReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case LinesAction.SetLines:
      return {
        ...state,
        lines: action.payload,
      };
    case LinesAction.SetAccounts:
      return {
        ...state,
        accounts: action.payload,
      };
    case LinesAction.SetCurrentLine:
      return {
        ...state,
        currentLine: action.payload,
      };
    case LinesAction.RemoveCurrentLine:
      return {
        ...state,
        currentLine: null,
      };
    case LinesAction.SetCurrentAccount:
      return {
        ...state,
        currentAccount: action.payload,
      };
    case LinesAction.RemoveCurrentAccount:
      return {
        ...state,
        currentAccount: null,
      };
    case LinesAction.SetProductToAdd:
      return {
        ...state,
        productToAdd: action.payload,
      };
    case LinesAction.RemoveProductToAdd:
      return {
        ...state,
        productToAdd: null,
      };
    case LinesAction.SetCurrentSubscription:
      return {
        ...state,
        currentSubscription: action.payload
      };
    case LinesAction.RemoveCurrentSubscription:
      return {
        ...state,
        currentSubscription: null
      };
    case LinesAction.SetSubscriptions:
      return {
        ...state,
        subscriptions: action.payload
      };
    case LinesAction.RemoveSubscriptions: 
      return {
        ...state,
        subscriptions: []
      };

    case LinesAction.SetAddress: 
      return {
        ...state,
        address: action.payload
      };
  }
  return state;
};
