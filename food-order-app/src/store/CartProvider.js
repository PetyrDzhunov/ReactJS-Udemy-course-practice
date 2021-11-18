import { useReducer } from "react";
import CartContext from "./cart-context";
//this component will manage the cart context data
// and provide that context to all components that
// want to access to it

const ACTIONS = {
	addItem: "ADD_ITEM_TO_CART",
	removeItem: "REMOVE_ITEM_FROM_CART"
}

const defaultCartState = {
	items: [],
	totalAmount: 0
};

const cartReducer = (state, action) => {
	switch (action.type) {
		case "ADD_ITEM_TO_CART":
			const updatedItems = state.items.concat(action.item);
			const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount
			return {
				items: updatedItems,
				totalAmount: updatedTotalAmount
			};
		case "REMOVE_ITEM_FROM_CART":
			return
	}


	return defaultCartState;
};

const CartProvider = (props) => {
	const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);


	const addItemToCartHandler = (item) => {
		dispatchCartAction({ type: ACTIONS.addItem, item: item })
	};

	const removeItemFromCartHandler = (id) => {
		dispatchCartAction({ type: ACTIONS.addItem, id: id })

	};

	const cartContext = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemToCartHandler,
		removeItem: removeItemFromCartHandler
	};

	return (
		<CartContext.Provider value={cartContext}>
			{props.children}
		</CartContext.Provider>
	);
};

export default CartProvider;