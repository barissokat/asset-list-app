import styles from './SavedQueries.module.css'

const SavedQueries = props => {
  return (
    <ul class='nav d-flex justify-content-center'>
      <li className='nav-item'>
        <a className='nav-link' href='#'>
          <span className={` bg-secondary ${styles.badge}`}>Saved Query 1</span>
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#'>
          <span className={` bg-secondary ${styles.badge}`}>Saved Query 2</span>
        </a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='#'>
          <span className={` bg-secondary ${styles.badge}`}>Saved Query 3</span>
        </a>
      </li>
    </ul>
  )
}

export default SavedQueries
