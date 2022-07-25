import { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";

import { CategoryType } from "@models/category.model";
import { Product } from "@models/product.model";

type ProductProps = {
  product: Product;
  className?: string;
  showDescription?: boolean;
};

export const ProductComponent: FunctionComponent<ProductProps> = ({
  product,
  className,
  showDescription,
}): JSX.Element => {
  const getDescription = (): string => {
    if (!product.calls || product.calls.length === 0) {
      return product.description;
    }

    const calls = product.calls.join(" - ");
    return `${product.description} ${calls}.`;
  };

  return (
    <div className={`w-full h-44 rounded-lg bg-alternative mx-1 ${className}`}>
      <div className="w-full relative h-5/6">
        <img
          className="w-full h-full object-cover rounded-t-lg opacity-75"
          src={`/assets/img/${product.img}`}
        />
        <div className="absolute bottom-0 left-0 right-0 text-center bg-gradient-to-t from-alternative px-2">
          <h3 className="font-bold text-white text-xl">
            {product.name ? product.name : ""}
          </h3>
          <h1 className="font-bold text-secondary capitalize">
            {CategoryType[product.categoryId]}
          </h1>
          {showDescription ? (
            <div className="p-2 mt-2 bg-alternative filter drop-shadow text-white rounded-lg w-full">
              {getDescription()}
            </div>
          ) : (
            <div className="px-10 mt-2">
              <p className="text-white border-t pt-2 border-white/100">
                {product.categoryId === CategoryType.Plan ? (
                  <span>
                    <strong>
                      <FormattedMessage id="label.add-customer.payment" />:
                    </strong>{" "}
                    ${product.price.toFixed(2)}{" "}
                    <FormattedMessage id="label.time.monthly" />
                  </span>
                ) : (
                  <span>
                    <strong>
                      <FormattedMessage id="label.product.validity" />:
                    </strong>{" "}
                    {product.validityDays}{" "}
                    <FormattedMessage id="label.time.days" />
                  </span>
                )}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
