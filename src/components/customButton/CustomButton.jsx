import React from 'react';
import './styles.scss';
const CustomButton = ({children,isGoogleSignIn, ...otherProps}) => {
  return (
    <div className={`${isGoogleSignIn ? 'google-sign-in':''}'custom-button'`} {...otherProps}>
      {children}
    </div>
  );
};

export default CustomButton;