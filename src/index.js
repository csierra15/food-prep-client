import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main/Main'
import registerServiceWorker from './registerServiceWorker'
import './stylesheets/index.css'
import { Provider } from 'react-redux'
import { store, persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main />
    </PersistGate>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
