import './App.css';
import HomePage from './Screens/home/HomePage.jsx';
import ShopPage from './Screens/shop/ShopPage.jsx';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import SignInSignUp from './components/signInSignUp/SignInSignUp';


function App() {
	return (
    <div>
      <Header/>
			<Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUp}/>
			</Switch>
		</div>
	);
}

export default App;
