import CardTable from '../../../molecules/cardTable/CardTable'

import styles from './RecentActivityAcrossSystem.module.css'

const RecentActivityAcrossSystem = props => {
  return (
    <div id='RecentActivityAcrossSystem' className={`${styles.widget}`}>
      <h6 className={styles.widget__title}>{props.title}</h6>
      <CardTable />
    </div>
  )
}

export default RecentActivityAcrossSystem
