import React from "react";
import CustomButton from "../customButton/CustomButton";
import './styles.scss';


const CartDropDown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items' />
      <CustomButton>Go to Checkout</CustomButton>
    </div>
  );
};

export default CartDropDown;