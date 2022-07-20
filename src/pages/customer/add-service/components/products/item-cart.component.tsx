import { FC } from 'react';
import { Product } from '@models/product.model';

type ItemCartProps = {
  product: Product
}

export const ItemCart: FC<ItemCartProps> = ({product}): JSX.Element => (
  <article className="flex mt-4 h-32 w-full">
    <figure>
      <img src={`/assets/img/${product.img}`} className="h-full"/>
    </figure>
    <div className="shadow-md p-4 bg-white flex-auto">
      <h3>{product.name}</h3>
      <div className="flex justify-between">
        <div>
          <div>
            { product.calls.map((call: string, index: number) => (
              <p key={index}>{ call }</p>
            )) }
          </div>
          <p><strong>Apps incluidas</strong></p>
        </div>
        <div>
          <h5 className='text-primary text-3xl'>$ {product.price}</h5>
        </div>
      </div>
    </div>

  </article>
);