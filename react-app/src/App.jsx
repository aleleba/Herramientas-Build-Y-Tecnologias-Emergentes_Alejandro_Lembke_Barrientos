import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

//Components
import LogIn from './log-in/LogIn.jsx';
import Productos from './productos/Productos.jsx';
import Carrito from './carrito/Carrito.jsx';

//Import Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
//Import Icons
import { faTh } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

//Router
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'; //Redirect: agregarlo después

//Font Awesome Icons
library.add(faTh)
library.add(faShoppingCart)
library.add(faInbox)
library.add(faSignOutAlt)

class App extends Component {
	
  render() {
    return (
	  <Router>
	  	<Switch>
			{/*Route LogIn*/}
			<Route path="/" exact render={ () => <LogIn /> }/>
			<Route path="/productos" exact render={ () => <Productos /> }/>
			<Route path="/carrito" exact render={() => <Carrito /> }/>
		</Switch>
	  </Router>
    );
  }
}

export default App;
