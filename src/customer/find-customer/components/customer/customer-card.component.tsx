import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { useState, useEffect, FunctionComponent } from "react";

import "./customer-card.component.css";
import { productsSelector } from "@state/redux/products/products.selector";
import { Product } from "@models/product.model";
import { Category } from "@models/category.model";
import { Line } from "@models/line.model";
import { Account } from "@models/account.model";
import { LineUtil } from "@utils/line.util";

type CustomerCardProps = {
  line: Line;
  account: Account;
  categories: Category[];
  onClick: (line: Line, account: Account) => void;
};

export const CustomerCard: FunctionComponent<CustomerCardProps> = ({
  line,
  account,
  categories,
  onClick,
}): JSX.Element => {
  const products = useSelector(productsSelector);
  const [currentProducts, setCurrentProducts] = useState<Product[]>([]);

  useEffect(() => {
    setCurrentProducts(LineUtil.filterProductsBySubscriptions(line, products));
  }, [products]);

  const onClickHandler = () => {
    onClick(line, account);
  };

  const getCategoryName = (categoryId: number): string => {
    if (!categories) {
      return "";
    }

    const category = categories.find(
      (category: Category) => category.id === categoryId
    );
    return category ? category.name : "";
  };

  return (
    <article
      onClick={onClickHandler}
      className="box-border w-full shadow-md p-4 rounded amd__customer-card cursor-pointer bg-white"
    >
      <div className="grid grid-cols-3 gap-3">
        <div>
          <h3 className="mb-3 truncate text-primary">{`${
            account.name ? account.name : ""
          } ${account.lastName ? account.lastName : ""}`}</h3>
          <p>
            <strong>
              Ciudad
            </strong>{" "}
            {line.balance}
          </p>
        </div>

        <div>
          <strong className="inline-block mb-3">
            Dirección
          </strong>
          <p className="truncate">{account.address ? account.address : ""}</p>
        </div>

        <div>
          <strong className="inline-block mb-3">
            <FormattedMessage id="label.customer.subscriptions" />
          </strong>

          <div className="h-20 overflow-y-auto">
            {currentProducts ? (
              currentProducts.map((product: any, index: number) => (
                <p key={index} className="truncate">
                  {getCategoryName(product.categoryId)} - {product.name}
                </p>
              ))
            ) : (
              <span><FormattedMessage id="label.subscriptions.noHas" /></span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
