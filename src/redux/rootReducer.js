import { combineReducers } from "redux";

import shopReducer from "./Shopping/shopping-reducer";

const rootReducer = combineReducers({
  shopReducer,
});

export default rootReducer;
