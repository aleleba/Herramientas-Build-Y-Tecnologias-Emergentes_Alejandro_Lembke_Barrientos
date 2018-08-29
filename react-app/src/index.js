import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

//import bootstrap
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

//let productos = ProductosController.getAll();

//console.log(productos);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
