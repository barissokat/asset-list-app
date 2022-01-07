import Search from '../../molecules/search/Search'
import styles from './Navbar.module.css'

const Navbar = props => {
  return (
    <div id='navbar' className={styles.navbar}>
      <div className='col-md-2'>
        <div className={styles.logo}>AMS OS</div>
      </div>
      <div className='col-md-8'>
        <div className='d-flex mt-2'>
          <div className={styles.tabbar}>
            <div type='button' className={styles.tabbar__addbutton}>+</div>
            <div type='button' class={styles.tabbar__homebutton}>Home</div>
            <div type='button' class={styles.tabbar__tab}>
              <span>ASSET</span><span>120320</span>
            </div>
            <div type='button' class={styles.tabbar__tab}>
              <span>ASSET</span><span>120321</span>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-2 pe-4'>
        <Search placeholder='> Start search' />
      </div>
    </div>
  )
}

export default Navbar
