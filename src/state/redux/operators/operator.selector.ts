import { Operator } from "@models/operator.model";

export const currentOperator = (state: any): Operator =>
  state.operator.currentOperator;
