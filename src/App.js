import './App.css';
import React from 'react';
import HomePage from './Screens/home/HomePage.jsx';
import ShopPage from './Screens/shop/ShopPage.jsx';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import SignInSignUp from './components/signInSignUp/SignInSignUp';
import { auth,createUserProfileDocument } from './components/firebase/utils';


class App extends React.Component{
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({ 
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        })
      }
      this.setState({currentUser:userAuth})
  })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp}/>
        </Switch>
      </div>
    );
  }
	
}

export default App;
