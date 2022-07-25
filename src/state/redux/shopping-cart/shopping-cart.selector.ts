import { Product } from '@models/product.model';
import { Line } from '@models/line.model';


export const cartSelector = (state: any): Product[] => state.shoppingCart.products;

export const lineSelector = (state: any): Line => state.shoppingCart.line;

export const totalCartSelector = (state: any): number => state.shoppingCart.total;