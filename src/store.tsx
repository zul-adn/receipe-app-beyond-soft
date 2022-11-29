import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import {persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/es/storage";

import mainReducers from "./Reducer";


const config = {
  key: "primary",
  storage
}

const persistedReducer = persistReducer(config, mainReducers);
const sagaMiddleware = createSagaMiddleware();
let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
let persistor = persistStore(store);

export {store, persistor, sagaMiddleware};