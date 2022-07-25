export enum AddServiceStep {
  ProductsSelection = "products",
  AddOns = "addons",
}

export function nextStep(currentStep: AddServiceStep): AddServiceStep | null {
  const steps: string[] = Object.values(AddServiceStep);
  const index: number = steps.indexOf(currentStep);
  return steps.length > index ? steps[index + 1] as AddServiceStep : null;
}

export interface AddServiceState {
  availableProducts: Array<object>;
  productsSelected: Array<object>;
  addOns: Array<object>;
  productsSelectedTotalAmount: number;
  currentStep: AddServiceStep;
  schedule: any[];
}
