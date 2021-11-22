import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
	showCard: false,
	itemsCounter: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initialCartState,
	reducers: {
		toggleCard(state) {
			state.showCard = !state.showCard;
		},
		countItems(state) {
			state.itemsCounter++;
		}
	}
})

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;