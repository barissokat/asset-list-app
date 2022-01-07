import Navigation from '../../molecules/navigation/Navigation'
import SavedQueries from '../../molecules/savedQueries/SavedQueries'
import Search from '../../molecules/search/Search'
import styles from './Searchbox.module.css'

const Searchbox = props => {
  return (
    <div id='searchbox' className={styles.searchbox}>
      <div className='container text-center'>
        <h1 className={styles.searchbox__title}>Super awesome homepage of your platform</h1>
        <h3 className={styles.searchbox__subtitle}>Start by searching or clicking a listed object below</h3>
      </div>
      <div id='navigation' className={`container ${styles.navigation}`}>
        <Navigation />
      </div>
      <div id='search' className={`container ${styles.search}`}>
        <Search placeholder='> Smart search: Search, type a command or select a function from right' />
      </div>
      <div id='saved-queries' className={`container ${styles.saved_queries}`}>
        <SavedQueries />
      </div>
    </div>
  )
}

export default Searchbox
