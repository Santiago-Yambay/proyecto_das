import { ResumeProduct } from "./resume-product.component";
import { Product } from "@models/product.model";
import { FunctionComponent } from "react";

type ProductCardProps = {
  product: Product;
  showRadio: boolean;
  onChange: (product: Product) => void;
};

export const ProductCard: FunctionComponent<ProductCardProps> = ({
  product,
  showRadio,
  onChange,
}: ProductCardProps): JSX.Element => (
  <section className="relative text-white p-4 h-full w-full">
    <div className="bg-alternative rounded-lg">
      <figure className="relative">
        <img
          src={`/assets/img/${product.img}`}
          className="w-full h-40 object-cover object-top opacity-60 rounded-lg"
        />
        <div className="absolute text-center bottom-0 w-full bg-gradient-to-t from-alternative px-2 pb-0">
          <h2 className="text-4xl">{product.name}</h2>
          <strong className="text-secondary text-3xl">$ {product.price.toFixed(2)}</strong>
        </div>
        { showRadio ? (
          <input
            type="radio"
            id={product.id.toString()}
            name='product'
            value={product.id.toString()}
            className="absolute w-6 h-6 top-1 right-1"
            onChange={(event) => onChange(product)}
          />
        ) : null}
      </figure>
      <div className="p-3">
        {product.aggregates.map((aggregate: any, index: number) => {
          return <ResumeProduct key={index} aggreate={aggregate} />;
        })}
      </div>
      <div className="p-3">
        {product.calls.map((call: string, index: number) => (
          <article key={index}  className="p-2 mt-2 bg-alternative filter drop-shadow text-white rounded-lg w-full">
            <h4 className="mb-1">{call}</h4>
          </article>
        ))}
      </div>
      <div className="p-3">
        <article className="p-2 mt-2 bg-alternative filter drop-shadow text-white rounded-lg w-full">
          <strong className="text-secondary">Vigencia:</strong> {product.validityDays} días
        </article>
      </div>
    </div>
  </section>
);
