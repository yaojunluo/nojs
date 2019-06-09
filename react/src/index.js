import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'
import App from './App';
import * as serviceWorker from './serviceWorker';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'



const persistConfig = {
    key: 'root',
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, reducer);
  let store = createStore(persistedReducer)
  let persistor = persistStore(store);
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
        
    </Provider>, 
    document.getElementById('root')
    );


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
