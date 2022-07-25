import { Product } from '@models/product.model';
import { Line } from '@models/line.model';
import { ShoppingCartAction } from './shopping-cart.action';

const addToCart = (product: Product) => ({
  type: ShoppingCartAction.AddToCart,
  payload: product
});

const removeFromCart = (index: number) => ({
  type: ShoppingCartAction.RemoveFromCart,
  payload: index
});

const cleanCart = () => ({
  type: ShoppingCartAction.CleanCart
});

const setLine = (line: Line) => ({
  type: ShoppingCartAction.SetLine,
  payload: line
});

const removeLine = () => ({
  type: ShoppingCartAction.RemoveLine
});

export default {
  addToCart,
  removeFromCart,
  cleanCart,
  setLine,
  removeLine
}