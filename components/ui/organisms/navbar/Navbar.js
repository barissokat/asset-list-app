import styles from './Navbar.module.css'

const Navbar = props => {
  return (
    <div id='navbar' className={styles.navbar}>
      <div className={styles.logo}>AMS OS</div>
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
      <div className={styles.search}>
        <input type='text' className={styles.search__input} placeholder='> Start search' aria-describedby='basic-addon1' />
        <div type='button' className={styles.search__button}>III</div>
      </div>
    </div>
  )
}

export default Navbar
