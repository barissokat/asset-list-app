import styles from './Widget.module.css'

const Widget = props => {
  return (
    <div id='widget' className={styles.widget}>
      <h6 className={styles.widget__title}>{props.title}</h6>

    </div>
  )
}

export default Widget
