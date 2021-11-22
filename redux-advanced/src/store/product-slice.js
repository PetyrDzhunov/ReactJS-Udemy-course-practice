import { createSlice } from "@reduxjs/toolkit";

const initialProductsState = {
	cartItems: [{
		id: 1,
		title: 'test Item',
		quantity: 3,
		total: 17,
		price: 6,
	}],
	productCount: 1,
	price: 0
}

const productsSlice = createSlice({
	name: "products",
	initialState: initialProductsState,
	reducers: {
		// addProductToCart(state) {
		// 	state.products.push();
		// },
		increase(state, action) {
			state.productCount++;
			state.price += action.payload

		},
		decrease(state) {
			state.productCount--;
		},

	}
});

export const productsActions = productsSlice.actions;

export default productsSlice.reducer;