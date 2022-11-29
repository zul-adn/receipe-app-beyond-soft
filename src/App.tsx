import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import MainApp from '../src/Pages/Root';
import {
  store,
  persistor,
  sagaMiddleware
} from './store';

import mainSagas from "./Sagas";

sagaMiddleware.run(mainSagas);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <MainApp />
      </PersistGate>
    </Provider>
  );
}

export default App;
