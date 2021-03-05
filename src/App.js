import './App.css';
import HomePage from './Screens/home/HomePage.jsx';
import ShopPage from './Screens/shop/ShopPage.jsx';
import { Route, Switch } from 'react-router-dom';

function App() {
	return (
		<div>
			<Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/shop' component={ShopPage}/>
			</Switch>
		</div>
	);
}

export default App;
