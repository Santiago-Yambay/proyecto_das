import {
  SET_PRODUCTS_SELECTED,
  REMOVE_PRODUCT,
  CLEAN_PRODUCTS_SELECTED,
  SET_ADDONS_SELECTED,
  REMOVE_ADDON_SELECTED,
  SET_PRODUCTS_SELECTED_TOTAL_AMOUNT,
  UPDATE_SCHEDULE,
  RESET_SCHEDULE
} from "./add-service.action";

const setProductsSelected = (data: any) => ({
  type: SET_PRODUCTS_SELECTED,
  payload: data,
});

const removeProduct = (data: any) => ({
  type: REMOVE_PRODUCT,
  payload: data,
});

const cleanProductsSelected = () => ({
  type: CLEAN_PRODUCTS_SELECTED,
});

const setAddonsSelected = (data: any) => ({
  type: SET_ADDONS_SELECTED,
  payload: data,
});

const removeAddonSelected = (data: any) => ({
  type: REMOVE_ADDON_SELECTED,
  payload: data,
});

const setProductsSelectedTotalAmount = (data: any) => ({
  type: SET_PRODUCTS_SELECTED_TOTAL_AMOUNT,
  payload: data,
});

const updateSchedule = (data: any) => ({
  type: UPDATE_SCHEDULE,
  payload: data,
});

const resetSchedule = () => ({
  type: RESET_SCHEDULE,
});

export default {
  setProductsSelected,
  removeProduct,
  cleanProductsSelected,
  setAddonsSelected,
  removeAddonSelected,
  setProductsSelectedTotalAmount,
  updateSchedule,
  resetSchedule
};
