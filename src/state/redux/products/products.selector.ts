import { Category } from '@models/category.model';
import { Product } from '@models/product.model';

export const productsSelector = (state: any): Product[] => state.products.products;

export const categoriesSelector = (state: any): Category[] => state.products.categories;

export const currentCategory = (state: any): Category => state.products.currentCategory;
