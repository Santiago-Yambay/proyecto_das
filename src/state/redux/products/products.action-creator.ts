import { Product } from "@models/product.model";
import { Category } from '@models/category.model';
import { ProductsAction } from "./products.action";

const setProducts = (products: Product[]) => ({
  type: ProductsAction.SetProducts,
  payload: products,
});

const setCategories = (categories: Category[] | null)  => ({
  type: ProductsAction.SetCategories,
  payload: categories
});

const setCurrentCategory = (category: Category | null) => ({
  type: ProductsAction.SetCurrentCategory,
  payload: category
});

export default {
  setProducts,
  setCategories,
  setCurrentCategory
};
