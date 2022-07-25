import {
  SET_DO_SEARCH,
  SET_SEARCH_TYPE,
  SET_CLEAN_ACCOUNT_FIND_DATA,
  SET_CUSTOMERS,
  SET_CURRENT_CUSTOMER,
  SET_CLEAN_SELECTED_SUBSCRIBE,
  SET_SELECTED_SUBSCRIBE,
  SET_ADD_DATA_SELECTED_SUBSCRIBE,
  SET_FILTERS,
  ADD_TEMP_ORDER
} from "./customer.action";

import { CustomerState } from "./customer.type";

const INITIAL_STATE = {
  searchType: "user",
  customers: null,
  currentCustomer: null,
  doSearch: false,
  selectedSubscribe: {},
  filters: {
    user: "",
    phone: "",
  },
  tempOrders: {}
};

const customerReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case SET_DO_SEARCH:
      return {
        ...state,
        doSearch: action.payload,
      };

    case SET_SEARCH_TYPE:
      return {
        ...state,
        searchType: action.payload,
      };

    case SET_CLEAN_ACCOUNT_FIND_DATA:
      return {
        ...state,
        customers: null,
      };

    case SET_CUSTOMERS:
      return {
        ...state,
        customers: action.payload,
      };

    case SET_FILTERS:
      return {
        ...state,
        filters: action.payload,
      };

    case SET_CURRENT_CUSTOMER:
      return {
        ...state,
        currentCustomer: action.payload,
      };

    case SET_CLEAN_SELECTED_SUBSCRIBE:
      return {
        ...state,
        selectedSubscribe: null,
      };

    case SET_SELECTED_SUBSCRIBE:
      return {
        ...state,
        selectedSubscribe: action.payload,
      };

    case SET_ADD_DATA_SELECTED_SUBSCRIBE:
      return Object.assign({}, state, {
        selectedSubscribe: {
          ...state.selectedSubscribe,
          [action.payload.name]: action.payload.data,
        },
      });

    case ADD_TEMP_ORDER:
      const tempOrders: any = {...state.tempOrders};
      if (!tempOrders[action.payload.accountExternalId]) {
        tempOrders[action.payload.accountExternalId] = [];
      }
      tempOrders[action.payload.accountExternalId].push(action.payload.order);
      console.log('ORDER', tempOrders);
      return {
        ...state,
        tempOrders
      };

    default:
      return state;
  }
};

export default customerReducer;
