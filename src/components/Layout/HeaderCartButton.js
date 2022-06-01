import { useContext, useState, useEffect } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce((curNumber, item) => curNumber + item.amount, 0);

  const btnClasses = `header__button ${btnIsHighlighted && 'button-bump'}`;

  useEffect(() => {
    if (items.length === 0) return;
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className='header__button__icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={'header__button__badge'}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;