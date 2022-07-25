const INITIAL_STATE = {
  showProfileMenu: false,
  userData: {
    name: "Ted Martínez",
  },
};

const userReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case "SET_USER_DATA":
      return {
        ...state,
        userData: action.payload,
      };

    case "SET_SHOW_PROFILE_MENU":
      return {
        ...state,
        showProfileMenu: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
