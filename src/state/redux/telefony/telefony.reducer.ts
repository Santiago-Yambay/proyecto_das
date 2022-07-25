import { TelefonyAction } from "./telefony.action";
import { TelefonyState } from "./telefony.types";

const INITIAL_STATE: TelefonyState = {
  currentTelefony: {
    id: 1,
    name: 'movistar',
    logo: 'movistar.png',
    locale: 'en'
  },
};

export const telefonyReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case TelefonyAction.SetCurrentTelefony:
      return {
        ...state,
        currentTelefony: action.payload,
      };
  }
  return state;
};
