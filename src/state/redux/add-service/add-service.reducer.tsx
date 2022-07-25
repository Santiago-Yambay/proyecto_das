import {
  REMOVE_PRODUCT,
  SET_PRODUCTS_SELECTED,
  CLEAN_PRODUCTS_SELECTED,
  SET_ADDONS_SELECTED,
  REMOVE_ADDON_SELECTED,
  SET_PRODUCTS_SELECTED_TOTAL_AMOUNT,
  UPDATE_SCHEDULE,
  RESET_SCHEDULE,
} from "./add-service.action";

import { AddServiceState, AddServiceStep } from "./add-service.type";

const scheduleBase = [
  { value: "06:30", state: 1 },
  { value: "07:00", state: 1 },
  { value: "07:30", state: 1 },
  { value: "08:00", state: 1 },
  { value: "08:30", state: 1 },
  { value: "09:00", state: 1 },
  { value: "09:30", state: 1 },
  { value: "10:00", state: 1 },
  { value: "10:30", state: 3 },
  { value: "11:00", state: 3 },
  { value: "11:30", state: 1 },
  { value: "12:00", state: 3 },
  { value: "12:30", state: 3 },
  { value: "13:00", state: 3 },
  { value: "13:30", state: 1 },
  { value: "14:00", state: 3 },
  { value: "14:30", state: 3 },
  { value: "15:00", state: 3 },
  { value: "15:30", state: 1 },
  { value: "16:00", state: 1 },
  { value: "16:30", state: 1 },
  { value: "17:00", state: 1 },
  { value: "17:30", state: 1 },
  { value: "18:00", state: 1 },
  { value: "18:30", state: 1 },
  { value: "19:00", state: 1 },
  { value: "19:30", state: 1 },
  { value: "20:00", state: 1 },
  { value: "20:30", state: 1 },
  { value: "21:00", state: 1 },
  { value: "21:30", state: 1 },
  { value: "22:00", state: 1 },
  { value: "22:30", state: 1 },
  { value: "23:00", state: 1 },
  { value: "23:30", state: 1 },
];

