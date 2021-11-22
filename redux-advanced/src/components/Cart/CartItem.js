import classes from './CartItem.module.css';
import { productsActions } from '../../store/product-slice';
import { useSelector, useDispatch } from 'react-redux';

const CartItem = (props) => {
  const { cartItems, productCount, price: totalPrice } = useSelector(state => state.products);
  const dispatch = useDispatch();

  const quantityIncreaseHandler = (e) => {
    dispatch(productsActions.increase(5));
  };

  const quantityDecreaseHandler = (e) => {
    dispatch(productsActions.decrease());
    console.log('clicked');
  };



  const content = cartItems.map(item => {
    return (
      <li key={item.id} className={classes.item}>
        <header>
          <h3>{item.title}</h3>
          <div className={classes.price}>
            ${totalPrice.toFixed(2)}{' '}
            <span className={classes.itemprice}>(${item.price.toFixed(2)}/item)</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{productCount}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={quantityDecreaseHandler}>-</button>
            <button onClick={quantityIncreaseHandler}>+</button>
          </div>
        </div>
      </li>
    );
  })


  return (
    content
  );
};

export default CartItem;
