import { Category, CategoryType } from "@models/category.model";
import { FunctionComponent } from "react";
import { Button, ButtonType } from "@components/button/button.component";
import { FormattedMessage } from "react-intl";

type CategoiryProps = {
  category: Category;
  hasProducts: boolean;
  onBuy: (category: Category) => void;
};

export const CategoryComponent: FunctionComponent<CategoiryProps> = ({
  category,
  hasProducts,
  onBuy,
}: CategoiryProps): JSX.Element => {
  const onBuyClick = () => onBuy(category);

  return (
    <div className="w-full relative h-44 rounded-lg bg-alternative ml-14 p-3">
      <img
        className="absolute object-cover bottom-0 right-0 rounded-t-lg opacity-10 w-24 -ads-scale-x-100"
        src={`/assets/svg/${category.icon}`}
      />
      <img
        className="absolute object-cover top-1/4 -left-10 w-20 h-20 rounded-full border-4 shadow-md border-primary"
        src={`/assets/img/${category.img}`}
      />
      <div className="w-full h-full flex flex-col justify-between">
        <div className="text-right text-white">
          <h3 className="font-bold capitalize">
            {hasProducts ? "Cámbiate!" : category.name}
          </h3>
          <p>
            {hasProducts ? `a un ${category.name}` : ""} {category.description}
          </p>
        </div>
        <div className="mt-4 flex justify-center">
          <Button
            classes="transform hover:scale-125 mt-6"
            onClick={onBuyClick}
            type={ButtonType.Secondary}
          >
            {category.id === CategoryType.Recarga ? (
              <FormattedMessage id="label.action.recharge" />
            ) : (
              <FormattedMessage id="label.action.purchase" />
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};
