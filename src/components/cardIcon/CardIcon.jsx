import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart-actions.js'
import './styles.scss';

const CardIcon = () => {
  return (
    <div className='cart-icon'>
      <ShoppingIcon  className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  );
};

export default CardIcon;