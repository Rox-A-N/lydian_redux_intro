import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// reducer!
const count = (state = 0, action) => {
    console.log(`Hey!!! I'm a reducer y'all!!!`);
    console.log('action', action);
    if(action.type === 'INCREASE'){
      // DO THE THING
      return state +1;
    } else if(action.type === 'DECREASE'){
      return state -1;
    }
    return state;
};

const elementList = (state = ['oxygen', 'cartoon network'], action) => {
  console.log('action inside elementList', action.payload);
    if(action.type === 'ADD_ELEMENT'){
      return [...state, action.payload];
    }
  return state;
};

// store!
const storeInstance = createStore(
  combineReducers(
      {
          count,
          elementList,
      }
  ),
  applyMiddleware(
    logger
    )
);

// Provider lets redux and react talk to one another
ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);