import { OperatorAction } from './operator.action';
import { OperatorState } from './operator.types';

const INITIAL_STATE: OperatorState = {
  currentOperator: null
}

export const operatorReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case OperatorAction.SetCurrentOperator:
      return {
        ...state,
        currentOperator: action.payload
      };
  };
  
  return state;
}