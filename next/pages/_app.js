
import React from 'react'
import App, { Container } from 'next/app'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import httpheader from '../config/http'

import reducer from '../redux/index'

const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, reducer);
let store = createStore(persistedReducer)
let persistor = persistStore(store);

export default class MyApp extends App {
    render() {
        httpheader.init();
        const { Component, pageProps } = this.props
        return <Container>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                        <Component {...pageProps} />
                </PersistGate>

            </Provider>
        </Container>
    }
}