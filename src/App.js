import './App.css';
import React from 'react';
import HomePage from './Screens/home/HomePage.jsx';
import ShopPage from './Screens/shop/ShopPage.jsx';

import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/header/Header';
import SignInSignUp from './components/signInSignUp/SignInSignUp';
import { auth, createUserProfileDocument } from './components/firebase/utils';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { setCurrentUser } from './redux/user/user-actions';
import {selectCurrentUser} from './redux/user/user-selector';
import Checkout from './Screens/checkout/Checkout';


class App extends React.Component {
	unsubscribeFromAuth = null;

	componentDidMount() {
		const { setCurrentUser } = this.props;
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);
				userRef.onSnapshot((snapShot) => {
					setCurrentUser({
						id: snapShot.id,
						...snapShot.data()
					});
				});
			}
			setCurrentUser(userAuth);
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}
	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route exact path="/checkout" component={Checkout} />
				  <Route
            exact
            path='/signin'
            render={() =>
              this.props.currentUser ? (
                <Redirect to='/' />
              ) : (
                <SignInSignUp/>
              )
            }
          />
				</Switch>
			</div>
		);
	}
}
const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser
});
const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(setCurrentUser(user))
});
export default connect(null, mapDispatchToProps)(App);
