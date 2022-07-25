import { FunctionComponent } from "react";
import { FormattedMessage } from "react-intl";

import { Product } from "@models/product.model";
import { CategoryType } from "@models/category.model";
import { Subscription } from "@models/subscription.model";
import { useHistory } from "react-router-dom";

type PackageProductProps = {
  product: Product;
  subscription: Subscription;
};

export const PackageProduct: FunctionComponent<PackageProductProps> = ({
  product
}) => {
  const router = useHistory();
  const onAddNewHandler = () => {
    router.push('/customer/new-customer');
  } 
  return(
  <div className={`w-full h-44 relative rounded-lg bg-alternative`}>
    <img
      className="w-full h-full object-cover rounded-lg opacity-75"
      src={`/assets/img/${product.img}`}
    />
    <div className="absolute top-0 bottom-0 left-0 right-0 rounded-lg bg-gradient-to-t from-alternative p-2 text-white">
      <p>
        <strong>{CategoryType[product.categoryId]}:</strong> {product.name}
        <FormattedMessage id="label.product.validityDays" />
      </p>
      <p>
        <strong>Disponible</strong>
      </p>
      <button className="p-1 px-10 relative text-white rounded-full bg-gradient-to-r from-primary via-alternative to-secondary hover:bg-gradient-to-l hover:from-secondary hover:via-alternative hover:to-primary" 
              onClick={onAddNewHandler}
            >
              Agregar nuevo Item
      </button>
      
    </div>
  </div>
);
};
