import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { cartActions } from '../../store/cart-slice';
import { useSelector } from 'react-redux';


const Cart = (props) => {
  const { showCard, itemsCounter } = useSelector(state => state.cart);
  return (
    <>
      {showCard && (
        <Card className={classes.cart}>
          <h2>Your Shopping Cart</h2>
          <ul>
            <CartItem />
          </ul>
        </Card>
      )}
    </>
  )
};

export default Cart;
