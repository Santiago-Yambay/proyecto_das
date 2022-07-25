import customerActions from "./customer/customer.action-creator";
import addServiceActions from "./add-service/add-service.action-creator";
import userActions from "./user/user.actions";
import linesActions from './lines/lines.action-creator';
import productsActions from './products/products.action-creator';
import telefonyActions from './telefony/telefony.action-creator';
import accountActions from './account/account.action-creator';
import operatorActions from './operators/operator.action-creator';
import shoppingCartActions from './shopping-cart/shopping-cart.action-creator';

const allActions = {
  addServiceActions,
  customerActions,
  userActions,
  linesActions,
  productsActions,
  telefonyActions,
  accountActions,
  operatorActions,
  shoppingCartActions
};

export default allActions;
