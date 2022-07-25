import { ShoppingCartState } from './shopping-cart.types';
import { ShoppingCartAction } from './shopping-cart.action';
import { Product } from '@models/product.model';

const INITIAL_STATE: ShoppingCartState = {
   products: [],
   total: 0,
   line: null
};

export const shoppingCartReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ShoppingCartAction.AddToCart:
      return {
        ...state,
        products: [...state.products, action.payload],
        total: state.total + action.payload.price
      };
    case ShoppingCartAction.RemoveFromCart:
      const product = state.products[action.payload];
      const products = state.products.map(
        (product: Product, index: number) => index !== action.payload);
        return {
          ...state,
          products,
          total: state.total - product.price
        };
      case ShoppingCartAction.CleanCart:
        return {
          ...state,
          products: [],
          total: 0
        };
      case ShoppingCartAction.SetLine:
        return {
          ...state,
          line: action.line
        };
      case ShoppingCartAction.RemoveLine:
        return {
          ...state,
          line: null
        };
  }
  return state;
}