import { useContext } from 'react';
import MealItemFrom from './MealItemFrom';
import CartContext from '../../../store/cart-context';

const MealItem = ({ id, name, description, price }) => {
  const cartCtx = useContext(CartContext);

  const priceConst = `$${price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className='meals__card__item'>
      <div>
        <h3>{name}</h3>
        <div className={'meals__card__item__description'}>{description}</div>
        <div className={'meals__card__item__price'}>{priceConst}</div>
      </div>
      <div><MealItemFrom id={id} onAddToCart={addToCartHandler} /></div>
    </li>
  );
}

export default MealItem;