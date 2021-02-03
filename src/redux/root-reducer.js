import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// set up to save cart items in local storage
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"] //*same name as reducer - but a string
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);
