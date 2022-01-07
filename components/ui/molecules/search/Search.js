import styles from './Search.module.css'

const Search = props => {
  return (
    <div className={styles.search}>
      <input type='text' className={styles.search__input} placeholder={props.placeholder} aria-describedby='basic-addon1' />
      <div type='button' className={styles.search__button}>III</div>
    </div>
  )
}

export default Search
