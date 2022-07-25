const setUserData = (data: any) => ({
  type: "SET_USER_DATA",
  payload: data,
});

const setShowProfileMenu = (data: any) => ({
  type: "SET_SHOW_PROFILE_MENU",
  payload: data,
});

export default {
  setUserData,
  setShowProfileMenu,
};
