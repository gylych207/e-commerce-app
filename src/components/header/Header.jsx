import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/4.3 crown.svg';
import { auth } from '../firebase/utils.js';
import {connect} from 'react-redux';
import CardIcon from '../../components/cardIcon/CardIcon';
import CartDropDown from '../cart-dropdown/CartDropDown';

const Header = ({currentUser,hidden}) => {
	return (
		<div className="header">
			<Link className="logo-container" to="/">
				<Logo className="logo" />
			</Link>
			<div className="options">
				<Link to="/shop" className="option">
          SHOP
				</Link>
        <Link to="/shop" className="option">
          CONTACT
				</Link>
        { 
          currentUser ? 
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
            :
            <Link className='option' to='/signin'>SIGN IN</Link>
        }
        <CardIcon/>
      </div>
      {
        hidden ? null : 
        <CartDropDown/>
      }
      
    </div>
    
	)};

  const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
    currentUser,
    hidden 
  })

export default connect(mapStateToProps) (Header);
