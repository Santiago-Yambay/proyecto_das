import { FC } from 'react';

import { Product } from '@models/product.model';
import { ItemCart } from './item-cart.component';

type ShoppingCartProps = {
  products: Product[];
}

export const ShoppingCart: FC<ShoppingCartProps> = ({ products }): JSX.Element => (
  <section className='w-full'>
    <p><strong>Productos agregados al carrito de compras</strong></p>
    <div className='flex justify-center w-full'>
      <div className='w-1/2'>
        { products && products.map((product: Product, index: number) => (
          <ItemCart key={index} product={product} />
        ))}
      </div>
    </div>
  </section>
)