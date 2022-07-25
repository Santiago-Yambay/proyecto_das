import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

import rootReducer from "./root-reducer";

//const store = createStore(rootReducer, devToolsEnhancer({}));
const store = createStore(rootReducer);

export default store;
