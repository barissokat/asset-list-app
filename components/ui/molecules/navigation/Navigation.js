import styles from './Navigation.module.css'

const Navigation = props => {
  return (
    <ul className='nav d-flex justify-content-center'>
      <li className={`nav-item ${styles.navigation__navitem} ${styles.active}`}>
        <a className={`${styles.navigation__navlink}`} aria-current='page' href='#'>All</a>
      </li>
      <li className={`nav-item ${styles.navigation__navitem}`}>
        <a className={`${styles.navigation__navlink}`} aria-current='page' href='#'>Asset</a>
      </li>
      <li className={`nav-item ${styles.navigation__navitem}`}>
        <a className={`${styles.navigation__navlink}`} aria-current='page' href='#'>Location</a>
      </li>
      <li className={`nav-item ${styles.navigation__navitem}`}>
        <a className={`${styles.navigation__navlink}`} aria-current='page' href='#'>Work Order</a>
      </li>
      <li className={`nav-item ${styles.navigation__navitem}`}>
        <a className={`${styles.navigation__navlink}`} aria-current='page' href='#'>Billing</a>
      </li>
    </ul>
  )
}

export default Navigation
