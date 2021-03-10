import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag';
import './styles.scss';

const CardIcon = () => {
  return (
    <div className='card-icon'>
      <ShoppingIcon  className='shopping-icon'/>
      <span className='item-count'>0</span>
    </div>
  );
};

export default CardIcon;