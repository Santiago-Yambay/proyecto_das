import { FunctionComponent } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactLoading from "react-loading";
import { useHistory } from "react-router";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

import { Main } from "@components/layout/main.component";
import { AddServiceNav } from "./components/add-service-nav.component";
import { currentLineSelector } from "@state/redux/lines/lines.selector";
import { ProductService } from "@adapters/rest/product.service";
import { Product } from "@models/product.model";
import { CategoryType } from "@models/category.model";
import allActions from "@state/redux/actions";
import { currentCategory } from "@state/redux/products/products.selector";
import { productToAddSelector } from '@state/redux/lines/lines.selector';

export const OnlineRechargePage = () => {
  const dispatch = useDispatch();
  const router = useHistory();
  const line = useSelector(currentLineSelector);
  const category = useSelector(currentCategory);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const rechargeSelected = useSelector(productToAddSelector);

  useEffect(() => {
    onInitPage();
  }, []);

  const onInitPage = async () => {
    const produtsData = await ProductService.findByFilters({
      categoryId: CategoryType.Recarga,
    });
    setProducts(produtsData);
    setLoading(false);
  };

  const goBack = () => {
    dispatch(allActions.linesActions.removeProductToAdd());
    router.push(`/customer/${line.id}`);
  };
  const goNext = () => {
    if (!rechargeSelected) {
      Swal.fire({
        icon: "warning",
        title: "Seleccione una recarga para continuar!",
        confirmButtonColor: "#0085CA",
      });
    } else {
      router.push("payment");
    }
  };

  const onRechargeSelect = (product: Product) => {
    dispatch(allActions.linesActions.setProductToAdd(product));
  };

  const rechargeIsSelected = (product: Product): boolean => {
    if (rechargeSelected && rechargeSelected.id === product.id) {
      return true;
    }
    return false;
  }

  return (
    <Main
      className="amd__add-service-page__main"
      navigation={
        <AddServiceNav
          line={line}
          lblBack="Atrás"
          lblNext="Comprar"
          onClickBack={goBack}
          onClickNext={goNext}
          totalSteps={2}
          currentStep={1}
        />
      }
    >
      {loading && (
        <div className="h-full flex justify-center items-center">
          <ReactLoading type={"bars"} color={"#0085CA"} />
        </div>
      )}

      {!loading && (
        <>
          <h1 className="text-center">Recarga tu cuenta</h1>
          <p className="py-4 text-black">
            <strong>Selecciona la cantidad a recargar</strong>
          </p>
          <div className="grid grid-cols-6 mx-20 mt-3">
            {products.map((product: Product) => (
              <Recharge
                key={product.id}
                product={product}
                onClick={onRechargeSelect}
                selected={rechargeIsSelected(product)}
              />
            ))}
          </div>
        </>
      )}
    </Main>
  );
};

type RechargeProps = {
  product: Product;
  selected: boolean;
  onClick: (product: Product) => void;
};

const Recharge: FunctionComponent<RechargeProps> = ({
  product,
  onClick,
  selected = false,
}): JSX.Element => {
  const onClickHandler = () => {
    onClick(product);
  };

  return (
    <div
      className={`flex justify-center items-center rounded-full h-20 w-20 border-solid border-2 border-alternative text-alternative text- cursor-pointer ${
        selected ? "bg-primary text-white border-white" : ""
      }`}
      onClick={onClickHandler}
    >
      $ {product.price}
    </div>
  );
};
