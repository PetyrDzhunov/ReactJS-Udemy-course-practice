import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../../store/cart-slice';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const { showCard, itemsCounter } = useSelector(state => state.cart);

  const showCardHandler = (e) => {
    dispatch(cartActions.toggleCard());
  };

  return (
    <button onClick={showCardHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsCounter}</span>
    </button>
  );
};

export default CartButton;
