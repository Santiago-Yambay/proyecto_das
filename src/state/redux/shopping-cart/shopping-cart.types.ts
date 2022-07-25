import { Line } from '@models/line.model';
import { Product } from '@models/product.model';

export interface ShoppingCartState {
  products: Product[];
  total: number;
  line: Line | null;
}