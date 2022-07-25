import { AccountAction } from "./account.action";
import { AccountState } from "./account.types";

const INITIAL_STATE: AccountState = {
  currentAccount: null
}

export const accountReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case AccountAction.SetCurrentAccount:
      return {
        ...state,
        currentAccount: action.payload
      };
  };

  return state;
}