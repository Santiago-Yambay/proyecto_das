import { FunctionComponent } from "react";
import Carousel from "react-elastic-carousel";
import { FormattedMessage } from "react-intl";

import { Category } from "@models/category.model";
import { NotFoundData } from "@components/layout/no-found-data.component";
import { CategoryComponent } from "./category.component";
import { Product } from "@models/product.model";

type CategoriesProps = {
  categories: Category[];
  products: Product[];
  onBuy: (category: Category) => void;
};

export const CategoriesComponent: FunctionComponent<CategoriesProps> = ({
  categories,
  products,
  onBuy,
}): JSX.Element => {
  const breakPoints = [
    { width: 376, itemsToShow: 1 },
    { width: 476, itemsToShow: 2 },
    { width: 576, itemsToShow: 3 },
  ];

  const hasProducts = (category: Category): boolean => {
    const productFinded = products.find(
      (product: Product) => product.categoryId === category.id
    );
    return productFinded ? true : false;
  };

  return (
    <div>
      <strong>
        <FormattedMessage id="label.product.contractOrRenew" />:
      </strong>
      {Array.isArray(categories) && categories.length ? (
        <Carousel
          className="mt-3"
          isRTL={false}
          pagination={false}
          breakPoints={breakPoints}
        >
          {categories.map((category: Category) => (
            <CategoryComponent
              key={category.id}
              category={category}
              hasProducts={hasProducts(category)}
              onBuy={onBuy}
            />
          ))}
        </Carousel>
      ) : (
        <NotFoundData>
          <FormattedMessage id="label.category.noHas" />
        </NotFoundData>
      )}
    </div>
  );
};
