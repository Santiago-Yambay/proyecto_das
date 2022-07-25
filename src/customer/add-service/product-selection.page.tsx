import { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

import "./add-service.page.css";
import { Main } from "@components/layout/main.component";
import { ProductSelection } from "./components/product-selection.component";
import { productToAddSelector } from '@state/redux/lines/lines.selector';
import allActions from "@state/redux/actions";
import { AddServiceNav } from "./components/add-service-nav.component";
import { currentCustomerSerlector } from "@state/redux/customer/customer.selector";
import { ProductService } from '@adapters/rest/product.service';
import { Product } from "@models/product.model";
import { currentLineSelector } from '@state/redux/lines/lines.selector';
import { currentCategory } from '@state/redux/products/products.selector';
import { RenewalType } from "@models/subscription.model";
import { ServiceType } from '@models/category.model';

export const ProductSelectionPage = (props: any) => {
  const dispatch = useDispatch();
  const router = useHistory();

  const customer = useSelector(currentCustomerSerlector);
  const category = useSelector(currentCategory);
  const line = useSelector(currentLineSelector);

  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>();
  const productSelected = useSelector(productToAddSelector);

  useEffect(() => {
    initPage();
  }, []);

  const initPage = async () => {
    if(category) {
      const productsData = await ProductService.findByFilters({
        categoryId: category?.id
      });
      setProducts(productsData);
      setLoading(false);
    }
    loadProductsSelected();
  }

  const saveProductsSelected = (product: any) => {
    dispatch(allActions.linesActions.setProductToAdd(product));
    dispatch(allActions.linesActions.setAddress(null));
  };

  const loadProductsSelected = async () => {
    if (productSelected) {
      let radio = document.getElementById(productSelected.id.toString()) as HTMLInputElement;
      radio.checked = true;
    }
  };

  const goNext = () => {
    if (!productSelected) {
      Swal.fire({
        icon: "warning",
        title: "Seleccione un producto para continuar!",
        confirmButtonColor: "#0085CA",
      });
    } else {
      dispatch(allActions.linesActions.setCurrentSubscription({
        productId: productSelected.id,
        activated: true,
        availableData: productSelected.dataCapacity,
        remainingDays: productSelected.validityDays,
        renewalType: RenewalType.Once
      }));

      if (category.serviceType === ServiceType.Fixed) {
        router.push(`availability-check`);
      } else {
        router.push('add-on');
      }
    }
  };

  const goBack = () => {
    dispatch(allActions.linesActions.removeProductToAdd());
    dispatch(allActions.linesActions.setAddress(null));
    router.push(`/customer/${line.id}`);
  };

  const getNextLabel = (): string => {
    return category.serviceType === ServiceType.Fixed? 'Availability check' : 'Add-ons';
  }

  return (
    <Main
      className="amd__add-service-page__main"
      navigation={
        <AddServiceNav
          line={line}
          lblBack="Atrás"
          lblNext={getNextLabel()}
          onClickBack={goBack}
          onClickNext={goNext}
          totalSteps={3}
          currentStep={1}
          total={productSelected? productSelected.price : 0}
        />
      }
    >
      {loading && (
        <div className="h-full flex justify-center items-center">
          <ReactLoading type={"bars"} color={"#0085CA"} />
        </div>
      )}

      {!loading && (
        <ProductSelection
          customer={customer}
          data={products}
          category={category}
          onChange={saveProductsSelected}
        />
      )}
    </Main>
  );
};
