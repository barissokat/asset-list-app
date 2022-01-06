import styles from './Searchbox.module.css'

const Searchbox = props => {
  return (
    <div id='searchbox' className={styles.searchbox}>
      <div className='container text-center'>
        <h1 className={styles.searchbox__title}>Super awesome homepage of your platform</h1>
        <h3 className={styles.searchbox__subtitle}>Start by searching or clicking a listed object below</h3>
      </div>
      <div id='navigation' className='container text-center mt-5'>
        <ul class='nav d-flex justify-content-center'>
          <li class='nav-item' className={styles.active}>
            <a class='nav-link' className={styles.searchbox__navlink} aria-current='page' href='#'>All</a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' className={styles.searchbox__navlink} href='#'>Asset</a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' className={styles.searchbox__navlink} href='#'>Location</a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' className={styles.searchbox__navlink} href='#'>Work Order</a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' className={styles.searchbox__navlink} href='#'>Billing</a>
          </li>
        </ul>
      </div>
      <div id='searchbox' className='container text-center'>
        <div className='d-flex mt-2'>
          <div class='form-group d-flex w-100 mx-5'>
            <input type='text' class='form-control' aria-describedby='helpId' placeholder='> Smart search: Search, type a command or select a function from right' />
            <button type='button' class='btn btn-success btn-lg btn-block'>III</button>
          </div>
        </div>
      </div>
      <div id='saved-queries' className='container text-center mt-2'>
        <ul class='nav d-flex justify-content-center'>
          <li class='nav-item'>
            <a class='nav-link' aria-current='page' href='#'>
              <span className='badge bg-secondary'>Saved Query 1</span>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' aria-current='page' href='#'>
              <span className='badge bg-secondary'>Saved Query 2</span>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' aria-current='page' href='#'>
              <span className='badge bg-secondary'>Saved Query 3</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Searchbox
