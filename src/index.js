import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppStore from "./store/AppStore";
import { Provider } from 'react-redux'

AppStore.initialize();
ReactDOM.render(<Provider store={AppStore.store}><App /></Provider>, document.getElementById('root'));
