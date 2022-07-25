import { FunctionComponent } from "react";
import Carousel from "react-elastic-carousel";
import { FormattedMessage } from "react-intl";

import { ProductComponent as ProductComponent } from "./product.component";
import { NotFoundData } from "@components/layout/no-found-data.component";
import { Product } from "@models/product.model";
import { CategoryType } from "@models/category.model";
import { PackageProduct } from "./package-product.component";
import { RenewalType, Subscription } from "@models/subscription.model";

type ProductsProps = {
  products: Product[];
  subscriptions: Subscription[];
};

export const Products: FunctionComponent<ProductsProps> = ({
  products,
  subscriptions,
}): JSX.Element => {
  const breakPoints = [
    { width: 376, itemsToShow: 1 },
    { width: 476, itemsToShow: 2 },
    { width: 576, itemsToShow: 3 },
  ];

  const findSubscription = (product: Product): Subscription => {
    return subscriptions.find(
      (subscription: Subscription) => subscription.productId === product.id
    ) as Subscription;
  };

  return (
    <div>
      <strong>
        <FormattedMessage id="label.product.contractedProducts" />:
      </strong>
      {Array.isArray(products) && products.length ? (
        <Carousel
          className="mt-3"
          isRTL={false}
          itemPadding={[0, 5, 0, 5]}
          pagination={false}
          breakPoints={breakPoints}
        >
          {products.map((product: Product, index: number) => {
            return product.categoryId === CategoryType.Plan ? (
              <ProductComponent key={index} product={product} />
            ) : (
              <PackageProduct
                key={index}
                product={product}
                subscription={findSubscription(product)}
              />
            );
          })}
        </Carousel>
      ) : (
        <div className="my-3 h-56">
          <NotFoundData>
            <FormattedMessage id="label.product.noHasContractedProducts" />
          </NotFoundData>
        </div>
      )}
    </div>
  );
};
