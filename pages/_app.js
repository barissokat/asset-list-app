import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { tabs } from '../redux/reducers/index'

import '../styles/globals.css'

const reducers = { tabs }
const rootReducer = combineReducers(reducers)

const INITIAL_STATE = {
  tabs: [{ text: 'tabb' }]
}

// Create a store creator
const store = createStore(rootReducer, INITIAL_STATE)

function MyApp ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
