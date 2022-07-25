import {
  SET_SEARCH_TYPE,
  SET_CLEAN_ACCOUNT_FIND_DATA,
  SET_CUSTOMERS,
  SET_CURRENT_CUSTOMER,
  SET_CLEAN_SELECTED_SUBSCRIBE,
  SET_SELECTED_SUBSCRIBE,
  SET_ADD_DATA_SELECTED_SUBSCRIBE,
  SET_DO_SEARCH,
  SET_FILTERS,
  ADD_TEMP_ORDER
} from "./customer.action";

const setSearchType = (data: any) => ({
  type: SET_SEARCH_TYPE,
  payload: data,
});

const setCleanAccountFindData = () => ({
  type: SET_CLEAN_ACCOUNT_FIND_DATA,
});

const setCustomers = (data: any) => ({
  type: SET_CUSTOMERS,
  payload: data,
});

const setCurrentCustomer = (data: any) => ({
  type: SET_CURRENT_CUSTOMER,
  payload: data
});

const setFilters = (data: any) => ({
  type: SET_FILTERS,
  payload: data
});

const setCleanSelectedSubscribe = () => ({
  type: SET_CLEAN_SELECTED_SUBSCRIBE,
});

const setSelectedSubscribe = (data: any) => ({
  type: SET_SELECTED_SUBSCRIBE,
  payload: data,
});

const setAddDataSelectedSubscribe = (data: any) => ({
  type: SET_ADD_DATA_SELECTED_SUBSCRIBE,
  payload: data,
});

const setDoSearch = (data: boolean) => ({
  type: SET_DO_SEARCH,
  payload: data,
});

const addTempOrder = (data: any) => ({
  type: ADD_TEMP_ORDER,
  payload: data
});

export default {
  setDoSearch,
  setSearchType,
  setCleanAccountFindData,
  setCustomers,
  setCurrentCustomer,
  setCleanSelectedSubscribe,
  setSelectedSubscribe,
  setAddDataSelectedSubscribe,
  setFilters,
  addTempOrder
};
