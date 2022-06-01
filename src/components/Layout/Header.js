import React from 'react';

import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';

const Header = ({ onShowCart }) => {
  return <>
    <header className='header-root'>
      <h1>ReactMeals</h1>
      <HeaderCartButton onClick={onShowCart}></HeaderCartButton>
    </header>
    <div className='mainImage-root'>
      <img src={mealsImage} alt='mealsImage' />
    </div>
  </>
}

export default Header;