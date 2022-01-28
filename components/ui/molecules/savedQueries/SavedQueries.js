import { connect } from 'react-redux'
import { addItemToTabbar } from '../../../../redux/actions/actionCreators'

import styles from './SavedQueries.module.css'

const SavedQueries = ({ tabs, addItemToTabbar }) => {
  const addItemToTabbarHandler = text => {
    const isDuplicated = tabs.some(tab => tab.text === text)
    if (!isDuplicated) {
      addItemToTabbar(text)
    }
  }
  return (
    <ul className='nav d-flex justify-content-center'>
      <li className='nav-item'>
        <a
          className='nav-link' href='#'
          onClick={() => addItemToTabbarHandler('TAB1')}
        >
          <span className={` bg-secondary ${styles.badge}`}>Saved Query 1</span>
        </a>
      </li>
      <li className='nav-item'>
        <a
          className='nav-link' href='#'
          onClick={() => addItemToTabbarHandler('TAB2')}
        >
          <span className={` bg-secondary ${styles.badge}`}>Saved Query 2</span>
        </a>
      </li>
      <li className='nav-item'>
        <a
          className='nav-link' href='#'
          onClick={() => addItemToTabbarHandler('TAB3')}
        >
          <span className={` bg-secondary ${styles.badge}`}>Saved Query 3</span>
        </a>
      </li>
    </ul>
  )
}

const mapStateToProps = state => {
  return {
    tabs: state.tabs
  }
}

const mapActionToProps = dispatch => {
  return {
    addItemToTabbar: text => dispatch(addItemToTabbar(text))
  }
}

export default connect(mapStateToProps, mapActionToProps)(SavedQueries)
