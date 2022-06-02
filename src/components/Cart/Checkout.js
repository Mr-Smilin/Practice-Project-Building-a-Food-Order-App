import { useRef, useState } from 'react';

const isEmpty = value => value.trim() === '';
const isNotThreeChars = value => value.trim().length !== 3;

const Checkout = ({ onConfirm, onCancel }) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = !isNotThreeChars(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postal: enteredPostalIsValid,
      city: enteredCityIsValid,
    })

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalIsValid && enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    })
  };

  return (
    <form className='checkout-root' onSubmit={confirmHandler}>
      <div className={`checkout__control ${!formInputsValidity.name && 'checkout__control-invalid'}`}>
        <label className='checkout__control__label' htmlFor='name'>Your Name</label>
        <input className='checkout__control__input' type='text' id='name' ref={nameInputRef} />
        {!formInputsValidity.name && <p>Please enter a vaild name!</p>}
      </div>
      <div className={`checkout__control ${!formInputsValidity.street && 'checkout__control-invalid'}`}>
        <label className='checkout__control__label' htmlFor='street'>Street</label>
        <input className='checkout__control__input' type='text' id='street' ref={streetInputRef} />
        {!formInputsValidity.street && <p>Please enter a vaild street!</p>}
      </div>
      <div className={`checkout__control ${!formInputsValidity.postal && 'checkout__control-invalid'}`}>
        <label className='checkout__control__label' htmlFor='postal'>Postal Code</label>
        <input className='checkout__control__input' type='text' id='postal' ref={postalInputRef} />
        {!formInputsValidity.postal && <p>Please enter a vaild postal (3 characters long)!</p>}
      </div>
      <div className={`checkout__control ${!formInputsValidity.city && 'checkout__control-invalid'}`}>
        <label className='checkout__control__label' htmlFor='city'>City</label>
        <input className='checkout__control__input' type='text' id='city' ref={cityInputRef} />
        {!formInputsValidity.city && <p>Please enter a vaild city!</p>}
      </div>
      <div className='checkout__actions'>
        <button className='checkout__actions__button' type='button' onClick={onCancel}>
          Cancel
        </button>
        <button className='checkout__actions__submit'>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;