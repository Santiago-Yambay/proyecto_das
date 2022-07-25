import { combineReducers } from "redux";
import addServiceReducer from "./add-service/add-service.reducer";

import customerReducer from "./customer/customer.reducer";
import userReducer from "./user/user.reducer";
import { productsReducer } from './products/products.reducer';
import { linesReducer } from './lines/lines.reducer';
import { telefonyReducer } from './telefony/telefony.reducer';
import { accountReducer } from './account/account.reducer';
import { operatorReducer } from './operators/operator.reducer';
import { shoppingCartReducer } from './shopping-cart/shoping-cart.reducer';

export default combineReducers({
  addService: addServiceReducer,
  customer: customerReducer,
  user: userReducer,
  products: productsReducer,
  lines: linesReducer,
  telefony: telefonyReducer,
  account: accountReducer,
  operator: operatorReducer,
  shoppingCart: shoppingCartReducer
});
