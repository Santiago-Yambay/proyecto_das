import { ProductsState } from "./products.types";
import { ProductsAction } from "./products.action";

const INITIAL_STATE: ProductsState = {
  products: [],
  catefories: [],
  currentCategory: null
};

export const productsReducer = (
  state = INITIAL_STATE,
  action: any
) => {
  switch (action.type) {
    case ProductsAction.SetProducts:
      return {
        ...state,
        products: action.payload
      };
    case ProductsAction.SetCategories:
      return {
        ...state,
        categories: action.payload
      };
    case ProductsAction.SetCurrentCategory:
      return {
        ...state,
        currentCategory: action.payload
      };
  }
  return state;
};
