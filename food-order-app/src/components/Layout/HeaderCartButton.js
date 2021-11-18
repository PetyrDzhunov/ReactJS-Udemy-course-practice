import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

import classes from './HeaderCartButton.module.css';


const HeaderCartButton = (props) => {
	const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

	const cartCtx = useContext(CartContext)
	const { items } = cartCtx
	const numberOfCartItems = items.reduce((currNumber, item) => {
		return currNumber + item.amount;
	}, 0);

	const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
	//change button classes to include the bump and then we set
	// a timer which removes that class so that when it's added 
	// again in the future it plays again;
	useEffect(() => {
		if (items.length === 0) {
			return;
		};

		setBtnIsHighlighted(true);

		const timer = setTimeout(() => {
			setBtnIsHighlighted(false);
		}, 300)

		return () => {
			clearTimeout(timer);
		};
	}, [items]);

	return (
		<button onClick={props.onClick} className={btnClasses}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;