import { useContext, useState } from 'react';

import Modal from '../UI/Modal';

import CartItem from './CartItem';

import CartContext from '../../store/cart-context';

import Checkout from './Checkout';

const Cart = ({ onHideCart }) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const cartCtx = useContext(CartContext);
  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 });
  };
  const orderHandler = () => {
    setIsCheckout(true);
  };
  const submitOrderHandler = async userData => {
    setIsSubmitting(true);
    await fetch('https://foodorder-7a19c-default-rtdb.firebaseio.com/order.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items,
      })
    });
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart();
  };
  const cartItems = (
    <ul className='card-root'>
      {cartCtx.items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)} />))}
    </ul>);
  const hasItem = cartCtx.items.length > 0;
  const modalActions = (<div className='actions-root'>
    <button className={'actions__button-alt'} onClick={onHideCart}>Close</button>
    {hasItem && <button className='actions__button' onClick={orderHandler}>Order</button>}
  </div>);
  const cartModalContent = (
    <>
      {cartItems}
      <div className='total-root'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout ? <Checkout onConfirm={submitOrderHandler} onCancel={onHideCart} /> : modalActions}
    </>);
  const isSubmittingModalContent = <p>Sending order data...</p>;
  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!!</p>
      <div className='actions-root'>
        <button className='actions__button' onClick={onHideCart}>Close</button>
      </div>
    </>
  );
  return (
    <Modal onClick={onHideCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};

export default Cart;