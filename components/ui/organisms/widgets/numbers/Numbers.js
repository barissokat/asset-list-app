import Card from '../../../molecules/card/Card'
import styles from './Numbers.module.css'

const Numbers = props => {
  return (
    <div id='Numbers' className={`row g-0 ${styles.numbers}`}>
      <div className={`col ${styles.numbers__col}`}>
        <Card title='Total Assets' />
      </div>
      <div className={`col ${styles.numbers__col}`}>
        <Card title='Work order close rate' />
      </div>
      <div className={`col ${styles.numbers__col}`}>
        <Card title='Broke asset rate' />
      </div>
    </div>
  )
}

export default Numbers