const INITIAL_STATE: AddServiceState = {
  currentStep: AddServiceStep.ProductsSelection,
  schedule: [...scheduleBase],
  availableProducts: [
    {
      categoryId: 1,
      title: "TV Packages",
      img: 'category1.jpg',
      products: [
        {
          id: 1,
          categoryId: 1,
          name: "TV",
          type: "Essential",
          price: 46.8,
          description: "Enjoy more with over 38+ channels with 10 HD channels",
          typeProduct: "TV Packages",
        },
        {
          id: 2,
          categoryId: 1,
          name: "TV",
          type: "Plus",
          price: 83.2,
          description: "Enjoy more with over 85+ channels with 38 HD channels",
          typeProduct: "TV Packages",
        },
        {
          id: 3,
          categoryId: 1,
          name: "TV",
          type: "Max",
          price: 112.75,
          description: "Enjoy more with over 109+ channels with 41 HD channels",
          typeProduct: "TV Packages",
        },
      ],
    },
    {
      categoryId: 2,
      title: "Internet",
      img: 'category2.jpg',
      products: [
        {
          id: 21,
          categoryId: 2,
          name: "Internet",
          type: "100",
          price: 109.0,
          description: "100 Mbps Max download / 20 Mbps Max upload",
          typeProduct: "Internet",
        },
        {
          id: 22,
          categoryId: 2,
          name: "Internet",
          type: "200",
          price: 149.0,
          description: "200 Mbps Max download / 25 Mbps Max upload",
          typeProduct: "Internet",
        },
        {
          id: 23,
          categoryId: 2,
          name: "Internet",
          type: "300",
          price: 189.0,
          description: "300 Mbps Max download / 30 Mbps Max upload",
          typeProduct: "Internet",
        },
        {
          id: 24,
          categoryId: 2,
          name: "Internet",
          type: "500",
          price: 219.0,
          description: "500 Mbps Max download / 30 Mbps Max upload",
          typeProduct: "Internet",
        },
      ],
    },
    {
      categoryId: 3,
      title: "Chippie Prepaid",
      img: 'category3.jpg',
      products: [
        {
          id: 41,
          categoryId: 3,
          name: "1 Day",
          type: "Plan",
          price: 5.0,
          description: "500 MB / 1000 Min / 50 SMS",
          typeProduct: "Chippie Prepaid",
        },
        {
          id: 42,
          categoryId: 3,
          name: "3 Day",
          type: "Plan",
          price: 12.0,
          description: "1 GB / 1000 Min / 90 SMS",
          typeProduct: "Chippie Prepaid",
        },
        {
          id: 43,
          categoryId: 3,
          name: "7 Day",
          type: "Plan",
          price: 24.0,
          description: "2 GB / Unlimited* / Unlimited*",
          typeProduct: "Chippie Prepaid",
        },
        {
          id: 44,
          categoryId: 3,
          name: "30 Day",
          type: "Plan",
          price: 135.0,
          description: "10 GB / Unlimited* / Unlimited*",
          typeProduct: "Chippie Prepaid",
        },
      ],
    },
    {
      categoryId: 4,
      title: "Chippie Postpaid",
      img: 'category4.jpg',
      products: [
        {
          id: 61,
          categoryId: 4,
          name: "BASIC",
          type: "5GB of Data",
          price: 129.0,
          description:
            "Rollover Data / Unlimited calling / Unlimited SMS / Device included",
          typeProduct: "Chippie Postpaid",
        },
        {
          id: 62,
          categoryId: 4,
          name: "REGULAR",
          type: "12GB of Data",
          price: 189.0,
          description:
            "Rollover Data / Unlimited calling / Unlimited SMS / Device included",
          typeProduct: "Chippie Postpaid",
        },
        {
          id: 63,
          categoryId: 4,
          name: "PLUS",
          type: "30GB of Data",
          price: 349.0,
          description:
            "Rollover Data / Unlimited calling / Unlimited SMS / Device included",
          typeProduct: "Chippie Postpaid",
        },
      ],
    },
    {
      categoryId: 5,
      title: "Chippie Hybrid",
      img: 'category5.jpg',
      products: [
        {
          id: 81,
          categoryId: 5,
          name: "Chippie",
          type: "Plus",
          price: 89.0,
          description:
            "4GBs with rollover data/Unlimited calling/200 Offnet/International Mins/100 SMS",
          typeProduct: "Chippie Hybrid",
        },
        {
          id: 82,
          categoryId: 5,
          name: "Chippie",
          type: "Max",
          price: 129.0,
          description:
            "8GBs with rollover data/Unlimited calling/300 Offnet/International Mins/100 SMS",
          typeProduct: "Chippie Hybrid",
        },
        {
          id: 83,
          categoryId: 5,
          name: "Chippie",
          type: "Family Plus",
          price: 200.0,
          description:
            "20GBs with rollover data/Unlimited calling/500 Offnet/International Mins/200 SMS",
          typeProduct: "Chippie Hybrid",
        },
        {
          id: 84,
          categoryId: 5,
          name: "Chippie",
          type: "Family Max",
          price: 280.0,
          description:
            "40GBs with rollover data/Unlimited calling/1000 Offnet/International Mins/200 SMS",
          typeProduct: "Chippie Hybrid",
        },
      ],
    },
    {
      categoryId: 6,
      title: "Home Phone",
      img: 'category6.jpg',
      products: [
        {
          id: 101,
          categoryId: 6,
          name: "Talk",
          type: "500",
          price: 75.0,
          description: "Includes 500 free minutes",
          typeProduct: "Home Phone",
        },
        {
          id: 102,
          categoryId: 6,
          name: "Talk",
          type: "250",
          price: 43.0,
          description: "Includes 250 free minutes",
          typeProduct: "Home Phone",
        },
        {
          id: 101,
          categoryId: 6,
          name: "Talk",
          type: "1500",
          price: 191.0,
          description: "Includes 1500 free minutes",
          typeProduct: "Home Phone",
        },
      ],
    },
  ],
  productsSelected: [],
  addOns: [
    {
      id: 1,
      title: "STAR PREMIUM",
      description: "Per month",
      price: 19.07,
      typeProduct: "TV Packages",
    },
    {
      id: 2,
      title: "HBO Max",
      description: "Per month",
      price: 12.0,
      typeProduct: "TV Packages",
    },
    {
      id: 3,
      title: "ALL IN MOVIE COMBO",
      description: "Per month",
      price: 30.0,
      typeProduct: "TV Packages",
    },
    {
      id: 4,
      title: "IN THE KNOW",
      description: "Per month",
      price: 15.0,
      typeProduct: "TV Packages",
    },
    // {
    //   id: 21,
    //   title: "Virus Protection",
    //   description: "Protection for all",
    //   price: 1.99,
    //   typeProduct: "Internet",
    // },
    // {
    //   id: 22,
    //   title: "50GB cloud",
    //   description: "Your info on the cloud",
    //   price: 2.99,
    //   typeProduct: "Internet",
    // },
  ],
  productsSelectedTotalAmount: 0.0,
};

