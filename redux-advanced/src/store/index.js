
import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cart-slice";
import productReducer from "./product-slice";

let store = configureStore({
	reducer: {
		cart: cartReducer,
		products: productReducer
	}
});

export default store;