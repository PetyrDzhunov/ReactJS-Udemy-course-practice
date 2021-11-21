import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import Checkout from './Checkout';



const Cart = (props) => {
	const [isCheckout, setIsCheckout] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [didSubmit, setDidSubmit] = useState(false);
	const cartCtx = useContext(CartContext);

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
	const hasItems = cartCtx.items.length > 0;
	const cartItemRemoveHandler = (id) => {
		cartCtx.removeItem(id);
	};

	const orderHandler = (e) => {
		setIsCheckout(true);
	};

	const submitOrderHandler = async (userData) => {
		// add error handling here.
		setIsSubmitting(true);

		await fetch('https://react-demo-d50c0-default-rtdb.europe-west1.firebasedatabase.app/orders.json', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				user: userData,
				orderedItems: cartCtx.items
			})
		});
		setIsSubmitting(false);
		setDidSubmit(true);
		cartCtx.clearCart();
	};

	const cartItemAddHandler = (item) => {
		cartCtx.addItem({ ...item, amount: 1 })
	};

	const cartItems = <ul className={classes['cart-items']}>
		{cartCtx.items
			.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onRemove={cartItemRemoveHandler.bind(null, item.id)}
					onAdd={cartItemAddHandler.bind(null, item)}
				/>
			))}
	</ul>

	const modalActions = (
		<div className={classes.actions}>
			<button onClick={props.onClose} className={classes['button--alt']}>Close</button>
			{hasItems && <button onClick={orderHandler} className={classes.button}>Order</button>}
		</div>
	);

	const cartModalContent = (
		<>
			{cartItems}
			<div className={classes.total}>
				<span>Total Amount</span>
				<span>{totalAmount}</span>
			</div>
			{isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose} />}
			{!isCheckout && modalActions}

		</>
	);

	const isSubmittingModalContent = <p>Sending order data...</p>;

	const didSubmitModalContent = (
		<>
			<p>Sucessfully sent the order!</p>
			<div className={classes.actions}>
				<button onClick={props.onClose} className={classes.button}>Close</button>
			</div>
		</>
	);

	return (
		<Modal onClose={props.onClose}>
			{!isSubmitting && !didSubmit && cartModalContent}
			{isSubmitting && isSubmittingModalContent}
			{!isSubmitting && didSubmit && didSubmitModalContent}
		</Modal>
	);
};

export default Cart;