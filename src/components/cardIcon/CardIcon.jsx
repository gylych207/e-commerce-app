import React from 'react';
import { connect } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {toggleCartHidden} from '../../redux/cart/cart-actions.js';
import {selectCartItemsCount} from '../../redux/cart/cart-selectors';
import {createStructuredSelector} from 'reselect';
import './styles.scss';

const CardIcon = ({toggleCartHidden,itemCount}) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon  className='shopping-icon'/>
      <span className='item-count'>{itemCount}</span>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: ()=>dispatch(toggleCartHidden())
})
const mapStateToProps = createStructuredSelector({
itemCount:selectCartItemsCount
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
) (CardIcon);