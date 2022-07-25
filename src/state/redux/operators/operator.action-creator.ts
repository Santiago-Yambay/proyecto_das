import { Operator } from '@models/operator.model';
import { OperatorAction } from './operator.action';

const setCurrentOperator = (operator: Operator) => ({
  type: OperatorAction.SetCurrentOperator,
  payload: operator
});

export default {
  setCurrentOperator
};
