export const availableProducts = (state: any) =>
  state.addService.availableProducts;

export const addOns = (state: any) => state.addService.addOns;

export const productsSelected = (state: any): any[] =>
  state.addService.productsSelected;

export const productsSelectedTotalAmount = (state: any) =>
  state.addService.productsSelectedTotalAmount;

export const scheduleSelector = (state: any) => state.addService.schedule;
