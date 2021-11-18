
import CartContext from "./cart-context";
//this component will manage the cart context data
// and provide that context to all components that
// want to access to it

const CartProvider = (props) => {

	const addItemToCartHandler = (item) => {

	};

	const removeItemFromCartHandler = (id) => {

	};

	const cartContext = {
		items: [],
		totalAmount: 0,
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