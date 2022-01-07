import styles from './Card.module.css'

const Card = props => {
  return (
    <div className={styles.card}>
      <h5 className={styles.card__title}>{props.title}</h5>
      <div className='row'>
        <div className='col align-items-end'>
          <p className={styles.card__summary}>
            <span className={styles.card__number}>
              71,897
            </span>
            <span className='ms-2'>
              from 70,46
            </span>
          </p>
        </div>
        <div className='col d-flex align-items-center'>
          <span className={`${styles.card__badge} ${styles.card__badge__success}`}> 12%</span>
        </div>
      </div>
    </div>
  )
}

export default Card