const addServiceReducer = (state = INITIAL_STATE, action: any) => {
  let amount: any;
  switch (action.type) {
    case SET_PRODUCTS_SELECTED:
      amount = state.productsSelectedTotalAmount += action.payload.price;
      return {
        ...state,
        productsSelected: [...state.productsSelected, action.payload],
        productsSelectedTotalAmount: amount,
      };

    case REMOVE_PRODUCT:
      amount = state.productsSelectedTotalAmount -= action.payload.price;
      const index = state.productsSelected.indexOf(action.payload);
      const cloneProducts = [...state.productsSelected];
      cloneProducts.splice(index, 1);

      return {
        ...state,
        productsSelected: cloneProducts,
        productsSelectedTotalAmount: amount,
      };

    case CLEAN_PRODUCTS_SELECTED:
      return {
        ...state,
        productsSelected: [],
        productsSelectedTotalAmount: 0.0,
      };

    case SET_ADDONS_SELECTED:
      amount = state.productsSelectedTotalAmount += action.payload.data.price;
      const cloneProductsSelected: any = [...state.productsSelected];
      cloneProductsSelected[action.payload.index].addOnsSelected.push(
        action.payload.data
      );

      return {
        ...state,
        productsSelected: cloneProductsSelected,
        productsSelectedTotalAmount: amount,
      };

    case REMOVE_ADDON_SELECTED:
      amount = state.productsSelectedTotalAmount -= action.payload.data.price;
      const removeAddOnSelected: any = [...state.productsSelected];
      removeAddOnSelected[action.payload.indexProduct].addOnsSelected.splice(
        action.payload.indexAddOn,
        1
      );

      return {
        ...state,
        productsSelected: removeAddOnSelected,
        productsSelectedTotalAmount: amount,
      };

    case SET_PRODUCTS_SELECTED_TOTAL_AMOUNT:
      let totalAmount: number = (state.productsSelectedTotalAmount +=
        action.payload);

      return {
        ...state,
        productsSelectedTotalAmount: totalAmount,
      };

    case UPDATE_SCHEDULE:
      const times = [...scheduleBase];
      const indexTime = times.indexOf(action.payload.time);
      times[indexTime] = { ...times[indexTime], state: action.payload.state };
      return {
        ...state,
        schedule: times,
      };

    case RESET_SCHEDULE:
      return {
        ...state,
        schedule: [...scheduleBase],
      };

    default:
      return state;
  }
};

export default addServiceReducer;
