import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import { useContext } from 'react';
import CartContext from '../../../store/cart-context';

const MealItem = ({ meal, id }) => {
	const price = `$${meal.price.toFixed(2)}`
	let cartCtx = useContext(CartContext);

	const addToCartHandler = (amount) => {
		cartCtx.addItem({
			id,
			name: meal.name,
			amount: amount,
			price: meal.price
		});
	};

	return (
		<li className={classes.meal}>
			<div>
				<h3>{meal.name}</h3>
				<div className={classes.description}>{meal.description}</div>
				<div className={classes.price}>{price}</div>
			</div>
			<div>
				<MealItemForm onAddToCart={addToCartHandler} id={meal.id} />
			</div>
		</li>
	);
}

export default MealItem;