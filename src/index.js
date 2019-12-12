import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { compostWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

const store = createStore();

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));

