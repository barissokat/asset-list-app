import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import { tabs } from '../redux/reducers/index'
import Head from 'next/head'

import '../styles/globals.css'
import '../styles/stepzilla.css'
import '../styles/devextreme/DataGrid.css'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/asset.scss'

const reducers = { tabs }
const rootReducer = combineReducers(reducers)

const INITIAL_STATE = {
  tabs: [{ text: 'TAB' }]
}

// Create a store creator
const store = createStore(rootReducer, INITIAL_STATE)

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link href='https://cdnjs.cloudflare.com/ajax/libs/devextreme/21.2.5/css/dx.light.compact.css' rel='stylesheet' />
        {/* <link href='https://cdnjs.cloudflare.com/ajax/libs/devextreme/21.2.4/css/dx.material.blue.light.compact.css' rel='stylesheet' /> */}
      </Head>
      <body className='dx-viewport'>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </body>
    </>
  )
}

export default MyApp
