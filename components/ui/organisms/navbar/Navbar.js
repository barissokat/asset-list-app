import { connect } from 'react-redux'
import { removeItemFromTabbar } from '../../../../redux/actions/actionCreators'

import Search from '../../molecules/search/Search'

import styles from './Navbar.module.css'

const Navbar = ({ tabs, removeItemFromTabbarHandler }) => {
  return (
    <div id='navbar' className={styles.navbar}>
      <div className='col-md-2'>
        <div className={styles.logo}>AMS OS</div>
      </div>
      <div className='col-md-8'>
        <div className='d-flex mt-2'>
          <div className={styles.tabbar}>
            <div type='button' className={styles.tabbar__addbutton}>+</div>
            <div type='button' className={styles.tabbar__homebutton}>Home</div>
            <div type='button' className={styles.tabbar__tab}>
              <span>ASSET</span><span>120320</span>
            </div>
            {tabs.map((tab, index) =>
              <div key={index} type='button' className={styles.tabbar__tab}>
                <span>{tab.text}</span>
                <span onClick={() => removeItemFromTabbarHandler(tab.text)}>x</span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className='col-md-2 pe-4'>
        <Search placeholder='> Start search' />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    tabs: state.tabs
  }
}

const mapActionToProps = dispatch => {
  return {
    removeItemFromTabbarHandler: text => dispatch(removeItemFromTabbar(text))
  }
}

export default connect(mapStateToProps, mapActionToProps)(Navbar)
