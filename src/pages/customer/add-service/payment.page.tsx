import { useState } from "react";
import ReactLoading from "react-loading";
import { useDispatch, useSelector } from "react-redux";

import { Main } from "@components/layout/main.component";
import { useHistory } from "react-router";
import { Payment } from "./components/payment.component";
import { AddServiceNav } from "./components/add-service-nav.component";
import {
  currentAccountSelector,
  currentLineSelector,
  productToAddSelector,
  currentSubscription,
  subscriptionsSelector
} from "@state/redux/lines/lines.selector";
import { LineService } from "@adapters/rest/line.service";
import allActions from "@state/redux/actions";
import { CategoryType } from "@models/category.model";
import { AccountService } from "@adapters/rest/account.service";
import { EventService } from "@adapters/rest/event.service";
import { Subscription } from "@models/subscription.model";
import { NotificationsUtil } from "@utils/notification.util";
import { totalCartSelector } from '@state/redux/shopping-cart/shopping-cart.selector';

export const PaymentPage = () => {
  const dispatch = useDispatch();
  const router = useHistory();

  const account = useSelector(currentAccountSelector);
  const line = useSelector(currentLineSelector);
  const product = useSelector(productToAddSelector);
  const subscription = useSelector(currentSubscription);
  const total = useSelector(totalCartSelector);
  const subscriptionsToAdd = useSelector(subscriptionsSelector);
  const totalToPay = product? product.price : total;
  console.log('SUBS', subscriptionsToAdd);

  const [loading, setLoading] = useState(false);

  const goNext = () => {
    if (product) {
      addProduct();
    } else if (subscriptionsToAdd && subscriptionsToAdd.length > 0) {
      addSubscriptions();
    } else {
      NotificationsUtil.showInfo(
        `No tiene productos a pagar`
      );
    }
  };

  const addProduct = async () => {
    if (product.categoryId !== CategoryType.Recarga) {
      const subscriptions: Subscription[] = [
        ...line.subscriptions,
        subscription,
      ];

      await LineService.updateSubscriptions(line.id, {
        subscriptions,
      });

      await EventService.create({
        lineId: line.id,
        date: new Date().toISOString(),
        description: `Compra ${CategoryType[product.categoryId]} - ${
          product.name
        }`,
      });
      NotificationsUtil.showInfo(
        `Agrego un nuevo ${CategoryType[product.categoryId]}: ${product.name}`
      );
    } else {
      const balance = line.balance + product.price;
      await LineService.updateBalance(line.id, {
        balance,
      });

      await EventService.create({
        lineId: line.id,
        date: new Date().toISOString(),
        description: `${CategoryType[product.categoryId]} de $${product.price}`,
      });
      NotificationsUtil.showInfo(`Agrego $${product.price} a su saldo actual`);
    }
    dispatch(allActions.linesActions.removeProductToAdd());
    router.push("order-purchased");
  }

  const addSubscriptions = async () => {
    const subscriptions: Subscription[] = [
      ...line.subscriptions,
      ...subscriptionsToAdd
    ];
    await LineService.updateSubscriptions(line.id, {
      subscriptions,
    });

    await EventService.create({
      lineId: line.id,
      date: new Date().toISOString(),
      description: `Compra de productos`,
    });
    NotificationsUtil.showInfo(
      `Agrego nuevos productos`
    );
    dispatch(allActions.linesActions.removeSubscriptions());
    dispatch(allActions.shoppingCartActions.cleanCart());
    router.push("order-purchased");
  }

  const goBack = () => {
    router.goBack();
  };

  const getStep = (): number => {
    if (product) {
      return product.categoryId === CategoryType.Recarga ? 2 : 3;
    }
    return 0;
  };

  const getBackLabel = (): string => {
    if (product) {
      return product.categoryId === CategoryType.Recarga
        ? "Seleccionar recarga"
        : "Resumen";
    }
    return "";
  };

  const addPaymentMethodHandler = async () => {
    if (account.paymentMethod) {
      return;
    }
    await AccountService.updatePaymentMethod(account.id, {
      paymentMethod: {
        card: "Visa",
        bank: "Bank of America",
        accountNumber: "XXXX XXXX XXXX 1234",
        dateExpiry: "20 / 25",
      },
    });
    const accountData = await AccountService.getById(account.id);
    dispatch(allActions.linesActions.setCurrentAccount(accountData));
  };

  return (
    <Main
      className="amd__add-service-page__main"
      navigation={
        <AddServiceNav
          lblBack={getBackLabel()}
          lblNext="Pagar"
          onClickBack={goBack}
          onClickNext={goNext}
          totalSteps={getStep()}
          currentStep={getStep()}
          total={totalToPay}
        />
      }
    >
      {loading && (
        <div className="h-full flex justify-center items-center">
          <ReactLoading type={"bars"} color={"#0085CA"} />
        </div>
      )}

      {!loading && (
        <Payment
          account={account}
          line={line}
          onAddPaymentMethod={addPaymentMethodHandler}
        />
      )}
    </Main>
  );
};
