import { Provider } from 'react-redux'
import { createStore } from 'redux'

import '../styles/globals.css'

import { data } from '../data'

// Create initial state
const INITIAL_STATE = {
  dataList: data,
  tabBar: []
}

// Create simple reducer
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return { ...state, tabBar: [...state.tabBar, action.payload] }
    case 'REMOVE_ITEM':
      return { ...state, tabBar: [...state.slice(0, action.i), ...state.slice(action.i + 1)] }
    default:
      return state
  }
}

// Create a store creator
const store = createStore(reducer, INITIAL_STATE)

function MyApp ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
