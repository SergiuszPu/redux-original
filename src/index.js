// External imports
import React from 'react'
import {render} from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {configureStore} from '@reduxjs/toolkit'

// Local imports
import App from './App'
import rootReducer from './reducers'

// Assets
import './index.css'


//createStore, to create the store that will maintain the Redux state
//applyMiddleware, to be able to use middleware, in this case thunk
//thunk, a middleware that allows us to make asynchronous actions in Redux
//composeWithDevTools, code that connects your app to Redux DevTools
//Provider, to wrap the entire application in Redux
// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


//Z Redux-Toolkit wyglada to tak!!
const store = configureStore({reducer: rootReducer})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)