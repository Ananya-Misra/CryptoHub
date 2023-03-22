import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './app/store';
ReactDOM.render(
<Router>
    {/* every single component in app will have access to store variable */}
    <Provider store={store}>
    <App/>
    </Provider>
</Router>, document.getElementById('root'));