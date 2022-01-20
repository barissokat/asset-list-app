import { connect } from 'react-redux'
import { addItemToTabbar } from '../../../../redux/actions/actionCreators'

import styles from './SavedQueries.module.css'

const SavedQueries = ({ tabs, addItemToTabbarHandler }) => {
  return (
    <ul className='nav d-flex justify-content-center'>
      <li className='nav-item'>
        <a className='nav-link' href='#' onClick={() => addItemToTabbarHandler('tabb1')}>
          <span className={` bg-secondary ${styles.badge}`}>Saved Query 1</span>
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#' onClick={() => addItemToTabbarHandler('tabb2')}>
          <span className={` bg-secondary ${styles.badge}`}>Saved Query 2</span>
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#' onClick={() => addItemToTabbarHandler('tabb3')}>
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
    addItemToTabbarHandler: text => dispatch(addItemToTabbar(text))
  }
}

export default connect(mapStateToProps, mapActionToProps)(SavedQueries)
