import { ReactElement, useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { FormattedMessage } from "react-intl";

import { Main } from "@components/layout/main.component";
import { useHistory } from "react-router";
import { AddOn } from "./components/add-on.component";
import { useDispatch, useSelector } from "react-redux";
import allActions from "@state/redux/actions";
import { AddServiceNav } from "./components/add-service-nav.component";
import { AccountService } from "@adapters/rest/account.service";
import {
  currentLineSelector,
  currentAccountSelector,
  productToAddSelector,
  currentSubscription,
} from "@state/redux/lines/lines.selector";
import { Item } from "./components/item-card.component";
import { ServiceType } from "@models/category.model";
import { currentCategory } from "@state/redux/products/products.selector";

export const AddOnPage = () => {
  const dispatch = useDispatch();
  const router = useHistory();

  const line = useSelector(currentLineSelector);
  const account = useSelector(currentAccountSelector);
  const product = useSelector(productToAddSelector);
  const subscription = useSelector(currentSubscription);
  const category = useSelector(currentCategory);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    initPage();
  }, [line]);

  const initPage = async () => {
    if (!account) {
      const accountData = await AccountService.getById(line.accountId);
      dispatch(allActions.linesActions.setCurrentAccount(accountData));
    }
    setLoading(false);
  };

  const goNext = () => {
    if (category.serviceType === ServiceType.Fixed) {
      router.push("installation-schedule");
    } else {
      router.push("payment");
    }
  };

  const goBack = () => {
    router.goBack();
  };

  const onChangeRenewalType = (item: Item) => {
    dispatch(
      allActions.linesActions.setCurrentSubscription({
        ...subscription,
        renewalType: item.id,
      })
    );
  };

  const onAddToCart = () => {
    dispatch(allActions.shoppingCartActions.addToCart(product));
    dispatch(allActions.linesActions.removeProductToAdd());
    router.push(`/customer/${line.id}`);
  };

  const getNextLabel = (): string => {
    return category.serviceType === ServiceType.Fixed
      ? "Installation schedule"
      : "Purchase";
  };

  const getBackLabel = (): string | ReactElement => {
    return category.serviceType === ServiceType.Fixed ? (
      "Availability Check"
    ) : (
      <FormattedMessage id="label.add-customer.productSelection" />
    );
  };

  return (
    <Main
      className="amd__add-service-page__main"
      navigation={
        <AddServiceNav
          lblBack={getBackLabel()}
          lblNext={getNextLabel()}
          onClickBack={goBack}
          onClickNext={goNext}
          onAddToCart={onAddToCart}
          totalSteps={3}
          currentStep={2}
          total={product.price}
        />
      }
    >
      {loading && (
        <div className="h-full flex justify-center items-center">
          <ReactLoading type={"bars"} color={"#0085CA"} />
        </div>
      )}

      {!loading && (
        <AddOn
          line={line}
          account={account}
          product={product}
          subscription={subscription}
          onChangeRenewalType={onChangeRenewalType}
        />
      )}
    </Main>
  );
};
