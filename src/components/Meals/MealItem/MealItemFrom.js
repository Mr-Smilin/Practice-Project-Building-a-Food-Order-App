import { useRef, useState } from 'react';
import Input from '../../UI/Input';

const MealItemFrom = ({ id, onAddToCart }) => {
  const [amountIsValid, setAmountIsVaild] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = event => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsVaild(false);
      return;
    }

    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className='meals__card__item__form' onSubmit={submitHandler}>
      <Input ref={amountInputRef} label="Amount" className='meals__card__item__form__input' input={{
        id: id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
      }} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a vaild amount (1~5).</p>}
    </form>
  );
}

export default MealItemFrom;