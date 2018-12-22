import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux' //communicates with the store
import {createStore, applyMiddleware} from 'redux' //creates the main storage of data

import App from './components/App';
import reducers from './reducers'; //departments

import thunk from 'redux-thunk'//middleware in charge of doing async requetss
const store = createStore(reducers,applyMiddleware(thunk)); 
//the middleware comes between dispatch and the reducers

ReactDOM.render( //create the main storage of info
  //App is wrapper bc it needs to get data from the provider
  <Provider store = {store}>  
      <App />
    </Provider>,
    document.querySelector('#root')
  );