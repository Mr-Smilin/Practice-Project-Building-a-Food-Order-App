const CartItem = ({ name, amount, price, onRemove, onAdd }) => {
  const priceConst = `$${price.toFixed(2)}`;

  return (
    <li className='card__item'>
      <div>
        <h2 className="card__item__title">{name}</h2>
        <div className='card__item__summary'>
          <span className='card__item__summary__price'>{priceConst}</span>
          <span className='card__item__summary__amount'>x {amount}</span>
        </div>
      </div>
      <div className='card__item__actions'>
        <button className="card__item__actions__button" onClick={onRemove}>−</button>
        <button className="card__item__actions__button" onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
