import { Action } from 'redux';

import { Product } from '@models/product.model';
import { Category } from '@models/category.model';

export interface ProductsState {
  products: Product[];
  catefories: Category[] | null;
  currentCategory: Category | null;
}

export interface ProductsDispatchAction extends Action {
  payload: Partial<ProductsState>;
}