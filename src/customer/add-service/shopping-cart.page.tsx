import { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RenewalType, Subscription } from '@models/subscription.model';
import { Product } from '@models/product.model';
import { Main } from '@components/layout/main.component';
import { AddServiceNav } from './components/add-service-nav.component';
import { currentLineSelector } from '@state/redux/lines/lines.selector';
import { cartSelector, totalCartSelector } from '@state/redux/shopping-cart/shopping-cart.selector';
import { ShoppingCart } from './components/products/shopping-cart.component';
import allActions from '@state/redux/actions';

export const ShoppingCartPage: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const line = useSelector(currentLineSelector);
  const cart = useSelector(cartSelector);
  const total = useSelector(totalCartSelector);
  const router = useHistory();

  useEffect(() => {
    dispatch(allActions.linesActions.removeSubscriptions());
  }, []);

  const onBack = () => {
    router.push(`/customer/${line.id}`);
  }

  const onNext = () => {
    const subscriptions: Subscription[] = cart.map((product: Product) => ({
      productId: product.id,
      activated: true,
      availableData: product.dataCapacity,
      remainingDays: product.validityDays,
      renewalType: RenewalType.Once
    }));
    dispatch(allActions.linesActions.setSubscriptions(subscriptions));
    router.push("payment");
  }

  return (
    <Main
    navigation={
      <AddServiceNav 
        line={line}
        lblBack="Customer"
        lblNext="Comprar"
        onClickBack={onBack}
        onClickNext={onNext}
        totalSteps={3}
        currentStep={1}
        total={total}
      />
    }
    >
      <ShoppingCart products={cart} />
    </Main>
  );
}